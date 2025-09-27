import { IUserRepository } from '../../repositories/User/UserRepository';
import { UserUseCaseAbstract } from './UserUseCaseAbstract';

export class GetAllUsers extends UserUseCaseAbstract<void> {
  constructor(private userRepository: IUserRepository) {
    super();
  }

  async handleUser() {
    const users = await this.userRepository.getAllUsers();
    return users;
  }
}
