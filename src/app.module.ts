import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './modules/client/client.module';
import { EmailContactModule } from './modules/email_contact/email_contact.module';
import { PhoneContactModule } from './modules/phone_contact/phone_contact.module';
import { PhoneClientModule } from './modules/phone_client/phone_client.module';
import { EmailClientModule } from './modules/email_client/email_client.module';
import { ContactModule } from './modules/contact/contact.module';

@Module({
  imports: [ClientModule, ContactModule, EmailClientModule, PhoneClientModule, PhoneContactModule, EmailContactModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
