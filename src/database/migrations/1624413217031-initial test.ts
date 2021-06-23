import { MigrationInterface, QueryRunner } from 'typeorm';

export class initialTest1624413217031 implements MigrationInterface {
    name = 'initialTest1624413217031';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "items" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "weight" integer NOT NULL, "levelRequired" integer NOT NULL, "vocation" character varying NOT NULL, CONSTRAINT "UQ_2e1b2faa806202a35db2ae256ef" UNIQUE ("description"), CONSTRAINT "PK_ba5885359424c15ca6b9e79bcf6" PRIMARY KEY ("id"))`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "items"`);
    }
}
