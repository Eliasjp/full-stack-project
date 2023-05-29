import { CreateEmailClientDto } from './dto/create-email_client.dto';
import { UpdateEmailClientDto } from './dto/update-email_client.dto';
export declare class EmailClientService {
    create(createEmailClientDto: CreateEmailClientDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEmailClientDto: UpdateEmailClientDto): string;
    remove(id: number): string;
}
