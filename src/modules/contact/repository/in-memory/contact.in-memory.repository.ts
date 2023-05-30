import { Injectable } from "@nestjs/common";
import { ContactRepository } from "../contact.repository";
import { Contact } from "../../entities/contact.entity";
import { CreateContactDto } from "../../dto/create-contact.dto";
import { UpdateContactDto } from "../../dto/update-contact.dto";

@Injectable()
export class ContactInMemoryRepository implements ContactRepository {
    private database: Contact[] = []
    create(data: CreateContactDto): Promise<Contact> | Contact{
        const newContact = new Contact()
        Object.assign(newContact, {
            ...data
        })

        this.database.push(newContact)
        return newContact
    }

    findOne(id: string): Contact | Promise<Contact> {
        const find_contact = this.database.find((contact) => contact.id === id)
        return find_contact
    }

    findAll(): Contact[] | Promise<Contact[]> {
        return this.database
    }

    update(id: string, data: UpdateContactDto): Contact | Promise<Contact> {
        const contact_index = this.database.findIndex((contact) => contact.id === id)
        const updated_contact = this.database[contact_index] = {
            ...this.database[contact_index],
            ...data
        }
        return updated_contact
    }

    delete(id: string): void | Promise<void> {
        const contact_index = this.database.findIndex((contact) => contact.id === id)
        this.database.splice(contact_index, 1)
    }
}