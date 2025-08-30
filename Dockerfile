# Base stage
FROM node:22-alpine AS base
WORKDIR /app

# Instalar dependências do sistema necessárias
RUN apk add --no-cache \
    curl \
    postgresql-client \
    && rm -rf /var/cache/apk/*

# Dependencies stage
FROM base AS dependencies
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Development stage
FROM base AS development
COPY package*.json ./
RUN npm ci && npm cache clean --force

# Copiar código fonte
COPY . .

# O estágio de desenvolvimento é executado como root para evitar problemas de permissão de volume.

# Expor porta
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/health || exit 1

# Comando para desenvolvimento (com hot reload)
CMD ["sh", "-c", "npm install && npm run dev"]

# Production stage
FROM base AS production

# Copiar dependências de produção
COPY --from=dependencies /app/node_modules ./node_modules

# Copiar código fonte
COPY . .

# Build da aplicação (se necessário)
RUN npm run build 2>/dev/null || echo "No build script found"

# Criar usuário não-root
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Ajustar permissões
RUN chown -R nodejs:nodejs /app
USER nodejs

# Expor porta
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/health || exit 1

# Comando para produção
CMD ["npm", "start"]