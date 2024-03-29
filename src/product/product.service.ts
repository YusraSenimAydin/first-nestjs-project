import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../typeorm/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto, UpdateProductDto } from './CreateProductDto.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = this.productRepository.create(createProductDto);
    return await this.productRepository.save(createdProduct);
  }

  async update(
    productId: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const productToUpdate = await this.productRepository.findOne({
      where: {
        productId,
      },
    });
    if (!productToUpdate) {
      throw new NotFoundException('No such product');
    }
    Object.assign(productToUpdate, updateProductDto);
    return this.productRepository.save(productToUpdate);
  }

  async delete(productId: number): Promise<void> {
    const productToDelete = await this.productRepository.findOne({
      where: {
        productId,
      },
    });
    if (!productToDelete) {
      throw new NotFoundException('No such product');
    }
    await this.productRepository.delete(productId);
  }
}
