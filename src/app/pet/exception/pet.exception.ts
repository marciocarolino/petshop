import { HttpException, HttpStatus } from '@nestjs/common';

export class petException extends HttpException {
  constructor() {
    super('', HttpStatus.NOT_FOUND);
  }
}
