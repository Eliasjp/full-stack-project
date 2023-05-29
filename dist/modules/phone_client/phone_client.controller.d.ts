import { PhoneClientService } from './phone_client.service';
import { CreatePhoneClientDto } from './dto/create-phone_client.dto';
import { UpdatePhoneClientDto } from './dto/update-phone_client.dto';
export declare class PhoneClientController {
    private readonly phoneClientService;
    constructor(phoneClientService: PhoneClientService);
    create(createPhoneClientDto: CreatePhoneClientDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePhoneClientDto: UpdatePhoneClientDto): string;
    remove(id: string): string;
}
