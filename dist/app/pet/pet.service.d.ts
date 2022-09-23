import { PetEntity } from 'src/database/entities/pet.entity';
import { Repository } from 'typeorm';
export declare class PetService {
    private readonly petRepository;
    constructor(petRepository: Repository<PetEntity>);
    petAll(): Promise<any>;
}
