import { AppDataSource } from "./data-source"
import { trucks } from "./entity/trucks"
import { employees } from "./entity/employees"
import { UserRole } from "./entity/role"
import "reflect-metadata"
import { drivers } from "./entity/drivers"


AppDataSource.initialize().then(async () => {

    console.log("Inserting a new employee into the database...")
    const emp = new employees()
    emp.name = "Tom"
    emp.surname = "Hank"
    emp.senority = 1
    emp.role = UserRole.MECHANIC

    await AppDataSource.manager.save(emp)
    console.log("Saved a new employee with id: " + emp.employeeid)

    console.log("Loading employees from the database...")
    const users = await AppDataSource.manager.find(employees)
    console.log("Loaded employees: ", employees)


    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))

//2nd table
AppDataSource.initialize().then(async () => {

    console.log("Inserting a new Trucks into the database...")
    const tks = new trucks()
    tks.brand = "Tata"
    tks.load = 2000
    tks.capacity = 5000
    tks.year = 2017
    tks.numberofrepairs =2

    await AppDataSource.manager.save(tks)
    console.log("Saved a new truck with id: " + tks.Truckid)

    console.log("Loading Trucks from the database...")
    const users = await AppDataSource.manager.find(trucks)
    console.log("Loaded Trucks: ", trucks)

}).catch(error => console.log(error))


/*
//3rd table
AppDataSource.initialize().then(async () => {

    console.log("Inserting a new Drivers into the database...")
    const drv = new drivers()
    drv.category = "G"
    drv.employees = employees
    

    await AppDataSource.manager.save(drv)
    console.log("Saved a new driver with id: " + drv.Driverid)

    console.log("Loading Drivers from the database...")
    const users = await AppDataSource.manager.find(drivers)
    console.log("Loaded Drivers: ", drivers)

}).catch(error => console.log(error))
*/