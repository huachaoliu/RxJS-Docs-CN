/**
 * 当超时时抛出该错误。
 *
 * @see {@link timeout}
 *
 * @class TimeoutError
 */
export class TimeoutError extends Error {
  constructor() {
    const err: any = super('Timeout has occurred');
    (<any> this).name = err.name = 'TimeoutError';
    (<any> this).stack = err.stack;
    (<any> this).message = err.message;
  }
}
