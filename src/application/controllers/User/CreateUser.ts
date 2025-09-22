import { Request, Response, NextFunction } from 'express';

import { UserService } from '../../services/User/userService';
import { IUser } from '../../../types/User.types';
import { UserAbstractController } from './UserAbstractController';

export class CreateUser extends UserAbstractController {
  constructor(private userService: UserService) {
    super();
  }

  async execute(req: Request, res: Response, next: NextFunction) {
    try {
      const userData: Omit<IUser, 'id'> = req.body;

      const user = await this.userService.createUser(userData);
      return res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
}
