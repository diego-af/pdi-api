import { sign } from 'jsonwebtoken';
import { IUser } from '../../types/User.types';
import { ErrorBoundary } from '../../ErrorClass/ErrorBoundary';

export class GenerateToken {
  async generateUserToken(user: Partial<IUser>): Promise<string> {
    if (!process.env.JWT_SECRET) {
      throw new ErrorBoundary('JWT_SECRET is not defined in the environment variables', 500);
    }
    const token = sign({ name: user.name, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    return token;
  }
}
