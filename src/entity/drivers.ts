import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Double } from "typeorm"
import { employees } from './employees'

@Entity()
export class drivers {

    @PrimaryGeneratedColumn()
    Driverid: number;

    @Column()
    category: string;

    @OneToOne(() => employees)
    @JoinColumn()
    employees: employees;
}


