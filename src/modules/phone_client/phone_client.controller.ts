import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhoneClientService } from './phone_client.service';
import { CreatePhoneClientDto } from './dto/create-phone_client.dto';
import { UpdatePhoneClientDto } from './dto/update-phone_client.dto';

@Controller('phone-client')
export class PhoneClientController {
  constructor(private readonly phoneClientService: PhoneClientService) {}

  @Post()
  create(@Body() createPhoneClientDto: CreatePhoneClientDto) {
    return this.phoneClientService.create(createPhoneClientDto);
  }

  @Get()
  findAll() {
    return this.phoneClientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phoneClientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhoneClientDto: UpdatePhoneClientDto) {
    return this.phoneClientService.update(+id, updatePhoneClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phoneClientService.remove(+id);
  }
}
