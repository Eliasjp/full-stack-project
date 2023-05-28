import { Module } from '@nestjs/common';
import { PhoneContactService } from './phone_contact.service';
import { PhoneContactController } from './phone_contact.controller';

@Module({
  controllers: [PhoneContactController],
  providers: [PhoneContactService]
})
export class PhoneContactModule {}
