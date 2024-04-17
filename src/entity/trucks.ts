import { Entity, PrimaryGeneratedColumn, Column, Double, OneToOne, OneToMany } from "typeorm"
import { repairs } from "./repairs";
import { trucktrips } from "./trucktrips";


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

    @OneToOne(type => repairs, repairs => repairs.trucks)
    repairs: repairs;

    @OneToMany(type => trucktrips, trucktrips => trucktrips.trucks)
    trucktrips: trucktrips;

}


