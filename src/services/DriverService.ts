import { AppDataSource } from '../data-source';
import { drivers } from '../entity/drivers';

export class DriversService {
    private driversRepository = AppDataSource.getRepository(drivers);

    async findAll() {
        return this.driversRepository.find({
            relations: {
                employees: true,
            },
        });
    }

    async findById(driverId: number) {
        return this.driversRepository.findOne({
            where: {
                driverId,
            }, relations: {
                employees: true,
            },
        });
    }

    async create(driversData: drivers) {
        const drivers = this.driversRepository.create(driversData);
        return this.driversRepository.save(drivers);
    }

    async update(driverId: number, driversData: drivers) {
        let drivers = await this.findById(driverId);
        if (!drivers) return null;
        Object.assign(drivers, driversData);
        return this.driversRepository.save(drivers);
    }

    async delete(driverId: number) {
        return this.driversRepository.delete(driverId);
    }
}
