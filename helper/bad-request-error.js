export class BadRequestError extends Error {
  constructor(message = 'Bad Request', ...params) {
    super(message, ...params);
    this.name = 'BadRequestError';
    this.status = 400;
  }
}
