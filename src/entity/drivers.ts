import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Double, OneToMany } from "typeorm"
import { employees } from './employees'
import { truckTrips } from "./truckTrips";

@Entity()
export class drivers {

    @PrimaryGeneratedColumn()
    driverId: number;

    @Column()
    category: string;

    @OneToOne(type => employees, employees => employees.drivers)
    @JoinColumn()
    employees?: employees;

    @OneToMany(type => truckTrips, truckTrips => truckTrips.drivers1id)
    truckTrips1?: truckTrips;

    @OneToMany(type => truckTrips, truckTrips => truckTrips.drivers2id)
    truckTrips2?: truckTrips;

}


