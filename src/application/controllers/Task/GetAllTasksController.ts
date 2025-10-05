import { NextFunction, Request, Response } from 'express';
import { TaskControllerAbstract } from './TaskControllerAbstract';
import { GetAllTasksService } from '../../services/Task/GetAllTasksService';

export class GetAllTasksController extends TaskControllerAbstract {
  constructor(private taskService: GetAllTasksService) {
    super();
  }
  async handleTask(req: Request, res: Response, next: NextFunction) {
    const user_id = (req as any).user_id;

    try {
      const tasks = await this.taskService.handleTask({ userId: user_id });

      if (tasks.length === 0) {
        return res.status(204).json({
          message: 'Nenhuma tarefa encontrada',
        });
      }
      return res.status(200).json({
        message: 'Tarefas encontradas com sucesso',
        tasks,
      });
    } catch (error) {
      next();
    }
  }
}
