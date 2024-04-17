import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Double } from "typeorm"
import { mechanics } from './mechanics'
import { trucks } from './trucks'

@Entity()
export class repairs {

    @PrimaryGeneratedColumn()
    repairid: number;

    @Column()
    estimatedtimedays: number;

    @OneToOne(type => trucks, trucks => trucks.repairs)
    @JoinColumn()
    trucks?: trucks;

    @OneToOne(type => mechanics, mechanics => mechanics.repairs)
    @JoinColumn()
    mechanics?: mechanics;

}


