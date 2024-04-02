import { IsString, IsArray, IsNumber } from 'class-validator';

export class CreateBillDto {
  @IsString()
  customerName: string;

  @IsString()
  customerPhoneNumber: string;

  @IsString()
  paymentMode: string;

  @IsNumber()
  subTotal: number;

  @IsNumber()
  tax: number;

  @IsNumber()
  totalAmount: number;
}
