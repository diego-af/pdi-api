import { Repository } from 'typeorm';
import { IUserRepository } from '../../../domain/repositories/User/UserRepository';
import { User } from '../models/User.model';
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
    const users = await this.useRepository
      .createQueryBuilder('user')
      .select(['user.id', 'user.name', 'user.email', 'user.createdAt', 'user.updatedAt'])
      .leftJoinAndSelect('user.tasks', 'tasks')
      .orderBy('user.createdAt', 'DESC')
      .getMany();
    return users;
  }

  async getByUniqueUser(email: string) {
    const user = await this.useRepository.findOneBy({ email: email });
    return user;
  }

  async updateUser(id: string, user: Partial<IUserResponse>) {
    await this.useRepository.update(id, { name: user.name, email: user.email });
    const user_id = id as unknown as number;
    const updatedUser = await this.useRepository.findOneBy({ id: user_id });
    return updatedUser;
  }

  async deleteUser(id: string) {
    const userDeleted = await this.useRepository.delete(id);

    return userDeleted.affected;
  }
}
