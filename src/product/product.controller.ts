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
import { Product } from '../schemas/product.schema';

@Controller('products')
export class ProductController {
  constructor(private readonly productsService: ProductService) {}

  @Get('get-all')
  async getAllProducts(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Post('add-product')
  async createProduct(@Body() productData: any): Promise<Product> {
    return this.productsService.create(productData);
  }

  @Put('update-product/:id')
  async updateProduct(
    @Param('id') productId: string,
    @Body() productData: any,
  ): Promise<Product> {
    return this.productsService.update(productId, productData);
  }

  @Delete('delete-product/:id')
  async deleteProduct(@Param('id') productId: string): Promise<Product> {
    return this.productsService.delete(productId);
  }
}
