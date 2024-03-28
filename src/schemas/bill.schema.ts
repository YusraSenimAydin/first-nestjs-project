import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BillDocument = Bill & Document;

@Schema({ timestamps: true })
export class Bill {
  @Prop({ required: true })
  customerName: string;

  @Prop({ required: true })
  customerPhoneNumber: string;

  @Prop({ required: true })
  paymentMode: string;

  @Prop({ required: true })
  cartItems: any[];

  @Prop({ required: true, type: Number })
  subTotal: number;

  @Prop({ required: true, type: Number })
  tax: number;

  @Prop({ required: true, type: Number })
  totalAmount: number;
}

export const BillSchema = SchemaFactory.createForClass(Bill);
