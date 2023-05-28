import { Test, TestingModule } from '@nestjs/testing';
import { EmailContactController } from './email_contact.controller';
import { EmailContactService } from './email_contact.service';

describe('EmailContactController', () => {
  let controller: EmailContactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailContactController],
      providers: [EmailContactService],
    }).compile();

    controller = module.get<EmailContactController>(EmailContactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
