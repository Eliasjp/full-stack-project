import { PartialType } from '@nestjs/mapped-types';
import { CreateEmailContactDto } from './create-email_contact.dto';

export class UpdateEmailContactDto extends PartialType(CreateEmailContactDto) {}
