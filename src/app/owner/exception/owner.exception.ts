import { HttpException, HttpStatus } from '@nestjs/common';

export class OwnerExceptionCPF extends HttpException {
  constructor() {
    super('CPF JA CADASTRADO!', HttpStatus.BAD_REQUEST);
  }
}

export class OwnerExceptionDelete extends HttpException {
  constructor() {
    super('Owner NÃO ENCONTRADO', HttpStatus.NOT_FOUND);
  }
}
