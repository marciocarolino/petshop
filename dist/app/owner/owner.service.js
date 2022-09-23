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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const owner_entity_1 = require("../../database/entities/owner.entity");
const typeorm_2 = require("typeorm");
const owner_exception_1 = require("./exception/owner.exception");
let OwnerService = class OwnerService {
    constructor(ownerRepository) {
        this.ownerRepository = ownerRepository;
    }
    async ownerAll() {
        return this.ownerRepository.find({
            relations: ['pet'],
            where: { active: true },
            order: { id: 'ASC' },
        });
    }
    async ownerCreate(ownerDTO) {
        const verifyCpf = await this.ownerRepository.findOne({
            relations: ['pet'],
            where: { cpf: ownerDTO.cpf },
        });
        if (verifyCpf) {
            throw new owner_exception_1.OwnerExceptionCPF();
        }
        const createOwner = this.ownerRepository.create(Object.assign(Object.assign({}, ownerDTO), { active: true, created_at: new Date(), updated_at: new Date() }));
        await this.ownerRepository.save(createOwner);
        return createOwner;
    }
    async ownerUpdate(ownerDTO, id_owner) {
        const verifyOwner = await this.ownerRepository.findOne({
            where: { id: id_owner, active: true },
        });
        if (!verifyOwner) {
            throw new owner_exception_1.OwnerExceptionDelete();
        }
        const verifyCpfEquals = await this.ownerRepository.find({
            where: { active: true },
            order: { id: 'ASC' },
        });
        verifyCpfEquals.forEach((item, indice) => {
            if (verifyCpfEquals[indice].id !== verifyOwner.id) {
                if (verifyCpfEquals[indice].cpf === ownerDTO.cpf) {
                    throw new owner_exception_1.OwnerExceptionCPF();
                }
            }
        });
        (verifyOwner.name = ownerDTO.name),
            (verifyOwner.cpf = ownerDTO.cpf),
            (verifyOwner.phone = ownerDTO.phone),
            (verifyOwner.phone_ddd = ownerDTO.phone_ddd),
            (verifyOwner.city = ownerDTO.city),
            (verifyOwner.state = ownerDTO.state),
            (verifyOwner.active = ownerDTO.active),
            await this.ownerRepository.save(verifyOwner);
        return verifyOwner;
    }
    async ownerDelete(id_owner) {
        const verifyOwner = await this.ownerRepository.findOne({
            where: { id: id_owner, active: true },
        });
        if (!verifyOwner) {
            throw new owner_exception_1.OwnerExceptionDelete();
        }
        verifyOwner.updated_at = new Date();
        verifyOwner.active = false;
        await this.ownerRepository.save(verifyOwner);
        return verifyOwner;
    }
};
OwnerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(owner_entity_1.OwnerEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OwnerService);
exports.OwnerService = OwnerService;
//# sourceMappingURL=owner.service.js.map