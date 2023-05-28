import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './modules/client/client.module';
import { ClientModule } from './modules/client/client.module';

@Module({
  imports: [ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}