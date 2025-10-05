# PDI API

Este projeto é uma API desenvolvida em Node.js com TypeScript para gerenciamento de usuários, tarefas e administradores. Utiliza arquitetura modular, separando controllers, serviços, repositórios e entidades para facilitar manutenção e escalabilidade.

## Estrutura do Projeto

```
docker-compose.yml
Dockerfile
nodemon.json
package.json
tsconfig.json
src/
  routes.ts
  server.ts
  application/
    controllers/
      User/
        index.ts
        UseController.ts
    services/
      User/
        userService.ts
    Utils/
      EncryptPassWord.ts
  datasource/
    index.ts
  domain/
    enities/
      Admin.ts
      Task.ts
      User.ts
    repositories/
      User/
        UserRepository.ts
    usecases/
      User/
        CreareUserUseCase.ts
  ErrorClass/
    ErrorBoundary.ts
  infra/
    database/
      entities/
        Task.entity.ts
        User.entity.ts
      repositories/
        UserRepositoryDatabase.ts
  types/
    User.types.ts
```

## Principais Tecnologias

- Node.js >= 22
- TypeScript
- Docker
- Express

## Como executar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Execute a aplicação:
   ```bash
   npm run dev
   ```
3. Para rodar com Docker:
   ```bash
   docker-compose up --build
   ```

## Funcionalidades

- Cadastro, autenticação e gerenciamento de usuários
- Gerenciamento de tarefas
- Criação e administração de usuários admin

## Contribuição

Pull requests são bem-vindos. Para grandes mudanças, abra uma issue primeiro para discutir o que você gostaria de modificar.

## Licença

Este projeto está sob a licença MIT.
