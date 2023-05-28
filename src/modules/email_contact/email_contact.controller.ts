import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmailContactService } from './email_contact.service';
import { CreateEmailContactDto } from './dto/create-email_contact.dto';
import { UpdateEmailContactDto } from './dto/update-email_contact.dto';

@Controller('email-contact')
export class EmailContactController {
  constructor(private readonly emailContactService: EmailContactService) {}

  @Post()
  create(@Body() createEmailContactDto: CreateEmailContactDto) {
    return this.emailContactService.create(createEmailContactDto);
  }

  @Get()
  findAll() {
    return this.emailContactService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emailContactService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmailContactDto: UpdateEmailContactDto) {
    return this.emailContactService.update(+id, updateEmailContactDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emailContactService.remove(+id);
  }
}
