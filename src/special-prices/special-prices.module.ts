import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SpecialPricesService } from './special-prices.service';
import { SpecialPricesController } from './special-prices.controller';
import {
  SpecialPrice,
  SpecialPriceSchema,
} from './schemas/special-price.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SpecialPrice.name, schema: SpecialPriceSchema },
    ]),
  ],
  controllers: [SpecialPricesController],
  providers: [SpecialPricesService],
  exports: [SpecialPricesService],
})
export class SpecialPricesModule {}
