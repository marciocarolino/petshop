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
exports.OwnerEntity = void 0;
const typeorm_1 = require("typeorm");
let OwnerEntity = class OwnerEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id' }),
    __metadata("design:type", Number)
], OwnerEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name' }),
    __metadata("design:type", String)
], OwnerEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cpf' }),
    __metadata("design:type", String)
], OwnerEntity.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'phone' }),
    __metadata("design:type", String)
], OwnerEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'phone_ddd' }),
    __metadata("design:type", String)
], OwnerEntity.prototype, "phone_ddd", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'city' }),
    __metadata("design:type", String)
], OwnerEntity.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'state' }),
    __metadata("design:type", String)
], OwnerEntity.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'active' }),
    __metadata("design:type", Boolean)
], OwnerEntity.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', name: 'created_at' }),
    __metadata("design:type", Date)
], OwnerEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', name: 'updated_at' }),
    __metadata("design:type", Date)
], OwnerEntity.prototype, "updated_at", void 0);
OwnerEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'owner' })
], OwnerEntity);
exports.OwnerEntity = OwnerEntity;
//# sourceMappingURL=owner.entity.js.map