"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.petException = void 0;
const common_1 = require("@nestjs/common");
class petException extends common_1.HttpException {
    constructor() {
        super('', common_1.HttpStatus.NOT_FOUND);
    }
}
exports.petException = petException;
//# sourceMappingURL=pet.exception.js.map