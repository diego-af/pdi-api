import { randomUUID } from 'crypto';
import { ErrorBoundary } from '../../ErrorClass/ErrorBoundary';

export class Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;

  constructor(title: string, description: string, completed: boolean = false, id?: number) {
    this.id = id || (randomUUID() as unknown as number);

    this.valiadateTitle(title);
    this.title = title;

    this.validateDescription(description);
    this.description = description;

    this.completed = completed;
  }

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  gettitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
  }

  getCompleted(): boolean {
    return this.completed;
  }

  setCompleted(completed: boolean): void {
    this.completed = completed;
  }

  setTitle(title: string): void {
    if (!this.valiadateTitle(title)) {
      throw new ErrorBoundary('Título inválido');
    }

    this.title = title;
  }

  validateDescription(description: string): boolean {
    if (!description) throw new ErrorBoundary('Descrição inválida');

    if (description.length < 3) throw new ErrorBoundary('Descrição curta demais');

    return true;
  }

  valiadateTitle(title: string): boolean {
    if (!title) throw new ErrorBoundary('Título inválido');

    if (title.length < 3) throw new ErrorBoundary('Título curto demais');

    if (title.length > 50) throw new ErrorBoundary('Título longo demais');

    return true;
  }
}
