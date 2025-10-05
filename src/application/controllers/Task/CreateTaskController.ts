import { NextFunction, Request, Response } from 'express';
import { TaskControllerAbstract } from './TaskControllerAbstract';
import { CreateTaskService } from '../../services/Task/CreateTask';

export class CreateTaskController extends TaskControllerAbstract {
  constructor(private createTaskService: CreateTaskService) {
    super();
  }

  async handleTask(req: Request, res: Response, next: NextFunction): Promise<any> {
    const user_id = (req as any).user_id;
    try {
      const createtask = await this.createTaskService.handleTask({
        ...req.body,
        userId: user_id,
      });
      return res.status(201).json({
        message: 'Tarefa criada com sucesso',
        task: createtask,
      });
    } catch (error) {
      next(error);
    }
  }
}
