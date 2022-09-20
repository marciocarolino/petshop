import { Module } from '@nestjs/common';
import { OwnerModule } from './owner/owner.module';

@Module({
  imports: [OwnerModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class PetShopModule {}
