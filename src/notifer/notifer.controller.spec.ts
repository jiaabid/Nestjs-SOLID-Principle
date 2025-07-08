import { Test, TestingModule } from '@nestjs/testing';
import { NotiferController } from './notifer.controller';
import { NotiferService } from './notifer.service';

describe('NotiferController', () => {
  let controller: NotiferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotiferController],
      providers: [NotiferService],
    }).compile();

    controller = module.get<NotiferController>(NotiferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
