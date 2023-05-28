import { Test, TestingModule } from '@nestjs/testing';
import { EmailContactService } from './email_contact.service';

describe('EmailContactService', () => {
  let service: EmailContactService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailContactService],
    }).compile();

    service = module.get<EmailContactService>(EmailContactService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
