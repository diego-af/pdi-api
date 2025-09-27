import { UpdateUserUseCase } from '../../../domain/usecases/User/UpdateUser';
import { IUser } from '../../../types/User.types';
import { UserServiceAbstract } from './UserServiceAbstract';

interface IUpdateUserParams {
  id: string;
  userUdapted: IUser;
}

export class UpdateUserService extends UserServiceAbstract<IUpdateUserParams> {
  constructor(private useUseCaseUpdatedUser: UpdateUserUseCase) {
    super();
  }

  async handleUSerService({ id, userUdapted }: IUpdateUserParams) {
    const userUpdated = await this.useUseCaseUpdatedUser.handleUser({ id, user: userUdapted });
    return userUpdated;
  }
}
