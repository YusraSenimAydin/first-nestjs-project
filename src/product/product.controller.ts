import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from '../typeorm/product.entity';
import { CreateProductDto, UpdateProductDto } from './CreateProductDto.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productsService: ProductService) {}

  @Get('get-all')
  async getAllProducts() {
    return this.productsService.findAll();
  }

  @Post('add-product')
  async createProduct(
    @Body() createProductDto: CreateProductDto,
  ): Promise<Product> {
    return this.productsService.create(createProductDto);
  }

  @Put('update-product/:id')
  async updateProduct(
    @Param('id') productId: number,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productsService.update(productId, updateProductDto);
  }

  @Delete('delete-product/:id')
  async deleteProduct(@Param('id') productId: number): Promise<void> {
    return await this.productsService.delete(productId);
  }
}
