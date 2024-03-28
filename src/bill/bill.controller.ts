import { Controller, Get, Post, Body } from '@nestjs/common';
import { BillService } from './bill.service';
import { Bill } from '../schemas/bill.schema';

@Controller('bills')
export class BillController {
  constructor(private readonly billsService: BillService) {}

  @Get('get-all')
  async getAllBills(): Promise<Bill[]> {
    return this.billsService.findAll();
  }

  @Post('add-bill')
  async createBill(@Body() billData: any): Promise<Bill> {
    return this.billsService.create(billData);
  }
}
