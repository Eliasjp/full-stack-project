import { Client } from "src/modules/client/entities/client.entity";
import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn,ManyToMany, JoinTable } from "typeorm"

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({type: "varchar", length: 100, unique: true})
    full_name: string;

    @Column({type: "varchar", length: 255, unique: true})
    emails: string;

    @Column({type: "varchar", unique: true})
    phones: string;

    @CreateDateColumn({type: "date"})
    created_at: Date;

    @ManyToMany(() => Client)
    @JoinTable()
    clients: Client[];
}