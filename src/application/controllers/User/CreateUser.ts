import { Request, Response, NextFunction } from 'express';
import { IUser } from '../../../types/User.types';
import { UserAbstractController } from './UserAbstractController';
import { UserCreateUserService } from '../../services/User/CreateUserService';

export class CreateUser extends UserAbstractController {
  constructor(private userServiceCreate: UserCreateUserService) {
    super();
  }

  async execute(req: Request, res: Response, next: NextFunction) {
    try {
      const userData: Omit<IUser, 'id'> = req.body;

      const user = await this.userServiceCreate.handleUSerService(userData);
      return res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
}
