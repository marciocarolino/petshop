import { Module } from '@nestjs/common';
import { OwnerModule } from './owner/owner.module';
import { PetModule } from './pet/pet.module';

@Module({
  imports: [OwnerModule, PetModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class PetShopModule {}
