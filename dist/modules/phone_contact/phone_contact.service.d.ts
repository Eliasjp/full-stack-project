import { CreatePhoneContactDto } from './dto/create-phone_contact.dto';
import { UpdatePhoneContactDto } from './dto/update-phone_contact.dto';
export declare class PhoneContactService {
    create(createPhoneContactDto: CreatePhoneContactDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePhoneContactDto: UpdatePhoneContactDto): string;
    remove(id: number): string;
}
