import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';
@Unique(['description'])
@Entity('items')
export default class Item {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({
        nullable: false,
        length: 300,
        type: 'varchar',
    })
    description: string;
    @Column({
        nullable: false,
        length: 10,
        type: 'varchar',
    })
    weight: number;
    @Column({
        nullable: false,
        length: 10,
        type: 'varchar',
    })
    levelRequired: number;
    @Column({
        nullable: false,
        length: 50,
        type: 'varchar',
    })
    vocation: string;
}
