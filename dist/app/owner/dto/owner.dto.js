"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class OwnerDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'name', example: 'pethsop' }),
    __metadata("design:type", String)
], OwnerDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'cpf', example: '000.000.000-00' }),
    __metadata("design:type", String)
], OwnerDTO.prototype, "cpf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'phone', example: '00000-0000' }),
    __metadata("design:type", String)
], OwnerDTO.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'phone_ddd', example: '61' }),
    __metadata("design:type", String)
], OwnerDTO.prototype, "phone_ddd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'city', example: 'Brasília' }),
    __metadata("design:type", String)
], OwnerDTO.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'state', example: 'DF' }),
    __metadata("design:type", String)
], OwnerDTO.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'active', example: true }),
    __metadata("design:type", Boolean)
], OwnerDTO.prototype, "active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'created_at', example: new Date() }),
    __metadata("design:type", Date)
], OwnerDTO.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'updated_at', example: new Date() }),
    __metadata("design:type", Date)
], OwnerDTO.prototype, "updated_at", void 0);
exports.OwnerDTO = OwnerDTO;
//# sourceMappingURL=owner.dto.js.map