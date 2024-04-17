import { Request, Response } from 'express';
import { EmployeesService } from '../services/EmployeesService';

export class EmployeesController {
    private employeesService: EmployeesService;

    constructor() {
        this.employeesService = new EmployeesService();
    }

     async  getEmployees(req: Request, res: Response): Promise<void> {
        const employees = await this.employeesService.findAll();
        res.json(employees);
    }

     async  getEmployeeById(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.employeeId);
        const employee = await this.employeesService.findById(id);
        if (employee) {
            res.json(employee);
        } else {
            res.status(404).send('Employee not found');
        }
    }

     async  createEmployee(req: Request, res: Response): Promise<void> {
        const employee = await this.employeesService.create(req.body);
        res.status(202).json(employee);
    }

     async  updateEmployee(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.employeeId);
        const updatedEmployee = await this.employeesService.update(id, req.body);
        if (updatedEmployee) {
            res.json(updatedEmployee);
        } else {
            res.status(404).send('Employee not found');
        }
    }

     async  deleteEmployee(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.employeeId);
        await this.employeesService.delete(id);
        res.status(202).send();
    }
}