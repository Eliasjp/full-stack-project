import { EmailContactService } from './email_contact.service';
import { CreateEmailContactDto } from './dto/create-email_contact.dto';
import { UpdateEmailContactDto } from './dto/update-email_contact.dto';
export declare class EmailContactController {
    private readonly emailContactService;
    constructor(emailContactService: EmailContactService);
    create(createEmailContactDto: CreateEmailContactDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEmailContactDto: UpdateEmailContactDto): string;
    remove(id: string): string;
}
