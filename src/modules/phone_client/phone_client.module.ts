import { Module } from '@nestjs/common';
import { PhoneClientService } from './phone_client.service';
import { PhoneClientController } from './phone_client.controller';

@Module({
  controllers: [PhoneClientController],
  providers: [PhoneClientService]
})
export class PhoneClientModule {}
