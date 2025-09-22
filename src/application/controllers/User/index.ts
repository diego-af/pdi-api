import { CreateUserUseCase } from '../../../domain/usecases/User/CreareUserUseCase';
import { UserRepositoryDatabase } from '../../../infra/database/repositories/UserRepositoryDatabase';
import { UserService } from '../../services/User/userService';
import { BcryptHandler } from '../../Utils/EncryptPassWord';
import { CreateUser } from './CreateUser';
import { DeleteUserController } from './DeleteUserController';
import { GetAllUser } from './GetAllUser';
import { UpdateUser } from './UpdateUser';

const userRepository = new UserRepositoryDatabase();
const useCaseUser = new CreateUserUseCase(userRepository);
const bcryptHandler = new BcryptHandler();
const userService = new UserService(useCaseUser, bcryptHandler);

const createUserController = new CreateUser(userService);
const getAllUserCOntroller = new GetAllUser(userService);
const updatedUserController = new UpdateUser(userService);
const deleteuserController = new DeleteUserController(userService);

export { createUserController, getAllUserCOntroller, updatedUserController, deleteuserController };
