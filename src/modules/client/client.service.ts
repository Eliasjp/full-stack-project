import { Body, ConflictException, Delete, Get, Injectable, Param, Patch, Post } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientRepository } from './repository/client.repository'

@Injectable()
export class ClientService {
  constructor(private clientRepository: ClientRepository){}

  @Post()
  async create(@Body() createClientDto: CreateClientDto) {
    const byEmail = this.clientRepository.findByEmail(createClientDto.email)
    const byPhone = this.clientRepository.findByPhone(createClientDto.phone)
    if (byEmail){
      throw new ConflictException("Email already registered")
    }else if (byPhone){
      throw new ConflictException("Phone already registered")
    }
    const client = await this.clientRepository.create(createClientDto)
    return client
  }

  @Get()
  async findAll() {
    const clients = await this.clientRepository.findAll()
    return clients
  }

  @Get()
  async findOne(@Param("id") id: string) {
    const client = await this.clientRepository.findOne(id)
    return client
  }

  @Patch()
  async update(@Param("id") id: string, @Body() updateClientDto: UpdateClientDto) {
    const client = await this.clientRepository.update(id, updateClientDto)
    return client
  }

  @Delete()
  async delete(@Param("id") id: string) {
    await this.clientRepository.delete(id)
  }
}
