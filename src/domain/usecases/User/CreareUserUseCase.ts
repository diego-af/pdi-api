import { IUser } from '../../../types/User.types';
import { IUserRepository } from '../../repositories/User/UserRepository';

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}
  async createUser(user: IUser) {
    const userCreated = await this.userRepository.createUser(user);
    return userCreated;
  }

  async getAllusers() {
    const users = await this.userRepository.getAllUsers();
    return users;
  }

  async verifyUserExists(email: string) {
    const user = await this.userRepository.getByUniqueUser(email);

    return user;
  }
}
