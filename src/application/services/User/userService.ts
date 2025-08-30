import { CreateUserUseCase } from '../../../domain/usecases/User/CreareUserUseCase';
import { ErrorBoundary } from '../../../ErrorClass/ErrorBoundary';
import { IUser } from '../../../types/User.types';
import { BcryptHandler } from '../../Utils/EncryptPassWord';

export class UserService {
  constructor(private useCaseUser: CreateUserUseCase, private bcrypt: BcryptHandler) {}

  async createUser(user: IUser) {
    const existingUser = await this.useCaseUser.verifyUserExists(user.email);
    if (existingUser) {
      throw new ErrorBoundary('Usuário já existe com este email', 400, false);
    }

    const userPassword = await this.bcrypt.encryptpassword(user.password, 10);
    const userCreated = await this.useCaseUser.createUser({
      ...user,
      password: userPassword,
    });
    return userCreated;
  }

  async getAllUsers() {
    const users = await this.useCaseUser.getAllusers();

    if (!users || users.length === 0) {
      throw new ErrorBoundary('Nenhum usuário encontrado', 200, false);
    }
    return users;
  }

  async updateUser(id: string, user: Partial<IUser>) {
    if (user.password) {
      user.password = await this.bcrypt.encryptpassword(user.password, 10);
    }
    const updatedUser = await this.useCaseUser.updateUser(id, user);
    if (!updatedUser) {
      throw new ErrorBoundary('Usuário não encontrado', 404, false);
    }
    return updatedUser;
  }

  async deleteUser(id: string) {
    const userAlreaydyExists = await this.useCaseUser.verifyUserExists(id);

    if (!userAlreaydyExists) {
      throw new ErrorBoundary('Usuário não encontrado', 404, false);
    }

    const userDeleted = await this.useCaseUser.deleteUser(id);
    return userDeleted;
  }
}
