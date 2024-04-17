import { AppDataSource } from '../data-source';
import { trucks } from '../entity/trucks';

export class TrucksService {
    private trucksRepository = AppDataSource.getRepository(trucks);

    async findAll() {
        return this.trucksRepository.find({
            relations: {
                repairs: true,
                truckTrips: true
            }
        });
    }

    async findById(truckId: number) {
        return this.trucksRepository.findOne({
            where: {
                truckId
            }, relations: {
                repairs: true,
                truckTrips: true,
            }
        });
    }

    async create(trucksData: trucks) {
        const truck = this.trucksRepository.create(trucksData);
        return this.trucksRepository.save(truck);
    }

    async update(truckId: number, trucksData: trucks) {
        let truck = await this.findById(truckId);
        if (!truck) return null;
        Object.assign(truck, trucksData);
        return this.trucksRepository.save(truck);
    }

    async delete(truckId: number) {
        return this.trucksRepository.delete(truckId);
    }
}
