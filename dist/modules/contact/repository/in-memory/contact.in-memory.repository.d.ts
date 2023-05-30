import { ContactRepository } from "../contact.repository";
import { Contact } from "../../entities/contact.entity";
import { CreateContactDto } from "../../dto/create-contact.dto";
import { UpdateContactDto } from "../../dto/update-contact.dto";
export declare class ContactInMemoryRepository implements ContactRepository {
    private database;
    create(data: CreateContactDto): Promise<Contact> | Contact;
    findOne(id: string): Contact | Promise<Contact>;
    findAll(): Contact[] | Promise<Contact[]>;
    update(id: string, data: UpdateContactDto): Contact | Promise<Contact>;
    delete(id: string): void | Promise<void>;
}
