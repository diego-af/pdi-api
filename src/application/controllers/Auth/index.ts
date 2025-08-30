import { CreateUserUseCase } from '../../../domain/usecases/User/CreareUserUseCase';

import { UserRepositoryDatabase } from '../../../infra/database/repositories/UserRepositoryDatabase';
import { AuthService } from '../../services/Auth/AuthService';
import { BcryptHandler } from '../../Utils/EncryptPassWord';
import { GenerateToken } from '../../Utils/JwtGenerateToken';
import { AuthController } from './LoginController';

const userRepository = new UserRepositoryDatabase();
const bcryptHandler = new BcryptHandler();

const userUseCase = new CreateUserUseCase(userRepository);

const generateToken = new GenerateToken();

const authService = new AuthService(userUseCase, bcryptHandler, generateToken);
const authController = new AuthController(authService);

export { authController };
