import { Entity, PrimaryGeneratedColumn, Column, OneToOne,  FindOptionsRelationsProperty, Decimal128, Int32 } from "typeorm"
import { ColumnEnumOptions } from "typeorm/decorator/options/ColumnEnumOptions"
import { UserRole } from './role'
import { drivers } from "./drivers";


@Entity()


export class employees {

    @PrimaryGeneratedColumn()
    employeeid: number;

    @Column({ 
        length: 100
    })
    name: string;

    @Column({
        length: 100
    })
    surname: string;

    @Column()
    senority: number;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.DRIVER
    })
    role: UserRole;

    @OneToOne(type => drivers, drivers => drivers.employees)
    drivers: drivers;
}
