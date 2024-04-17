import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Double, ManyToOne } from "typeorm"
import { shipments } from './shipments'
import { trucks } from './trucks'
import { drivers } from './drivers'

@Entity()
export class trucktrips {s

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
    @JoinColumn({name: "truckId"})
    trucks: trucks;

    @ManyToOne(type => shipments)
    @JoinColumn({name: "shipmentid"})
    shipments: shipments;

    @ManyToOne(type => drivers, { eager:  true })
    @JoinColumn({name: "drivers1id"})
    drivers1: drivers;

    @ManyToOne(type => drivers, { eager:  true })
    @JoinColumn({name: "drivers2id"})
    drivers2: drivers;

    

    
}


