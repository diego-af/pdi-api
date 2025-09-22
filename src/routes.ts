import { NextFunction, Router } from 'express';

import { Request, Response } from 'express';
import {
  createUserController,
  deleteuserController,
  getAllUserCOntroller,
  updatedUserController,
} from './application/controllers/User';

import { IsAuthennticated } from './application/middlewares/AuthMiddleware';
import { authController } from './application/controllers/Auth';
const router = Router();

router.post('/users', (req: Request, res: Response, next: NextFunction) => {
  createUserController.execute(req, res, next);
});

router.get('/users', IsAuthennticated, (req: Request, res: Response, next: NextFunction) => {
  getAllUserCOntroller.execute(req, res, next);
});

router.put('/users/:id', (req: Request, res: Response, next: NextFunction) => {
  updatedUserController.execute(req, res, next);
});

router.delete('/users/:id', (req: Request, res: Response, next: NextFunction) => {
  deleteuserController.execute(req, res, next);
});

router.post('/login', (req: Request, res: Response, next: NextFunction) => {
  authController.handleLogin(req, res, next);
});

export { router };
