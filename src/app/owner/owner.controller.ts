import { Controller, Get } from '@nestjs/common';
import { OwnerDTO } from './dto/owner.dto';
import { OwnerService } from './owner.service';

@Controller('owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Get()
  async ownerAll(): Promise<OwnerDTO[]> {
    return this.ownerService.ownerAll();
  }
}
