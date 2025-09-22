import { Request, Response, NextFunction } from 'express';

export abstract class UserAbstractController {
  abstract execute(req: Request, res: Response, next: NextFunction): void;
}
