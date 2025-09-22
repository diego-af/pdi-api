import { UserService } from '../../services/User/userService';
import { UserAbstractController } from './UserAbstractController';

import { Request, Response, NextFunction } from 'express';

export class UpdateUser extends UserAbstractController {
  constructor(private userService: UserService) {
    super();
  }

  async execute(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const userData = req.body;
      const updatedUser = await this.userService.updateUser(id, userData);
      return res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  }
}
