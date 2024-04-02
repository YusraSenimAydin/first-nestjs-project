import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;
  @Column({ nullable: true })
  username: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: true })
  password: string;
}
