export class UnauthenticatedError extends Error {
  constructor(message = 'Unauthenticated') {
    super(message);
    this.name = 'UnauthenticatedError';
    this.status = 401;
  }
}


