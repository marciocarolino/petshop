import { PetDTO } from './dto/pet.dto';
import { PetService } from './pet.service';
export declare class PetController {
    private readonly petService;
    constructor(petService: PetService);
    petAll(): Promise<PetDTO[]>;
    createPet(petDTO: PetDTO, id_owner: number): Promise<PetDTO>;
}
