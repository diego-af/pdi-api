import { NextFunction, Request, Response, Router } from 'express';

import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  updateCOntrollerUser,
} from './application/controllers/User';

import { authController } from './application/controllers/Auth';
import { IsAuthennticated } from './application/middlewares/AuthMiddleware';
import {
  createTaskController,
  deleteTaskController,
  getallTaskController,
  updateTaskController,
} from './application/controllers/Task';
import { IsAuthenticatedPassport } from './application/passport/jwtStrategy';

const router = Router();

router.post('/users', (req: Request, res: Response, next: NextFunction) => {
  createUserController.execute(req, res, next);
});

router.get('/users', IsAuthenticatedPassport, (req: Request, res: Response, next: NextFunction) => {
  getAllUsersController.execute(req, res, next);
});

router.put('/users/:id', IsAuthenticatedPassport, (req: Request, res: Response, next: NextFunction) => {
  updateCOntrollerUser.execute(req, res, next);
});

router.delete('/users/:id', IsAuthenticatedPassport, (req: Request, res: Response, next: NextFunction) => {
  deleteUserController.execute(req, res, next);
});

router.post('/login', (req: Request, res: Response, next: NextFunction) => {
  authController.handleLogin(req, res, next);
});

//tasks

router.post('/create-task', IsAuthenticatedPassport, (req: Request, res: Response, next: NextFunction) => {
  createTaskController.handleTask(req, res, next);
});

router.get(
  '/get-all-tasks',
  IsAuthenticatedPassport,
  (req: Request, res: Response, next: NextFunction) => {
    getallTaskController.handleTask(req, res, next);
  },
);


router.delete("/delete-task/:id", (req: Request, res: Response, next: NextFunction) => deleteTaskController.handleTask(req, res, next))


router.put("/update-task/:id", IsAuthennticated, (req: Request, res: Response, next: NextFunction) => updateTaskController.handleTask(req, res, next))

export { router };
