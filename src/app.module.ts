import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './modules/client/client.module';
import { ContactModule } from './modules/contact/contact.module';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [ClientModule, ContactModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
