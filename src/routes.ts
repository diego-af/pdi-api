import { NextFunction, Router } from 'express';
import { userController } from './application/controllers/User';
import { Request, Response } from 'express';
const router = Router();

router.post('/users', (req: Request, res: Response, next: NextFunction) => {
  userController.handle(req, res, next);
});

router.get('/users', (req: Request, res: Response, next: NextFunction) => {
  userController.getAllUsersController(req, res, next);
});

export { router };
