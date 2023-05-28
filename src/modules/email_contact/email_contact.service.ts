import { Injectable } from '@nestjs/common';
import { CreateEmailContactDto } from './dto/create-email_contact.dto';
import { UpdateEmailContactDto } from './dto/update-email_contact.dto';

@Injectable()
export class EmailContactService {
  create(createEmailContactDto: CreateEmailContactDto) {
    return 'This action adds a new emailContact';
  }

  findAll() {
    return `This action returns all emailContact`;
  }

  findOne(id: number) {
    return `This action returns a #${id} emailContact`;
  }

  update(id: number, updateEmailContactDto: UpdateEmailContactDto) {
    return `This action updates a #${id} emailContact`;
  }

  remove(id: number) {
    return `This action removes a #${id} emailContact`;
  }
}
