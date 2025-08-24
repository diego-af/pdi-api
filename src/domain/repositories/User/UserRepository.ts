import { IUser, IUserResponse } from '../../../types/User.types';

export interface IUserRepository {
  createUser: (user: IUser) => Promise<IUser>;
  getAllUsers: () => Promise<IUserResponse[]>;
  getByUniqueUser: (email: string) => Promise<IUser | null>;
}
