import { NextFunction, Router } from 'express';

import { Request, Response } from 'express';
import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  updateCOntrollerUser,
} from './application/controllers/User';

import { authController } from './application/controllers/Auth';
const router = Router();

router.post('/users', (req: Request, res: Response, next: NextFunction) => {
  createUserController.execute(req, res, next);
});

router.get('/users', (req: Request, res: Response, next: NextFunction) => {
  getAllUsersController.execute(req, res, next);
});

router.put('/users/:id', (req: Request, res: Response, next: NextFunction) => {
  updateCOntrollerUser.execute(req, res, next);
});

router.delete('/users/:id', (req: Request, res: Response, next: NextFunction) => {
  deleteUserController.execute(req, res, next);
});

router.post('/login', (req: Request, res: Response, next: NextFunction) => {
  authController.handleLogin(req, res, next);
});

export { router };
