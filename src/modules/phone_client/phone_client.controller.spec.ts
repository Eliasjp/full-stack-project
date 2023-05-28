import { Test, TestingModule } from '@nestjs/testing';
import { PhoneClientController } from './phone_client.controller';
import { PhoneClientService } from './phone_client.service';

describe('PhoneClientController', () => {
  let controller: PhoneClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhoneClientController],
      providers: [PhoneClientService],
    }).compile();

    controller = module.get<PhoneClientController>(PhoneClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
