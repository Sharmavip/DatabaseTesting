import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Double } from "typeorm"
import { employees } from './employees'

@Entity()
export class drivers {

    @PrimaryGeneratedColumn()
    Driverid: number;

    @Column()
    category: string;

    @OneToOne(type => employees, employees => employees.drivers)
    @JoinColumn({name: "employeeId"})
    employees: employees;
}


