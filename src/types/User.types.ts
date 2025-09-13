export interface IUser {
  name: string;
  email: string;
  password: string;
}

export type IUserLogin = Omit<IUser, 'name'>;
export interface IUserResponse {
  id: string | number | undefined;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
