import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Double } from "typeorm"
import { employees } from './employees'
import { repairs } from "./repairs";

@Entity()
export class mechanics {

    @PrimaryGeneratedColumn()
    mechanicid: number;

    @Column()
    vehiclebrandspecialization: string;

    @OneToOne(type => employees, employees => employees.drivers)
    @JoinColumn({name: "employeeId"})
    employees: employees;

    @OneToOne(type => repairs, repairs => repairs.mechanics)
    repairs: repairs;
}


