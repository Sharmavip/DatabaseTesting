import { AppDataSource } from '../data-source';
import { truckTrips } from '../entity/truckTrips';

export class TruckTripsService {
    private truckTripsRepository = AppDataSource.getRepository(truckTrips);

    async findAll() {
        return this.truckTripsRepository.find({
            relations:
            {
                trucks: true,
                shipments: true,
                driver1: true,
                driver2: true
            }
        });
    }

    async findById(tripId: number) {
        return this.truckTripsRepository.findOne({
            where: {
                tripId
            }, relations: {
                trucks: true,
                shipments: true,
                driver1: true,
                driver2: true
            }
        });
    }

    async create(truckTripsData: truckTrips) {
        const truckTrip = this.truckTripsRepository.create(truckTripsData);
        return this.truckTripsRepository.save(truckTrip);
    }

    async update(truckTripId: number, truckTripsData: truckTrips) {
        let truckTrip = await this.findById(truckTripId);
        if (!truckTrip) return null;
        Object.assign(truckTrip, truckTripsData);
        return this.truckTripsRepository.save(truckTrip);
    }

    async delete(truckTripId: number) {
        return this.truckTripsRepository.delete(truckTripId);
    }
}
