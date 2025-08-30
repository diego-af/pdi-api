import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { ErrorBoundary } from '../../ErrorClass/ErrorBoundary';

interface Payload {
  sub: string;
}

export function IsAuthennticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ error: 'Is not authenticated' }).end();
  }

  const [, token] = authToken.split(' ');

  try {
    if (!process.env.JWT_SECRET) {
      throw new ErrorBoundary('Erro no valor do JWT na env');
    }
    const { sub } = verify(token, process.env.JWT_SECRET) as Payload;

    (req as any).user_id = sub;

    return next();
  } catch (err) {
    return res.status(401).json({ error: err }).end();
  }
}
