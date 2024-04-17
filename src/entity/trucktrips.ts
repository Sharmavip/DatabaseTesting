import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Double, ManyToOne } from "typeorm"
import { shipments } from './shipments'
import { trucks } from './trucks'
import { drivers } from './drivers'

@Entity()
export class truckTrips {

    @PrimaryGeneratedColumn()
    tripid: number;

    @Column()
    routefrom: string;

    @Column()
    routeto: string;

    @Column()
    drivers1id: number;

    @Column()
    drivers2id: number;

    @ManyToOne(type => trucks)
    @JoinColumn()
    trucks?: trucks;

    @ManyToOne(type => shipments)
    @JoinColumn()
    shipments?: shipments;

    @ManyToOne(type => drivers, { eager: true })
    @JoinColumn()
    drivers1?: drivers;

    @ManyToOne(type => drivers, { eager: true })
    @JoinColumn()
    drivers2?: drivers;

}


