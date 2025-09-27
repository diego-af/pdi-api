import { IUserRepository } from '../../repositories/User/UserRepository';
import { UserUseCaseAbstract } from './UserUseCaseAbstract';

interface IDeleteParams {
  id: string;
}

export class DeleteUserUseCase extends UserUseCaseAbstract<IDeleteParams> {
  constructor(private userRepository: IUserRepository) {
    super();
  }

  async handleUser({ id }: IDeleteParams) {
    const updatedUser = await this.userRepository.deleteUser(id);
    return updatedUser;
  }
}
