import { EmailClient } from "src/modules/email_client/entities/email_client.entity";
import { PhoneClient } from "src/modules/phone_client/entities/phone_client.entity";
import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, OneToMany } from "typeorm"

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({type: "varchar", length: 100, unique: true})
    full_name: string;

    @CreateDateColumn({type: "date"})
    created_at: Date;

    @OneToMany(() => EmailClient, (email) => email.client)
    emails: EmailClient[]

    @OneToMany(() => PhoneClient, (phone) => phone.client)
    phones: PhoneClient[]
}