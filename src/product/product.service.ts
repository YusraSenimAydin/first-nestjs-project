// product.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from '../schemas/product.schema';
import { CreateProductDto, UpdateProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(createProductDto);
    return newProduct.save();
  }

  async update(updateProductDto: UpdateProductDto): Promise<Product> {
    return this.productModel.findByIdAndUpdate(
      updateProductDto.productId,
      updateProductDto,
      { new: true },
    );
  }

  async delete(productId: string): Promise<void> {
    await this.productModel.findByIdAndDelete(productId).exec();
  }
}
