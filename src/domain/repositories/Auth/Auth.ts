import { IUserResponse } from '../../../types/User.types';

export interface AuthReṕository {
  login: (email: string, password: string) => Promise<IUserResponse | null>;
}
