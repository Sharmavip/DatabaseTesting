import { AppDataSource } from '../data-source';
import { shipments } from '../entity/shipments';

export class ShipmentsService {
    private shipmentsRepository = AppDataSource.getRepository(shipments);

    async findAll() {
        return this.shipmentsRepository.find({
            relations: {
                truckTrips: true
            }
        });
    }

    async findById(shipmentId: number) {
        return this.shipmentsRepository.findOne({
            where: {
                shipmentId
            }, relations: {
                truckTrips: true,
            }
        });
    }

    async create(shipmentsData: shipments) {
        const shipment = this.shipmentsRepository.create(shipmentsData);
        return this.shipmentsRepository.save(shipment);
    }

    async update(shipmentId: number, shipmentsData: shipments) {
        let shipment = await this.findById(shipmentId);
        if (!shipment) return null;
        Object.assign(shipment, shipmentsData);
        return this.shipmentsRepository.save(shipment);
    }

    async delete(shipmentId: number) {
        return this.shipmentsRepository.delete(shipmentId);
    }
}
