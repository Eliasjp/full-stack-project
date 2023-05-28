import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhoneContactService } from './phone_contact.service';
import { CreatePhoneContactDto } from './dto/create-phone_contact.dto';
import { UpdatePhoneContactDto } from './dto/update-phone_contact.dto';

@Controller('phone-contact')
export class PhoneContactController {
  constructor(private readonly phoneContactService: PhoneContactService) {}

  @Post()
  create(@Body() createPhoneContactDto: CreatePhoneContactDto) {
    return this.phoneContactService.create(createPhoneContactDto);
  }

  @Get()
  findAll() {
    return this.phoneContactService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phoneContactService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhoneContactDto: UpdatePhoneContactDto) {
    return this.phoneContactService.update(+id, updatePhoneContactDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phoneContactService.remove(+id);
  }
}
