import { Injectable } from '@nestjs/common';
import { CreatePhoneClientDto } from './dto/create-phone_client.dto';
import { UpdatePhoneClientDto } from './dto/update-phone_client.dto';

@Injectable()
export class PhoneClientService {
  create(createPhoneClientDto: CreatePhoneClientDto) {
    return 'This action adds a new phoneClient';
  }

  findAll() {
    return `This action returns all phoneClient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} phoneClient`;
  }

  update(id: number, updatePhoneClientDto: UpdatePhoneClientDto) {
    return `This action updates a #${id} phoneClient`;
  }

  remove(id: number) {
    return `This action removes a #${id} phoneClient`;
  }
}
