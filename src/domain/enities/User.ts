import { ErrorBoundary } from '../../ErrorClass/ErrorBoundary';
import { randomUUID } from 'crypto';

export class User {
  id: string;
  name: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password: string, id?: string) {
    this.id = id || randomUUID();

    this.validateName(name);
    this.name = name;

    this.validateEmail(email);
    this.email = email;

    this.validatePassword(password);
    this.password = password;
  }

  validatePassword(password: string): boolean {
    if (password.length < 6) {
      throw new ErrorBoundary('Senha curta demais');
    }
    return true;
  }

  validateName(name: string): boolean {
    if (name.length < 3) {
      throw new ErrorBoundary('Nome curto demais');
    }
    return true;
  }

  setId(id: string) {
    this.id = `USR-${id}`;
  }

  validateEmail(email: string): boolean {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      throw new ErrorBoundary('Email inválido');
    }
    return true;
  }

  setEmail(email: string) {
    if (!email || !this.validateEmail(email)) {
      throw new ErrorBoundary('Email inválido');
    }
    this.email = email;
  }

  setPassword(password: string) {
    if (!password || !this.validatePassword(password)) {
      throw new ErrorBoundary('Senha inválida');
    }
    this.password = password;
  }

  setName(name: string) {
    this.name = name;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }
}
