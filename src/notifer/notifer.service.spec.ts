import { Test, TestingModule } from '@nestjs/testing';
import { NotiferService } from './notifer.service';

describe('NotiferService', () => {
  let service: NotiferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotiferService],
    }).compile();

    service = module.get<NotiferService>(NotiferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
