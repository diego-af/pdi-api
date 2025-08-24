import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { router } from './routes';
import { connectWithRetry } from './datasource';
import { ErrorBoundary } from './ErrorClass/ErrorBoundary';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
const PORT = 3000;

app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
  if (err instanceof ErrorBoundary) {
    res.status(err.statusCode).json({ error: err.message, success: err.successMessage });
    return;
  }

  res.status(500).json({ error: 'Internal Server Error' });
});

async function startServer() {
  try {
    console.log('🔄 Tentando conectar ao banco de dados.. sss. s');
    await connectWithRetry();
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Erro ao conectar com o banco de dados:', error);
    console.error('🔄 Tentando novamente em 10 segundos...');
    setTimeout(startServer, 10000);
  }
}

startServer();
