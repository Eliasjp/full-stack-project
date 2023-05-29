import { EmailContact } from "src/modules/email_contact/entities/email_contact.entity";
import { PhoneContact } from "src/modules/phone_contact/entities/phone_contact.entity";
export declare class Contact {
    readonly id: number;
    full_name: string;
    created_at: Date;
    emails: EmailContact[];
    phones: PhoneContact[];
}
