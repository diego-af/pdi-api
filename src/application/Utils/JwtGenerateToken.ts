import { sign } from 'jsonwebtoken';
import { IUserResponse } from '../../types/User.types';
import { ErrorBoundary } from '../../ErrorClass/ErrorBoundary';

export class GenerateToken {
  async generateUserToken(user: Partial<IUserResponse>): Promise<string> {
    if (!process.env.JWT_SECRET) {
      throw new ErrorBoundary('JWT_SECRET is not defined in the environment variables', 500);
    }
    const token = sign(
      { id: user.id, name: user.name, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: '1d',
      },
    );
    return token;
  }
}
