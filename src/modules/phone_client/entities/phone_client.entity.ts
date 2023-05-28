import { Client } from "src/modules/client/entities/client.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PhoneClient {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({type: "varchar", unique: true})
    phone_number: string;

    @ManyToOne(() => Client, (client) => client.phones)
    client: Client;
}
