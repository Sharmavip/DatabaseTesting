import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Double, OneToMany } from "typeorm"
import { employees } from './employees'
import { trucktrips } from "./trucktrips";

@Entity()
export class drivers {

    @PrimaryGeneratedColumn()
    Driverid: number;

    @Column()
    category: string;

    @OneToOne(type => employees, employees => employees.drivers)
    @JoinColumn({name: "employeeId"})
    employees: employees;

    @OneToMany(type => trucktrips, trucktrips => trucktrips.drivers1id)
    trucktrips1: trucktrips;

    @OneToMany(type => trucktrips, trucktrips => trucktrips.drivers2id)
    trucktrips2: trucktrips;
}


