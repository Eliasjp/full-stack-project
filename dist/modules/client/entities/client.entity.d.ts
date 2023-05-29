import { EmailClient } from "src/modules/email_client/entities/email_client.entity";
import { PhoneClient } from "src/modules/phone_client/entities/phone_client.entity";
export declare class Client {
    readonly id: number;
    full_name: string;
    created_at: Date;
    emails: EmailClient[];
    phones: PhoneClient[];
}
