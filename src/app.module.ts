import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PetShopModule } from './app/petshop.module';
import { DataBaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DataBaseModule,
    PetShopModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
