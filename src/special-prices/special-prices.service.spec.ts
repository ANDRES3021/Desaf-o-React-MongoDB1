import { Test, TestingModule } from '@nestjs/testing';
import { SpecialPricesService } from './special-prices.service';

describe('SpecialPricesService', () => {
  let service: SpecialPricesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpecialPricesService],
    }).compile();

    service = module.get<SpecialPricesService>(SpecialPricesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
