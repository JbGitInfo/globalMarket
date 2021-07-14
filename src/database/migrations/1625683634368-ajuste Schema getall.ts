import { MigrationInterface, QueryRunner } from 'typeorm';

export class ajusteSchemaGetall1625683634368 implements MigrationInterface {
    name = 'ajusteSchemaGetall1625683634368';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "items" DROP CONSTRAINT "UQ_2e1b2faa806202a35db2ae256ef"`,
        );
        await queryRunner.query(`ALTER TABLE "items" DROP COLUMN "description"`);
        await queryRunner.query(
            `ALTER TABLE "items" ADD "description" character varying(1024) NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "items" ADD CONSTRAINT "UQ_2e1b2faa806202a35db2ae256ef" UNIQUE ("description")`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "items" DROP CONSTRAINT "UQ_2e1b2faa806202a35db2ae256ef"`,
        );
        await queryRunner.query(`ALTER TABLE "items" DROP COLUMN "description"`);
        await queryRunner.query(
            `ALTER TABLE "items" ADD "description" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "items" ADD CONSTRAINT "UQ_2e1b2faa806202a35db2ae256ef" UNIQUE ("description")`,
        );
    }
}
