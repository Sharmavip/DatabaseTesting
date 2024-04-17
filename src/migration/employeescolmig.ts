import { MigrationInterface, QueryRunner} from "typeorm";

export class Renamecol implements MigrationInterface {

    public async up(queryrunner: QueryRunner): Promise<void> {
        await queryrunner.query(`Alter table "employees" Rename column surname to lastname`);
    }

    public async down(queryrunner: QueryRunner): Promise<void> {
            await queryrunner.query(`Alter table "employees" Rename column lastname to surname`);
     }
}