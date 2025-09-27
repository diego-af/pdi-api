import { UserRepositoryDatabase } from '../../../infra/database/repositories/UserRepositoryDatabase';
import { UserUseCaseAbstract } from './UserUseCaseAbstract';

export class VerifyUserExistsUseCase extends UserUseCaseAbstract<{ email: string }> {
  constructor(private userReposiroty: UserRepositoryDatabase) {
    super();
  }

  async handleUser({ email }: { email: string }) {
    const user = await this.userReposiroty.getByUniqueUser(email);
    return user;
  }
}
