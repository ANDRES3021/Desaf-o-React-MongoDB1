import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SpecialPrice } from './schemas/special-price.schema';
import { CreateSpecialPriceDto } from './dto/create-special-price.dto';

@Injectable()
export class SpecialPricesService {
  constructor(
    @InjectModel(SpecialPrice.name)
    private specialPriceModel: Model<SpecialPrice>,
  ) {}

  async findAll(): Promise<SpecialPrice[]> {
    return this.specialPriceModel.find().exec();
  }

  async create(
    createSpecialPriceDto: CreateSpecialPriceDto,
  ): Promise<SpecialPrice> {
    const createdSpecialPrice = new this.specialPriceModel(
      createSpecialPriceDto,
    );
    return createdSpecialPrice.save();
  }
}
