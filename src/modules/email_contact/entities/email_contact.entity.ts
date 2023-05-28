import { Contact } from "src/modules/contact/entities/contact.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EmailContact {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({type: "varchar", length: 255, unique: true})
    email: string;

    @ManyToOne(() => Contact, (contact) => contact.emails)
    contact: Contact;
}
