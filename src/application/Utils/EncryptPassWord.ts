import bcrypt from 'bcrypt';

export class BcryptHandler {
  async encryptpassword(password: string, saltRounds: number): Promise<string> {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  async comparePassword(password: string, passwordHash: string): Promise<boolean> {
    const isMatch = await bcrypt.compare(password, passwordHash);

    return isMatch;
  }
}
