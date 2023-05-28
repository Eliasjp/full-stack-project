import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, OneToMany } from "typeorm"

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({type: "varchar", length: 100, unique: true})
    full_name: string;

    @CreateDateColumn({type: "date"})
    created_at: Date;

    @OneToMany(() => Email, (email) => email.client_owner)
    emails: Email[]

    @OneToMany(() => Phone, (phone) => phone.client_owner)
    phones: Phone[]
}