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
      relations: ['pet'],
      where: { active: true },
      order: { id: 'ASC' },
    });
  }

  async ownerCreate(ownerDTO: OwnerDTO): Promise<OwnerDTO> {
    const verifyCpf = await this.ownerRepository.findOne({
      relations: ['pet'],
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

  async ownerUpdate(ownerDTO: OwnerDTO, id_owner: number): Promise<OwnerDTO> {
    const verifyOwner = await this.ownerRepository.findOne({
      where: { id: id_owner, active: true },
    });

    if (!verifyOwner) {
      throw new OwnerExceptionDelete();
    }

    const verifyCpfEquals = await this.ownerRepository.find({
      where: { active: true },
      order: { id: 'ASC' },
    });

    verifyCpfEquals.forEach((item, indice) => {
      if (verifyCpfEquals[indice].id !== verifyOwner.id) {
        if (verifyCpfEquals[indice].cpf === ownerDTO.cpf) {
          throw new OwnerExceptionCPF();
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

  async ownerDelete(id_owner: number): Promise<OwnerDTO> {
    const verifyOwner = await this.ownerRepository.findOne({
      where: { id: id_owner, active: true },
    });

    if (!verifyOwner) {
      throw new OwnerExceptionDelete();
    }

    verifyOwner.updated_at = new Date();
    verifyOwner.active = false;

    await this.ownerRepository.save(verifyOwner);
    return verifyOwner;
  }
}
