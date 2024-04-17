import { AppDataSource } from '../data-source';
import { repairs } from '../entity/repairs';

export class RepairsService {
    private repairsRepository = AppDataSource.getRepository(repairs);

    async findAll() {
        return this.repairsRepository.find({
            relations:
            {
                trucks: true,
                mechanics: true
            }
        });
    }

    async findById(repairId: number) {
        return this.repairsRepository.findOne({
            where: {
                repairId
            }, relations: {
                trucks: true,
                mechanics: true
            }
        });
    }

    async create(repairsData: repairs) {
        const repair = this.repairsRepository.create(repairsData);
        return this.repairsRepository.save(repair);
    }

    async update(repairId: number, repairsData: repairs) {
        let repair = await this.findById(repairId);
        if (!repair) return null;
        Object.assign(repair, repairsData);
        return this.repairsRepository.save(repair);
    }

    async delete(repairId: number) {
        return this.repairsRepository.delete(repairId);
    }
}
