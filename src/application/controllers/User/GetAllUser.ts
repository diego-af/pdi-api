import { Request, Response, NextFunction } from 'express';
import { UserAbstractController } from './UserAbstractController';

import { GetAllUserService } from '../../services/User/GetAllUserService';

export class GetAllUser extends UserAbstractController {
  constructor(private userServiceGetAllUser: GetAllUserService) {
    super();
  }
  async execute(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.userServiceGetAllUser.handleUSerService();
      return res.status(200).json(users);
    } catch (error) {
      next();
    }
  }
}
