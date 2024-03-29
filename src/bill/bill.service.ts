import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bill } from '../typeorm/bill.entity';
import { CreateBillDto } from './CreateBillDto.dto';

@Injectable()
export class BillService {
  constructor(
    @InjectRepository(Bill)
    private readonly billRepository: Repository<Bill>,
  ) {}

  async findAll(): Promise<Bill[]> {
    return this.billRepository.find();
  }

  async create(createBillDto: CreateBillDto): Promise<Bill> {
    const newBill = this.billRepository.create(createBillDto);
    return this.billRepository.save(newBill);
  }
}
