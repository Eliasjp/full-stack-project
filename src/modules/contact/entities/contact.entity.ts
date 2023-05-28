import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, OneToMany } from "typeorm"

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({type: "varchar", length: 100, unique: true})
    full_name: string;

    @CreateDateColumn({type: "date"})
    created_at: Date;

    @OneToMany(() => EmailContact, (email) => email.contact)
    emails: EmailContact[]

    @OneToMany(() => PhoneContact, (phone) => phone.contact)
    phones: PhoneContact[]
}