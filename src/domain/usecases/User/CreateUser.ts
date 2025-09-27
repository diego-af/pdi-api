import { IUser } from '../../../types/User.types';
import { User } from '../../enities/User';
import { IUserRepository } from '../../repositories/User/UserRepository';
import { UserUseCaseAbstract } from './UserUseCaseAbstract';

export class CreateUserUseCaseHandler extends UserUseCaseAbstract<IUser> {
  constructor(private userRepository: IUserRepository) {
    super();
  }

  async handleUser(user: IUser) {
    const userCreatedNew = new User(user.name, user.email, user.password);

    const userCreated = await this.userRepository.createUser(userCreatedNew);
    return userCreated;
  }
}
