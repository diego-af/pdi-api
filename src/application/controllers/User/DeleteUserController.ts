import { UserService } from '../../services/User/userService';
import { Request, Response, NextFunction } from 'express';
import { UserAbstractController } from './UserAbstractController';

export class DeleteUserController extends UserAbstractController {
  constructor(private userService: UserService) {
    super();
  }

  async execute(req: Request, res: Response, next: NextFunction) {
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
