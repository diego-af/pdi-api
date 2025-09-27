import { Request, Response, NextFunction } from 'express';
import { UserAbstractController } from './UserAbstractController';
import { DeleteUSerService } from '../../services/User/DeleteUserService';

export class DeleteUserController extends UserAbstractController {
  constructor(private userServiceDelete: DeleteUSerService) {
    super();
  }

  async execute(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await this.userServiceDelete.handleUSerService({ id });

      return res.status(204).json({
        message: 'Usuário deletado com sucesso',
      });
    } catch (error) {
      next(error);
    }
  }
}
