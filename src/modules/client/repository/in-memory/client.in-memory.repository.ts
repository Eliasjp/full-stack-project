import { plainToInstance } from "class-transformer";
import { CreateClientDto } from "../../dto/create-client.dto";
import { UpdateClientDto } from "../../dto/update-client.dto";
import { Client } from "../../entities/client.entity";
import { ClientRepository } from "../client.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ClientInMemoryRepository implements ClientRepository {
    private database: Client[] = []
    create(data: CreateClientDto): Promise<Client> | Client {
        const newClient = new Client()
        Object.assign(newClient, {
         ...data   
        })
        this.database.push(newClient)

        return plainToInstance(Client, newClient)
    }

    findAll(): Promise<Client[]> | Client[] {
        return plainToInstance(Client, this.database)
    }

    findOne(id: string): Client | Promise<Client> {
        return this.database.find((client) => client.id === id)
    }

    findByEmail(email: string): Client | Promise<Client> {
        return this.database.find((client) => client.email === email)
    }

    findByPhone(phone: string): Client | Promise<Client> {
        return this.database.find((client) => client.phone === phone)
    }

    update(id: string, data: UpdateClientDto): Client | Promise<Client> {
        const client = this.database.findIndex((client) => client.id === id)
        this.database[client] = {
            ...this.database[client],
            ...data
        }

        return plainToInstance(Client, this.database[client])
    }

    delete(id: string): void | Promise<void> {
        const client = this.database.findIndex((client) => client.id === id)
        this.database.splice(client, 1)
    }
}