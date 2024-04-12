import "reflect-metadata"
import { DataSource } from "typeorm"
import { trucks } from "./entity/trucks"
import { employees } from "./entity/employees"
import { drivers } from "./entity/drivers"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "172.18.0.3",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "finalproject",
    synchronize: true,
    logging: false,
    entities: [employees,trucks, drivers],
    migrations: [],
    subscribers: [],
})
