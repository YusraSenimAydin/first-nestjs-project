import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from '../schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async create(productData: any): Promise<Product> {
    const createdProduct = new this.productModel(productData);
    return createdProduct.save();
  }

  async update(productId: string, productData: any): Promise<Product> {
    return this.productModel
      .findByIdAndUpdate(productId, productData, { new: true })
      .exec();
  }

  async delete(productId: string): Promise<Product> {
    return this.productModel.findByIdAndDelete(productId).exec();
  }
}
