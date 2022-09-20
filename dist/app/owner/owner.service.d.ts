import { OwnerEntity } from 'src/database/entities/owner.entity';
import { Repository } from 'typeorm';
import { OwnerDTO } from './dto/owner.dto';
export declare class OwnerService {
    private ownerRepository;
    constructor(ownerRepository: Repository<OwnerEntity>);
    findAll(): Promise<OwnerDTO[]>;
}
