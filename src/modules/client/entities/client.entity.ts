import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, OneToMany } from "typeorm"

@Entity()
export class Client {
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
}