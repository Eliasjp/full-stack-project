import { Test, TestingModule } from '@nestjs/testing';
import { EmailClientController } from './email_client.controller';
import { EmailClientService } from './email_client.service';

describe('EmailClientController', () => {
  let controller: EmailClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailClientController],
      providers: [EmailClientService],
    }).compile();

    controller = module.get<EmailClientController>(EmailClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
