import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { AppDataSource } from '../../datasource';

import { NextFunction, Request, Response } from 'express';
import { User } from '../../infra/database/models/User.model';

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || 'change_this_in_env',
};

const verify = async (payload: any, done: any) => {
  try {
    const repo = AppDataSource.getRepository(User);
    const user = await repo.findOne({ where: { id: payload.id } });
    if (!user) return done(null, false);
    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
};

const passportJwt = new JwtStrategy(opts, verify);
passport.use(passportJwt);

export default passport;

export function IsAuthenticatedPassport(req: Request, res: Response, next: NextFunction) {
  return passport.authenticate('jwt', { session: false }, (err: any, user: any, info: any) => {
    if (err) return res.status(500).json({ error: 'Authentication error' }).end();
    if (!user) return res.status(401).json({ error: info || 'Not authenticated' }).end();

    (req as any).user = {
      user_id: user.id,
      name: user.name,
      email: user.email,

    };
    return next();
  })(req, res, next);
}
