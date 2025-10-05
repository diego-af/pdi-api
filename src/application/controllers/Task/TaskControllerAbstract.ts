import { NextFunction, Request, Response } from 'express';

export abstract class TaskControllerAbstract {
  abstract handleTask(req: Request, res: Response, next: NextFunction): Promise<any>;
}
