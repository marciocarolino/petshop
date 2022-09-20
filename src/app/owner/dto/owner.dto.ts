import { ApiProperty } from '@nestjs/swagger';

export class OwnerDTO {
  id: number;

  @ApiProperty({ description: 'name', example: 'pethsop' })
  name: string;

  @ApiProperty({ description: 'cpf', example: '000.000.000-00' })
  cpf: string;

  @ApiProperty({ description: 'phone', example: '00000-0000' })
  phone: string;

  @ApiProperty({ description: 'phone_ddd', example: '61' })
  phone_ddd: string;

  @ApiProperty({ description: 'city', example: 'Brasília' })
  city: string;

  @ApiProperty({ description: 'state', example: 'DF' })
  state: string;

  @ApiProperty({ description: 'active', example: true })
  active: boolean;

  @ApiProperty({ description: 'created_at', example: new Date() })
  created_at: Date;

  @ApiProperty({ description: 'updated_at', example: new Date() })
  updated_at: Date;
}
