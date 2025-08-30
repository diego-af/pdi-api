import { CreateUserUseCase } from '../../../domain/usecases/User/CreareUserUseCase';
import { ErrorBoundary } from '../../../ErrorClass/ErrorBoundary';
import { BcryptHandler } from '../../Utils/EncryptPassWord';

export class AuthService {
  constructor(private userUseCase: CreateUserUseCase, private bcrypt: BcryptHandler) {}

  async login(email: string, password: string) {
    const user = await this.userUseCase.verifyUserExists(email);

    if (!user) return new ErrorBoundary('Usuário não encontrado', 404, false);

    const isMatch = await this.bcrypt.comparePassword(password, user.password);

    if (!isMatch) return new ErrorBoundary('Senha incorreta', 401, false);

    return user;
  }
}
