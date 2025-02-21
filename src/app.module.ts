import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SpecialPricesModule } from './special-prices/special-prices.module';

@Module({
  imports: [
    SpecialPricesModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://drenviochallenge:m1jWly3uw42cBwp6@drenviochallenge.2efc0.mongodb.net/tu_basedatos?retryWrites=true&w=majority',
    ),
    SpecialPricesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
