import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bill {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'bill_id' })
  id: string;

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
