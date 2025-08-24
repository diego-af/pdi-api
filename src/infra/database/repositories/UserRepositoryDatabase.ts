import { Repository } from 'typeorm';
import { IUserRepository } from '../../../domain/repositories/User/UserRepository';
import { User } from '../entities/User.entity';
import { AppDataSource } from '../../../datasource';
import { IUserResponse } from '../../../types/User.types';

export class UserRepositoryDatabase implements IUserRepository {
  private useRepository: Repository<User>;

  constructor() {
    this.useRepository = AppDataSource.getRepository(User);
  }
  async createUser(user: any) {
    const newUser = await this.useRepository.save(user);
    return newUser;
  }

  async getAllUsers(): Promise<IUserResponse[]> {
    const users = await this.useRepository.find({
      select: ['id', 'name', 'email', 'createdAt', 'updatedAt', 'tasks'],
      order: {
        createdAt: 'DESC',
      },
    });
    return users;
  }

  async getByUniqueUser(email: string) {
    const user = await this.useRepository.findOneBy({ email: email });
    return user;
  }
}
