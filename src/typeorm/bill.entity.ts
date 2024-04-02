import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bill {
  @PrimaryGeneratedColumn()
  bill_id: string;

  @Column()
  customerName: string;

  @Column()
  customerPhoneNumber: string;

  @Column()
  paymentMode: string;

  @Column()
  subTotal: number;

  @Column()
  tax: number;

  @Column()
  totalAmount: number;
}
