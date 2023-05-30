import { CreateClientDto } from "../../dto/create-client.dto";
import { UpdateClientDto } from "../../dto/update-client.dto";
import { Client } from "../../entities/client.entity";
import { ClientRepository } from "../client.repository";
export declare class ClientInMemoryRepository implements ClientRepository {
    private database;
    create(data: CreateClientDto): Promise<Client> | Client;
    findAll(): Promise<Client[]> | Client[];
    findOne(id: string): Client | Promise<Client>;
    findByEmail(email: string): Client | Promise<Client>;
    findByPhone(phone: string): Client | Promise<Client>;
    update(id: string, data: UpdateClientDto): Client | Promise<Client>;
    delete(id: string): void | Promise<void>;
}
