import { ApiProperty } from '@nestjs/swagger';
import { OwnerEntity } from 'src/database/entities/owner.entity';

export class PetDTO {
  @ApiProperty({ description: 'id', example: 1 })
  id: number;

  @ApiProperty({ description: 'name_pet', example: 'name pet' })
  name_pet: string;

  @ApiProperty({ description: 'raca', example: 'raca ' })
  raca: string;

  @ApiProperty({ description: 'porte', example: 'pequeno | medio | grande' })
  porte: string;

  @ApiProperty({ description: 'especie', example: 'especie' })
  especie: string;

  owner?: OwnerEntity;

  @ApiProperty({ description: 'active', example: true })
  active: boolean;

  @ApiProperty({ description: 'created_at', example: new Date() })
  created_at?: Date;

  @ApiProperty({ description: 'updated_at', example: new Date() })
  updated_at?: Date;
}
