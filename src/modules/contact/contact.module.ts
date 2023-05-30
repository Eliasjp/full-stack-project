import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { ContactRepository } from './repository/contact.repository';
import { ContactInMemoryRepository } from './repository/in-memory/contact.in-memory.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [ContactController],
  providers: [
    ContactService,
    PrismaService,
    {
      provide: ContactRepository,
      useClass: ContactInMemoryRepository
    }
  ]
})
export class ContactModule {}
