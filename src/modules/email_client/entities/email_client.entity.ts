import { Client } from "src/modules/client/entities/client.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EmailClient {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({type: "varchar", length: 255, unique: true})
    email: string;

    @ManyToOne(() => Client, (client) => client.emails)
    client: Client
}
