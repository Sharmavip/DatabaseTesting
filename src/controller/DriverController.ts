import { Request, Response } from 'express';
import { DriversService } from '../services/DriverService';

export class DriversController {
    private driversService: DriversService;

    constructor() {
        this.driversService = new DriversService();
    }

     async  getDrivers(req: Request, res: Response): Promise<void> {
        const drivers = await this.driversService.findAll();
        res.json(drivers);
    }

     async  getDriverById(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.driverId);
        const driver = await this.driversService.findById(id);
        if (driver) {
            res.json(driver);
        } else {
            res.status(404).send('Driver not found');
        }
    }

     async  createDriver(req: Request, res: Response): Promise<void> {
        const driver = await this.driversService.create(req.body);
        res.status(202).json(driver);
    }

     async  updateDriver(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.driverId);
        const updatedDriver = await this.driversService.update(id, req.body);
        if (updatedDriver) {
            res.json(updatedDriver);
        } else {
            res.status(404).send('Driver not found');
        }
    }

     async  deleteDriver(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.driverId);
        await this.driversService.delete(id);
        res.status(202).send();
    }
}