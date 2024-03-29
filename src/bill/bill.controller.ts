import { Controller, Get, Post, Body } from '@nestjs/common';
import { BillService } from './bill.service';
import { Bill } from '../typeorm/bill.entity';
import { CreateBillDto } from './CreateBillDto.dto';

@Controller('bills')
export class BillController {
  constructor(private readonly billsService: BillService) {}

  @Get('get-all')
  async getAllBills(): Promise<Bill[]> {
    return this.billsService.findAll();
  }

  @Post('add-bill')
  async createBill(@Body() createBillDto: CreateBillDto): Promise<Bill> {
    return this.billsService.create(createBillDto);
  }
}
