import { CreateUserUseCase } from '../../../domain/usecases/User/CreareUserUseCase';
import { ErrorBoundary } from '../../../ErrorClass/ErrorBoundary';
import { BcryptHandler } from '../../Utils/EncryptPassWord';
import { GenerateToken } from '../../Utils/JwtGenerateToken';

export class AuthService {
  constructor(
    private userUseCase: CreateUserUseCase,
    private bcrypt: BcryptHandler,
    private generateToken: GenerateToken,
  ) {}

  async login(email: string, password: string) {
    const user = await this.userUseCase.verifyUserExists(email);

    if (!user) return new ErrorBoundary('Usuário não encontrado', 404, false);

    const isMatch = await this.bcrypt.comparePassword(password, user.password);

    if (!isMatch) return new ErrorBoundary('Senha incorreta', 401, false);

    const token = await this.generateToken.generateUserToken(user);

    return {
      user,
      token,
    };
  }
}
