import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { ClientRepository } from './repository/client.repository';
import { ClientInMemoryRepository } from './repository/in-memory/client.in-memory.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [ClientController],
  providers: [
    ClientService,
    PrismaService,
    {
      provide: ClientRepository,
      useClass: ClientInMemoryRepository
    }
  ]
})
export class ClientModule {}
