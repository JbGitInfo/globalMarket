import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';
@Unique(['description'])
@Entity('items')
export default class Item {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    description: string;
    @Column()
    weight: number;
    @Column()
    levelRequired: number;
    @Column()
    vocation: string;
}
