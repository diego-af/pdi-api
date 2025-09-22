import { Request, Response, NextFunction } from 'express';
import { UserService } from '../../services/User/userService';

class UseController {
  constructor(private userService: UserService) {}
  async handle(req: Request, res: Response, next: NextFunction) {}

  async getAllUsersController(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.userService.getAllUsers();
      return res.status(200).json(users);
    } catch (error) {
      next();
    }
  }

  async updateUserController(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const userData = req.body;
      const updatedUser = await this.userService.updateUser(id, userData);
      return res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  }

  async deleteUserController(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await this.userService.deleteUser(id);
      return res.status(204).json({
        message: 'Usuário deletado com sucesso',
      });
    } catch (error) {
      next(error);
    }
  }
}

export { UseController };
