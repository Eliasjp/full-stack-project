import { EmailClientService } from './email_client.service';
import { CreateEmailClientDto } from './dto/create-email_client.dto';
import { UpdateEmailClientDto } from './dto/update-email_client.dto';
export declare class EmailClientController {
    private readonly emailClientService;
    constructor(emailClientService: EmailClientService);
    create(createEmailClientDto: CreateEmailClientDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEmailClientDto: UpdateEmailClientDto): string;
    remove(id: string): string;
}
