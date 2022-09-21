import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OwnerDTO } from './dto/owner.dto';
import { OwnerService } from './owner.service';

@ApiTags('Owner')
@Controller('owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Get()
  async ownerAll(): Promise<OwnerDTO[]> {
    return this.ownerService.ownerAll();
  }

  @Post()
  async ownerCreate(@Body() ownerDTO: OwnerDTO): Promise<OwnerDTO> {
    const owner = this.ownerService.ownerCreate(ownerDTO);
    return owner;
  }

  @Put(':id')
  async ownerUpdate(
    @Body() ownerDTO: OwnerDTO,
    @Param('id') id: number,
  ): Promise<OwnerDTO> {
    const ownerUpdate = await this.ownerService.ownerUpdate(ownerDTO, id);
    return ownerUpdate;
  }

  @Delete(':id')
  async ownerDelete(@Param('id') id_owner: number): Promise<any> {
    return await this.ownerService.ownerDelete(id_owner);
  }
}
