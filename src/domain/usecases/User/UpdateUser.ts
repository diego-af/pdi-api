import { IUser } from '../../../types/User.types';
import { User } from '../../enities/User';
import { IUserRepository } from '../../repositories/User/UserRepository';
import { UserUseCaseAbstract } from './UserUseCaseAbstract';

interface IUpdateUserParams {
  id: string;
  user: IUser;
}

export class UpdateUserUseCase extends UserUseCaseAbstract<IUpdateUserParams> {
  constructor(private userRepository: IUserRepository) {
    super();
  }

  async handleUser({ id, user }: { id: string; user: IUser }) {
    const userUpdated = new User(user.name, user.email, user.password);
    const updatedUser = await this.userRepository.updateUser(id, userUpdated);
    return updatedUser;
  }
}
