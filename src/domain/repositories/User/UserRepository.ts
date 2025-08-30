import { IUser, IUserResponse } from '../../../types/User.types';

export interface IUserRepository {
  createUser: (user: IUser) => Promise<IUserResponse>;
  getAllUsers: () => Promise<IUserResponse[]>;
  getByUniqueUser: (email: string) => Promise<IUser | null>;
  updateUser: (id: string, user: Partial<IUser>) => Promise<IUser | null>;
  deleteUser: (id: string) => {};
}
