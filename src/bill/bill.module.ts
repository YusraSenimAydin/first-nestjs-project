import { Module } from '@nestjs/common';
import { BillService } from './bill.service';
import { BillController } from './bill.controller';
import { Bill } from '../typeorm/bill.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Bill])],
  providers: [BillService],
  controllers: [BillController],
  exports: [BillService],
})
export class BillModule {}
