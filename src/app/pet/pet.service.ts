import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PetEntity } from 'src/database/entities/pet.entity';
import { Repository } from 'typeorm';
import { PetDTO } from './dto/pet.dto';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(PetEntity)
    private readonly petRepository: Repository<PetEntity>,
  ) {}

  async petAll(): Promise<PetDTO[]> {
    return this.petRepository.find({
      where: { active: true },
      order: { id: 'ASC' },
    });
  }
}
