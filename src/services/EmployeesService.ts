import { AppDataSource } from '../data-source';
import { employees } from '../entity/employees';

export class EmployeesService {
    private employeesRepository = AppDataSource.getRepository(employees);

    async findAll() {
        return this.employeesRepository.find({
            relations:
            {
                drivers: true,
                mechanics: true
            }
        });
    }

    async findById(employeeId: number) {
        return this.employeesRepository.findOne({
            where: {
                employeeId
            }, relations: {
                drivers: true,
                mechanics: true
            }
        });
    }

    async create(employeesData: employees) {
        const employee = this.employeesRepository.create(employeesData);
        return this.employeesRepository.save(employee);
    }

    async update(employeeId: number, employeesData: employees) {
        let employee = await this.findById(employeeId);
        if (!employee) return null;
        Object.assign(employee, employeesData);
        return this.employeesRepository.save(employee);
    }

    async delete(employeeId: number) {
        return this.employeesRepository.delete(employeeId);
    }
}
