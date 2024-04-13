import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'product_id',
  })
  id: number;
  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  img: string;

  @Column({ nullable: true, type: Number })
  price: number;

  @Column({ nullable: true })
  category: string;
}
