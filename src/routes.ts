import { NextFunction, Router, Request, Response } from 'express';

import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  updateCOntrollerUser,
} from './application/controllers/User';

import { authController } from './application/controllers/Auth';
import { IsAuthennticated } from './application/middlewares/AuthMiddleware';
import { createTaskController, getallTaskController } from './application/controllers/Task';
const router = Router();

router.post('/users', (req: Request, res: Response, next: NextFunction) => {
  createUserController.execute(req, res, next);
});

router.get('/users', IsAuthennticated, (req: Request, res: Response, next: NextFunction) => {
  getAllUsersController.execute(req, res, next);
});

router.put('/users/:id', IsAuthennticated, (req: Request, res: Response, next: NextFunction) => {
  updateCOntrollerUser.execute(req, res, next);
});

router.delete('/users/:id', IsAuthennticated, (req: Request, res: Response, next: NextFunction) => {
  deleteUserController.execute(req, res, next);
});

router.post('/login', (req: Request, res: Response, next: NextFunction) => {
  authController.handleLogin(req, res, next);
});

//tasks

router.post('/create-task', IsAuthennticated, (req: Request, res: Response, next: NextFunction) => {
  createTaskController.handleTask(req, res, next);
});

router.get(
  '/get-all-tasks',
  IsAuthennticated,
  (req: Request, res: Response, next: NextFunction) => {
    getallTaskController.handleTask(req, res, next);
  },
);

export { router };
