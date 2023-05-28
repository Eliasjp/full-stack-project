import { PartialType } from '@nestjs/mapped-types';
import { CreatePhoneClientDto } from './create-phone_client.dto';

export class UpdatePhoneClientDto extends PartialType(CreatePhoneClientDto) {}
