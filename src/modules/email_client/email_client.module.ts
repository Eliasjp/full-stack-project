import { Module } from '@nestjs/common';
import { EmailClientService } from './email_client.service';
import { EmailClientController } from './email_client.controller';

@Module({
  controllers: [EmailClientController],
  providers: [EmailClientService]
})
export class EmailClientModule {}
