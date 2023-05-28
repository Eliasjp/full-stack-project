import { Contact } from "src/modules/contact/entities/contact.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PhoneContact {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({type: "varchar", unique: true})
    phone: string;

    @ManyToOne(() => Contact, (contact) => contact.phones)
    contact: Contact;
}
