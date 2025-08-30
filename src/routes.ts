import { NextFunction, Router } from 'express';
import { userController } from './application/controllers/User';
import { Request, Response } from 'express';
import { authController } from './application/controllers/Auth';
const router = Router();

router.post('/users', (req: Request, res: Response, next: NextFunction) => {
  userController.handle(req, res, next);
});

router.get('/users', (req: Request, res: Response, next: NextFunction) => {
  userController.getAllUsersController(req, res, next);
});

router.put('/users/:id', (req: Request, res: Response, next: NextFunction) => {
  userController.updateUserController(req, res, next);
});

router.delete('/users/:id', (req: Request, res: Response, next: NextFunction) => {
  userController.deleteUserController(req, res, next);
});

router.post('/login', (req: Request, res: Response, next: NextFunction) => {
  authController.hadnleLogin(req, res, next);
});

export { router };
