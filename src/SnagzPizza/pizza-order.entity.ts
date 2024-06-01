import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PizzaOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("simple-array")
  ingredients: string[];

  @Column()
  deliveryAddress: string;

  @Column()
  username: string;
}
