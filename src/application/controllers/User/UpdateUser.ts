import { UpdateUserService } from '../../services/User/UpdateUserService';
import { UserAbstractController } from './UserAbstractController';

import { Request, Response, NextFunction } from 'express';

export class UpdateUser extends UserAbstractController {
  constructor(private userServiceUpdated: UpdateUserService) {
    super();
  }

  async execute(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const userData = req.body;
      const updatedUser = await this.userServiceUpdated.handleUSerService({
        id,
        userUdapted: userData,
      });
      return res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  }
}
