import { Controller, Get, Post, Body } from '@nestjs/common';
import { SpecialPricesService } from './special-prices.service';
import { CreateSpecialPriceDto } from './dto/create-special-price.dto';
import { SpecialPrice } from './schemas/special-price.schema';

@Controller('special-prices')
export class SpecialPricesController {
  constructor(private readonly specialPricesService: SpecialPricesService) {}

  @Get()
  async findAll(): Promise<SpecialPrice[]> {
    return this.specialPricesService.findAll();
  }

  @Post()
  async create(
    @Body() createSpecialPriceDto: CreateSpecialPriceDto,
  ): Promise<SpecialPrice> {
    return this.specialPricesService.create(createSpecialPriceDto);
  }
}
