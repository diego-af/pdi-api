import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from '../infra/database/models/User.model';
import { Task } from '../infra/database/models/Task.model';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [User, Task],
  migrations: ['src/migration/**/*.ts'],
});

export async function connectWithRetry(maxRetries = 5) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      await AppDataSource.initialize();
      console.log('✅ Conectado ao banco de dados!');
      return;
    } catch (error) {
      console.log(`❌ Tentativa ${i + 1} falhou:`, error?.message);
      if (i === maxRetries - 1) throw error;
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }
}
