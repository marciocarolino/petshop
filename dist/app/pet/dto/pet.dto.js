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
exports.PetDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class PetDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'id', example: 1 }),
    __metadata("design:type", Number)
], PetDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'name_pet', example: 'name pet' }),
    __metadata("design:type", String)
], PetDTO.prototype, "name_pet", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'raca', example: 'raca ' }),
    __metadata("design:type", String)
], PetDTO.prototype, "raca", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'porte', example: 'pequeno | medio | grande' }),
    __metadata("design:type", String)
], PetDTO.prototype, "porte", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'especie', example: 'especie' }),
    __metadata("design:type", String)
], PetDTO.prototype, "especie", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'active', example: true }),
    __metadata("design:type", Boolean)
], PetDTO.prototype, "active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'created_at', example: new Date() }),
    __metadata("design:type", Date)
], PetDTO.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'updated_at', example: new Date() }),
    __metadata("design:type", Date)
], PetDTO.prototype, "updated_at", void 0);
exports.PetDTO = PetDTO;
//# sourceMappingURL=pet.dto.js.map