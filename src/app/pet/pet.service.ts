import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OwnerEntity } from 'src/database/entities/owner.entity';
import { PetEntity } from 'src/database/entities/pet.entity';
import { Repository } from 'typeorm';
import { OwnerExceptionDelete } from '../owner/exception/owner.exception';
import { PetDTO } from './dto/pet.dto';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(PetEntity)
    private readonly petRepository: Repository<PetEntity>,

    @InjectRepository(OwnerEntity)
    private readonly ownerRepository: Repository<OwnerEntity>,
  ) {}

  async petAll(): Promise<any> {
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

  async createPet(petDTO: PetDTO, id_owner: number): Promise<PetDTO> {
    const findOwner = await this.ownerRepository.findOne({
      where: { id: id_owner, active: true },
      select: ['id'],
    });

    if (!findOwner) throw new OwnerExceptionDelete();

    const create_pet = this.petRepository.create({
      ...petDTO,
      owner: findOwner,
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
    });
    return await this.petRepository.save(create_pet);
  }
}
