import { Entity, PrimaryGeneratedColumn, Column, Decimal128, Int32 } from "typeorm"
import { ColumnEnumOptions } from "typeorm/decorator/options/ColumnEnumOptions"



@Entity()


export class shipments {

    @PrimaryGeneratedColumn()
    shipmentId: number;

    @Column({ 
        length: 100
    })
    customername: string;

    @Column({
        length: 250
    })
    address: string;

    @Column({
        length: 15
    })
    phone1: string;

    @Column({
        length: 15
    })
    phone2: string;

    @Column("double precision")
    weight: number;

    @Column()
    value: number

    @Column()
    origin: string;

    @Column()
    destination: string;

}
