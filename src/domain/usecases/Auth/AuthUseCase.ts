import { AuthReṕository } from '../../repositories/Auth/Auth';

export class AuthUseCase {
  constructor(private authRepository: AuthReṕository) {}

  async login(email: string, password: string) {
    const user = await this.authRepository.login(email, password);

    return user;
  }
}
