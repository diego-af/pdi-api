import { Request, Response, NextFunction } from 'express';
import { UserAbstractController } from './UserAbstractController';
import { UserService } from '../../services/User/userService';

export class GetAllUser extends UserAbstractController {
  constructor(private userService: UserService) {
    super();
  }
  async execute(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.userService.getAllUsers();
      return res.status(200).json(users);
    } catch (error) {
      next();
    }
  }
}
