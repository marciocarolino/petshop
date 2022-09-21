import { OwnerDTO } from './dto/owner.dto';
import { OwnerService } from './owner.service';
export declare class OwnerController {
    private readonly ownerService;
    constructor(ownerService: OwnerService);
    ownerAll(): Promise<OwnerDTO[]>;
    ownerCreate(ownerDTO: OwnerDTO): Promise<OwnerDTO>;
    ownerUpdate(ownerDTO: OwnerDTO, id: number): Promise<OwnerDTO>;
    ownerDelete(id_owner: number): Promise<any>;
}
