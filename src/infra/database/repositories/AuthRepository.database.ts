import { Repository } from 'typeorm';
import { AuthReṕository } from '../../../domain/repositories/Auth/Auth';
import { User } from '../entities/User.entity';
import { AppDataSource } from '../../../datasource';

export class AuthRepositoryDatabase implements AuthReṕository {
  private authRepository: Repository<User>;

  constructor() {
    this.authRepository = AppDataSource.getRepository(User);
  }

  async login(email: string, password: string) {
    const user = await this.authRepository.findOneBy({ email: email, password: password });

    return user;
  }
}
