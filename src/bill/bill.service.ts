import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bill, BillDocument } from '../schemas/bill.schema';

@Injectable()
export class BillService {
  constructor(
    @InjectModel(Bill.name) private readonly billModel: Model<BillDocument>,
  ) {}

  async findAll(): Promise<Bill[]> {
    return this.billModel.find().exec();
  }

  async create(billData: any): Promise<Bill> {
    const createdBill = new this.billModel(billData);
    return createdBill.save();
  }
}
