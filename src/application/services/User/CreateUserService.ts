import { CreateUserUseCaseHandler } from '../../../domain/usecases/User/CreateUser';
import { VerifyUserExistsUseCase } from '../../../domain/usecases/User/VerifyUserExists';
import { ErrorBoundary } from '../../../ErrorClass/ErrorBoundary';
import { IUser } from '../../../types/User.types';
import { BcryptHandler } from '../../Utils/EncryptPassWord';
import { UserServiceAbstract } from './UserServiceAbstract';

export class UserCreateUserService extends UserServiceAbstract<IUser> {
  constructor(
    private useCreateUserCase: CreateUserUseCaseHandler,
    private bcrypt: BcryptHandler,
    private verifyUserExists: VerifyUserExistsUseCase,
  ) {
    super();
  }

  async handleUSerService(params: IUser): Promise<any> {
    const existingUser = await this.verifyUserExists.handleUser({ email: params.email });
    if (existingUser) {
      throw new ErrorBoundary('Usuário já existe com este email', 400, false);
    }

    const userPassword = await this.bcrypt.encryptpassword(params.password, 3);
    const userCreated = await this.useCreateUserCase.handleUser({
      ...params,
      password: userPassword,
    });

    return userCreated;
  }
}
