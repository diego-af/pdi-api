import { DeleteUserUseCase } from '../../../domain/usecases/User/DeleteUser';
import { UserServiceAbstract } from './UserServiceAbstract';

export class DeleteUSerService extends UserServiceAbstract<{ id: string }> {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {
    super();
  }

  async handleUSerService({ id }: { id: string }) {
    const userDeleted = await this.deleteUserUseCase.handleUser({ id });
    return userDeleted;
  }
}
