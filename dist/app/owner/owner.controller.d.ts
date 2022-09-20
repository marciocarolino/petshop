import { OwnerDTO } from './dto/owner.dto';
import { OwnerService } from './owner.service';
export declare class OwnerController {
    private readonly ownerService;
    constructor(ownerService: OwnerService);
    ownerAll(): Promise<OwnerDTO[]>;
}
