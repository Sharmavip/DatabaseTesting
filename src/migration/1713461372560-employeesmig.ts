import { MigrationInterface, QueryRunner } from "typeorm";
//import { createConnection } from "typeorm";
import { AppDataSource } from '../data-source';

export class Employeesmig1713461372560 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const connectionOptions = AppDataSource;
        //const connection = await createConnection(AppDataSource);
        
        
            // Insert data into employees table
            await queryRunner.query(`
                INSERT INTO employees (name, surname, seniority, role)
                VALUES ('John', 'Doe', 5, 'DRIVER'),
                       ('Jane', 'Smith', 8, 'MECHANIC'),
                       ('Alice', 'Johnson', 3, 'DRIVER');
            `);
        

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const connectionOptions = AppDataSource;
        //const connection = getConnection(connectionOptions.name || 'default');


        await queryRunner.query(`
            DELETE FROM employees WHERE name IN ('John', 'Jane', 'Alice');
            -- Similarly delete data from other tables
        `);
    }

}
