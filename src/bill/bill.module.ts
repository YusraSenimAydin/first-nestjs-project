import { Module } from '@nestjs/common';
import { BillService } from './bill.service';
import { BillController } from './bill.controller';
import { Bill, BillSchema } from '../schemas/bill.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Bill.name, schema: BillSchema }]),
  ],
  providers: [BillService],
  controllers: [BillController],
  exports: [BillService],
})
export class BillModule {}
