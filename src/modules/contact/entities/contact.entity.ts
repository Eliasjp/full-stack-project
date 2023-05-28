import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, OneToMany } from "typeorm"

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({type: "varchar", length: 100, unique: true})
    full_name: string;

    @CreateDateColumn({type: "date"})
    created_at: Date;

    @OneToMany(() => Email, (email) => email.contact_owner)
    emails: Email[]

    @OneToMany(() => Phone, (phone) => phone.contact_owner)
    phones: Phone[]
}