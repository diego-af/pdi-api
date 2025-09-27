import { GetAllUsers } from '../../../domain/usecases/User/GetAllUsers';
import { UserServiceAbstract } from './UserServiceAbstract';

export class GetAllUserService extends UserServiceAbstract<void> {
  constructor(private useCaseGetAllUser: GetAllUsers) {
    super();
  }

  async handleUSerService() {
    const users = await this.useCaseGetAllUser.handleUser();

    return users;
  }
}
