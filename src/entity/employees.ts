import { Entity, PrimaryGeneratedColumn, Column, Decimal128, Int32 } from "typeorm"
import { ColumnEnumOptions } from "typeorm/decorator/options/ColumnEnumOptions"
import { UserRole } from './role'


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

}
