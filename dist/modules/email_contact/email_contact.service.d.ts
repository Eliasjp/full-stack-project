import { CreateEmailContactDto } from './dto/create-email_contact.dto';
import { UpdateEmailContactDto } from './dto/update-email_contact.dto';
export declare class EmailContactService {
    create(createEmailContactDto: CreateEmailContactDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEmailContactDto: UpdateEmailContactDto): string;
    remove(id: number): string;
}
