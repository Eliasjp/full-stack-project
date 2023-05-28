import { Test, TestingModule } from '@nestjs/testing';
import { PhoneContactController } from './phone_contact.controller';
import { PhoneContactService } from './phone_contact.service';

describe('PhoneContactController', () => {
  let controller: PhoneContactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhoneContactController],
      providers: [PhoneContactService],
    }).compile();

    controller = module.get<PhoneContactController>(PhoneContactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
