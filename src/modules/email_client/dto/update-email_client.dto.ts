import { PartialType } from '@nestjs/mapped-types';
import { CreateEmailClientDto } from './create-email_client.dto';

export class UpdateEmailClientDto extends PartialType(CreateEmailClientDto) {}
