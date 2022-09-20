import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OwnerEntity } from '../../database/entities/owner.entity';
import { Repository } from 'typeorm';
import { OwnerDTO } from './dto/owner.dto';
import {
  OwnerExceptionCPF,
  OwnerExceptionDelete,
} from './exception/owner.exception';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(OwnerEntity)
    private ownerRepository: Repository<OwnerEntity>,
  ) {}

  async ownerAll(): Promise<OwnerDTO[]> {
    return this.ownerRepository.find({
      where: { active: true },
      order: { id: 'ASC' },
    });
  }

  async ownerCreate(ownerDTO: OwnerDTO): Promise<OwnerDTO> {
    const verifyCpf = await this.ownerRepository.findOne({
      where: { cpf: ownerDTO.cpf },
    });

    if (verifyCpf) {
      throw new OwnerExceptionCPF();
    }

    const createOwner = this.ownerRepository.create({
      ...ownerDTO,
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
    });
    await this.ownerRepository.save(createOwner);
    return createOwner;
  }

  async ownerDelete(id_owner: number): Promise<OwnerDTO> {
    const verifyOwner = await this.ownerRepository.findOne({
      where: { id: id_owner, active: true },
    });

    if (!verifyOwner) {
      throw new OwnerExceptionDelete();
    }

    verifyOwner.updated_at = new Date();
    verifyOwner.active = false;

    const resultDelete = await this.ownerRepository.save(verifyOwner);
    return resultDelete;
  }
}
