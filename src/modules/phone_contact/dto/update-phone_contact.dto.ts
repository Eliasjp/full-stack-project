import { PartialType } from '@nestjs/mapped-types';
import { CreatePhoneContactDto } from './create-phone_contact.dto';

export class UpdatePhoneContactDto extends PartialType(CreatePhoneContactDto) {}
