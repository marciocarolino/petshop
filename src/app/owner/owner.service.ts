import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OwnerEntity } from 'src/database/entities/owner.entity';
import { Repository } from 'typeorm';
import { OwnerDTO } from './dto/owner.dto';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(OwnerEntity)
    private ownerRepository: Repository<OwnerEntity>,
  ) {}

  async ownerAll(): Promise<OwnerDTO[]> {
    return this.ownerRepository.find();
  }

  async ownerCreate(): Promise<OwnerDTO> {
    return null;
  }
}
