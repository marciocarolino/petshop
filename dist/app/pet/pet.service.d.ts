import { OwnerEntity } from 'src/database/entities/owner.entity';
import { PetEntity } from 'src/database/entities/pet.entity';
import { Repository } from 'typeorm';
import { PetDTO } from './dto/pet.dto';
export declare class PetService {
    private readonly petRepository;
    private readonly ownerRepository;
    constructor(petRepository: Repository<PetEntity>, ownerRepository: Repository<OwnerEntity>);
    petAll(): Promise<any>;
    createPet(petDTO: PetDTO, id_owner: number): Promise<PetDTO>;
}
