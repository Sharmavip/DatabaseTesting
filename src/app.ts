import express, { Request, Response } from 'express';
import { AppDataSource } from './data-source';
import { EmployeesController } from './controller/EmployeesController';
import { DriversController } from './controller/DriverController';
import { TrucksController } from './controller/TrucksController';

const app = express();

const driversController = new DriversController();
const employeesController = new EmployeesController();
const trucksController = new TrucksController();

AppDataSource.initialize().then(() => {

    console.log("Data source initialized.");

    app.use(express.json());

    // Driver routes
    app.get('/drivers', (req: Request, res: Response) => driversController.getDrivers(req, res));
    app.get('/driver/:driverId', (req: Request, res: Response) => driversController.getDriverById(req, res));
    app.post('/driver', (req: Request, res: Response) => driversController.createDriver(req, res));
    app.put('/driver/:driverId', (req: Request, res: Response) => driversController.updateDriver(req, res));
    app.delete('/driver/:driverId', (req: Request, res: Response) => driversController.deleteDriver(req, res));

    // Employees routes
    app.get('/employees', (req: Request, res: Response) => employeesController.getEmployees(req, res));
    app.get('/employee/:employeeId', (req: Request, res: Response) => employeesController.getEmployeeById(req, res));
    app.post('/employee', (req: Request, res: Response) => employeesController.createEmployee(req, res));
    app.put('/employee/:employeeId', (req: Request, res: Response) => employeesController.updateEmployee(req, res));
    app.delete('/employee/:employeeId', (req: Request, res: Response) => employeesController.deleteEmployee(req, res));

    // Trucks routes
    app.get('/trucks', (req: Request, res: Response) => trucksController.getTrucks(req, res));
    app.get('/truck/:truckId', (req: Request, res: Response) => trucksController.getTruckById(req, res));
    app.post('/truck', (req: Request, res: Response) => trucksController.createTruck(req, res));
    app.put('/truck/:id', (req: Request, res: Response) => trucksController.updateTruck(req, res));
    app.delete('/truck/:id', (req: Request, res: Response) => trucksController.deleteTruck(req, res));


}).catch(error => console.log("Error intializing data source", error));

// Error handling
app.use((err: any, req: Request, res: Response, next: Function) => {
    console.error(err);
    res.status(500).send('Something went wrong');
});

export default app;
