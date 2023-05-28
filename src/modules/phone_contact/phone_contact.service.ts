import { Injectable } from '@nestjs/common';
import { CreatePhoneContactDto } from './dto/create-phone_contact.dto';
import { UpdatePhoneContactDto } from './dto/update-phone_contact.dto';

@Injectable()
export class PhoneContactService {
  create(createPhoneContactDto: CreatePhoneContactDto) {
    return 'This action adds a new phoneContact';
  }

  findAll() {
    return `This action returns all phoneContact`;
  }

  findOne(id: number) {
    return `This action returns a #${id} phoneContact`;
  }

  update(id: number, updatePhoneContactDto: UpdatePhoneContactDto) {
    return `This action updates a #${id} phoneContact`;
  }

  remove(id: number) {
    return `This action removes a #${id} phoneContact`;
  }
}
