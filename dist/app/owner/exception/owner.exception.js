"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerExceptionDelete = exports.OwnerExceptionCPF = void 0;
const common_1 = require("@nestjs/common");
class OwnerExceptionCPF extends common_1.HttpException {
    constructor() {
        super('CPF JA CADASTRADO!', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.OwnerExceptionCPF = OwnerExceptionCPF;
class OwnerExceptionDelete extends common_1.HttpException {
    constructor() {
        super('PROPRIETARIO NÃO ENCONTRADO', common_1.HttpStatus.NOT_FOUND);
    }
}
exports.OwnerExceptionDelete = OwnerExceptionDelete;
//# sourceMappingURL=owner.exception.js.map