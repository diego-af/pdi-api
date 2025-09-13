import { IUser } from '../../../types/User.types';
import { User } from '../../enities/User';
import { IUserRepository } from '../../repositories/User/UserRepository';

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}
  async createUser(user: IUser) {
    const userCreatedNew = new User(user.name, user.email, user.password);

    const userCreated = await this.userRepository.createUser(userCreatedNew);
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

  async updateUser(id: string, user: Partial<IUser>) {
    const updatedUser = await this.userRepository.updateUser(id, user);
    return updatedUser;
  }

  async deleteUser(id: string) {
    const userdeleted = await this.userRepository.deleteUser(id);

    return userdeleted;
  }
}
