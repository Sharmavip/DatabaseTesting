import { Entity, PrimaryGeneratedColumn, Column, Double } from "typeorm"


@Entity()
export class trucks {

    @PrimaryGeneratedColumn()
    Truckid: number;

    @Column()
    brand: string;

    @Column("double precision")
    load: number;

    @Column("double precision")
    capacity: number;

    @Column()
    year: number;

    @Column()
    numberofrepairs: number;

}


