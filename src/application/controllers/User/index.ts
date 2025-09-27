import { CreateUserUseCaseHandler } from '../../../domain/usecases/User/CreateUser';
import { DeleteUserUseCase } from '../../../domain/usecases/User/DeleteUser';
import { GetAllUsers } from '../../../domain/usecases/User/GetAllUsers';
import { UpdateUserUseCase } from '../../../domain/usecases/User/UpdateUser';
import { VerifyUserExistsUseCase } from '../../../domain/usecases/User/VerifyUserExists';
import { UserRepositoryDatabase } from '../../../infra/database/repositories/UserRepositoryDatabase';
import { UserCreateUserService } from '../../services/User/CreateUserService';
import { DeleteUSerService } from '../../services/User/DeleteUserService';
import { GetAllUserService } from '../../services/User/GetAllUserService';
import { UpdateUserService } from '../../services/User/UpdateUserService';
import { BcryptHandler } from '../../Utils/EncryptPassWord';
import { CreateUser } from './CreateUser';
import { DeleteUserController } from './DeleteUserController';
import { GetAllUser } from './GetAllUser';
import { UpdateUser } from './UpdateUser';

const userRepository = new UserRepositoryDatabase();
const bcryptHandler = new BcryptHandler();
const verifyUserExists = new VerifyUserExistsUseCase(userRepository);

//create
const useCaseUser = new CreateUserUseCaseHandler(userRepository);
const userServiceCreate = new UserCreateUserService(useCaseUser, bcryptHandler, verifyUserExists);
const createUserController = new CreateUser(userServiceCreate);

//getAll users
const useCaseGetAllUsers = new GetAllUsers(userRepository);
const getAllUsersService = new GetAllUserService(useCaseGetAllUsers);
const getAllUsersController = new GetAllUser(getAllUsersService);

//udapted User

const updateUserUseCase = new UpdateUserUseCase(userRepository);
const uopdateUserService = new UpdateUserService(updateUserUseCase);
const updateCOntrollerUser = new UpdateUser(uopdateUserService);

//delete User
const deleteUserUseCase = new DeleteUserUseCase(userRepository);
const deleteUserService = new DeleteUSerService(deleteUserUseCase);
const deleteUserController = new DeleteUserController(deleteUserService);

export { createUserController, getAllUsersController, updateCOntrollerUser, deleteUserController };
