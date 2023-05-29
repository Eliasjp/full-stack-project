import { CreatePhoneClientDto } from './dto/create-phone_client.dto';
import { UpdatePhoneClientDto } from './dto/update-phone_client.dto';
export declare class PhoneClientService {
    create(createPhoneClientDto: CreatePhoneClientDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePhoneClientDto: UpdatePhoneClientDto): string;
    remove(id: number): string;
}
