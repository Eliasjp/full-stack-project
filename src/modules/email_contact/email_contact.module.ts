import { Module } from '@nestjs/common';
import { EmailContactService } from './email_contact.service';
import { EmailContactController } from './email_contact.controller';

@Module({
  controllers: [EmailContactController],
  providers: [EmailContactService]
})
export class EmailContactModule {}
