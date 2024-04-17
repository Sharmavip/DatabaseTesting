import { AppDataSource } from '../data-source';
import { mechanics } from '../entity/mechanics';

export class MechanicsService {
    private mechanicsRepository = AppDataSource.getRepository(mechanics);

    async findAll() {
        return this.mechanicsRepository.find({
            relations:
            {
                employees: true,
                repairs: true
            }
        });
    }

    async findById(mechanicId: number) {
        return this.mechanicsRepository.findOne({
            where: {
                mechanicId
            }, relations: {
                employees: true,
                repairs: true
            }
        });
    }

    async create(mechanicsData: mechanics) {
        const mechanic = this.mechanicsRepository.create(mechanicsData);
        return this.mechanicsRepository.save(mechanic);
    }

    async update(mechanicId: number, mechanicsData: mechanics) {
        let mechanic = await this.findById(mechanicId);
        if (!mechanic) return null;
        Object.assign(mechanic, mechanicsData);
        return this.mechanicsRepository.save(mechanic);
    }

    async delete(mechanicId: number) {
        return this.mechanicsRepository.delete(mechanicId);
    }
}
