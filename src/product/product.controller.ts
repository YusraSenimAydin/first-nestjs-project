import { Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto, UpdateProductDto } from './product.dto';
import { Product } from '../schemas/product.schema';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/get-all')
  async findAll() {
    return this.productService.findAll();
  }

  @Post('/add-product')
  async create(@Body() createProductDto: CreateProductDto): Promise<string> {
    await this.productService.create(createProductDto);
    return 'Item added successfully.';
  }

  @Put('/update-product')
  async update(@Body() updateProductDto: UpdateProductDto): Promise<string> {
    await this.productService.update(updateProductDto);
    return 'Item updated successfully.';
  }

  @Delete('/delete-product')
  async delete(@Body('productId') productId: string): Promise<string> {
    await this.productService.delete(productId);
    return 'Item deleted successfully.';
  }
}
export { Product };
