import { Test, TestingModule } from '@nestjs/testing';
import { SpecialPricesController } from './special-prices.controller';

describe('SpecialPricesController', () => {
  let controller: SpecialPricesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpecialPricesController],
    }).compile();

    controller = module.get<SpecialPricesController>(SpecialPricesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
