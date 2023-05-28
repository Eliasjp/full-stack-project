import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmailClientService } from './email_client.service';
import { CreateEmailClientDto } from './dto/create-email_client.dto';
import { UpdateEmailClientDto } from './dto/update-email_client.dto';

@Controller('email-client')
export class EmailClientController {
  constructor(private readonly emailClientService: EmailClientService) {}

  @Post()
  create(@Body() createEmailClientDto: CreateEmailClientDto) {
    return this.emailClientService.create(createEmailClientDto);
  }

  @Get()
  findAll() {
    return this.emailClientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emailClientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmailClientDto: UpdateEmailClientDto) {
    return this.emailClientService.update(+id, updateEmailClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emailClientService.remove(+id);
  }
}
