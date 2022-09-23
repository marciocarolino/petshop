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
exports.PetEntity = void 0;
const typeorm_1 = require("typeorm");
const owner_entity_1 = require("./owner.entity");
let PetEntity = class PetEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id' }),
    __metadata("design:type", Number)
], PetEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name_pet' }),
    __metadata("design:type", String)
], PetEntity.prototype, "name_pet", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'raca' }),
    __metadata("design:type", String)
], PetEntity.prototype, "raca", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'porte' }),
    __metadata("design:type", String)
], PetEntity.prototype, "porte", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'especie' }),
    __metadata("design:type", String)
], PetEntity.prototype, "especie", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => owner_entity_1.OwnerEntity, (owner) => owner.pet),
    (0, typeorm_1.JoinColumn)({ name: 'id_owner' }),
    __metadata("design:type", owner_entity_1.OwnerEntity)
], PetEntity.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'active' }),
    __metadata("design:type", Boolean)
], PetEntity.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], PetEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updated_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], PetEntity.prototype, "updated_at", void 0);
PetEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'pet' })
], PetEntity);
exports.PetEntity = PetEntity;
//# sourceMappingURL=pet.entity.js.map