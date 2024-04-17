import { Request, Response } from 'express';
import { TrucksService } from '../services/TrucksService';

export class TrucksController {
    private trucksService: TrucksService;

    constructor() {
        this.trucksService = new TrucksService();
    }

    async getTrucks(req: Request, res: Response): Promise<void> {
        const trucks = await this.trucksService.findAll();
        res.json(trucks);
    }

    async getTruckById(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.truckId);
        const truck = await this.trucksService.findById(id);
        if (truck) {
            res.json(truck);
        } else {
            res.status(404).send('Truck not found');
        }
    }

    async createTruck(req: Request, res: Response): Promise<void> {
        const truck = await this.trucksService.create(req.body);
        res.status(202).json(truck);
    }

    async updateTruck(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.truckId);
        const updatedtruck = await this.trucksService.update(id, req.body);
        if (updatedtruck) {
            res.json(updatedtruck);
        } else {
            res.status(404).send('Truck not found');
        }
    }

    async deleteTruck(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.truckId);
        await this.trucksService.delete(id);
        res.status(202).send();
    }
}