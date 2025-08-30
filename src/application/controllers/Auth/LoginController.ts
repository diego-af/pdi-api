import { AuthService } from '../../services/Auth/AuthService';

import { NextFunction, Request, Response } from 'express';

export class AuthController {
  constructor(private authService: AuthService) {}

  async hadnleLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      const user = await this.authService.login(email, password);

      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }
}
