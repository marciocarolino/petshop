import { OwnerEntity } from '../../database/entities/owner.entity';
import { Repository } from 'typeorm';
import { OwnerDTO } from './dto/owner.dto';
export declare class OwnerService {
    private ownerRepository;
    constructor(ownerRepository: Repository<OwnerEntity>);
    ownerAll(): Promise<OwnerDTO[]>;
    ownerCreate(ownerDTO: OwnerDTO): Promise<OwnerDTO>;
    ownerUpdate(ownerDTO: OwnerDTO, id_owner: number): Promise<OwnerDTO>;
    ownerDelete(id_owner: number): Promise<OwnerDTO>;
}
