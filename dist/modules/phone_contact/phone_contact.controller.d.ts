import { PhoneContactService } from './phone_contact.service';
import { CreatePhoneContactDto } from './dto/create-phone_contact.dto';
import { UpdatePhoneContactDto } from './dto/update-phone_contact.dto';
export declare class PhoneContactController {
    private readonly phoneContactService;
    constructor(phoneContactService: PhoneContactService);
    create(createPhoneContactDto: CreatePhoneContactDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePhoneContactDto: UpdatePhoneContactDto): string;
    remove(id: string): string;
}
