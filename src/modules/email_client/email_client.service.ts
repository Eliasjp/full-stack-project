import { Injectable } from '@nestjs/common';
import { CreateEmailClientDto } from './dto/create-email_client.dto';
import { UpdateEmailClientDto } from './dto/update-email_client.dto';

@Injectable()
export class EmailClientService {
  create(createEmailClientDto: CreateEmailClientDto) {
    return 'This action adds a new emailClient';
  }

  findAll() {
    return `This action returns all emailClient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} emailClient`;
  }

  update(id: number, updateEmailClientDto: UpdateEmailClientDto) {
    return `This action updates a #${id} emailClient`;
  }

  remove(id: number) {
    return `This action removes a #${id} emailClient`;
  }
}
