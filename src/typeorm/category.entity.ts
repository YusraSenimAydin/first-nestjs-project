import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'category_id',
  })
  id: number;

  @Column({ nullable: true })
  title: string;
}
