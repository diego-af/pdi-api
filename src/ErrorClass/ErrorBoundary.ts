export class ErrorBoundary extends Error {
  private _status: number;
  private success: boolean;
  constructor(message: string, statusCode: number = 400, success: boolean = false) {
    super(message);
    this.name = 'ErrorBoundary';
    this._status = statusCode;
    this.success = success;
  }

  get statusCode(): number {
    return this._status;
  }

  get successMessage(): boolean {
    return this.success;
  }
}
