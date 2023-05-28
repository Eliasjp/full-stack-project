import { Test, TestingModule } from '@nestjs/testing';
import { PhoneContactService } from './phone_contact.service';

describe('PhoneContactService', () => {
  let service: PhoneContactService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhoneContactService],
    }).compile();

    service = module.get<PhoneContactService>(PhoneContactService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
