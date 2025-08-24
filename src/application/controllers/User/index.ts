import { CreateUserUseCase } from '../../../domain/usecases/User/CreareUserUseCase';
import { UserRepositoryDatabase } from '../../../infra/database/repositories/UserRepositoryDatabase';
import { UserService } from '../../services/User/userService';
import { BcryptHandler } from '../../Utils/EncryptPassWord';
import { UseController } from './UseController';

const userRepository = new UserRepositoryDatabase();
const useCaseUser = new CreateUserUseCase(userRepository);
const bcryptHandler = new BcryptHandler();
const userService = new UserService(useCaseUser, bcryptHandler);
const userController = new UseController(userService);

export { userController };
