import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PetDTO } from './dto/pet.dto';
import { PetService } from './pet.service';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get()
  async petAll(): Promise<PetDTO[]> {
    return this.petService.petAll();
  }

  @Post(':id')
  async createPet(
    @Body() petDTO: PetDTO,
    @Param('id') id_owner: number,
  ): Promise<PetDTO> {
    return this.petService.createPet(petDTO, id_owner);
  }
}
