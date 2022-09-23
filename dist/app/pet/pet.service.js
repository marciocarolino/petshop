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
exports.PetService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const owner_entity_1 = require("../../database/entities/owner.entity");
const pet_entity_1 = require("../../database/entities/pet.entity");
const typeorm_2 = require("typeorm");
const owner_exception_1 = require("../owner/exception/owner.exception");
let PetService = class PetService {
    constructor(petRepository, ownerRepository) {
        this.petRepository = petRepository;
        this.ownerRepository = ownerRepository;
    }
    async petAll() {
        const resultPetAll = await this.petRepository.find({
            relations: ['owner'],
            where: { active: true },
            order: { id: 'ASC' },
        });
        const result = resultPetAll.map((result) => {
            return {
                id: result.id,
                name_pet: result.name_pet,
                raca: result.raca,
                porte: result.porte,
                especie: result.especie,
                active: result.active,
                created_at: result.created_at,
                owner: {
                    id: result.owner.id,
                    name: result.owner.name,
                    phone: result.owner.phone,
                    phone_ddd: result.owner.phone_ddd,
                    city: result.owner.city,
                    state: result.owner.state,
                    created_at: result.owner.created_at,
                },
            };
        });
        return result;
    }
    async createPet(petDTO, id_owner) {
        const findOwner = await this.ownerRepository.findOne({
            where: { id: id_owner, active: true },
            select: ['id'],
        });
        if (!findOwner)
            throw new owner_exception_1.OwnerExceptionDelete();
        const create_pet = this.petRepository.create(Object.assign(Object.assign({}, petDTO), { owner: findOwner, active: true, created_at: new Date(), updated_at: new Date() }));
        return await this.petRepository.save(create_pet);
    }
};
PetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pet_entity_1.PetEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(owner_entity_1.OwnerEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PetService);
exports.PetService = PetService;
//# sourceMappingURL=pet.service.js.map