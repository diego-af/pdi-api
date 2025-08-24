import { Request, Response, NextFunction } from 'express';
import { UserService } from '../../services/User/userService';

class UseController {
  constructor(private userService: UserService) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  async getAllUsersController(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.userService.getAllUsers();
      return res.status(200).json(users);
    } catch (error) {
      next();
    }
  }
}

export { UseController };
