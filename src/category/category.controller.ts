import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from '../schemas/category.schema';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoriesService: CategoryService) {}

  @Get('get-all')
  async getAllCategories(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @Post('add-category')
  async createCategory(@Body() categoryData: any): Promise<Category> {
    return this.categoriesService.create(categoryData);
  }

  @Put('update-category/:id')
  async updateCategory(
    @Param('id') categoryId: string,
    @Body() categoryData: any,
  ): Promise<Category> {
    return this.categoriesService.update(categoryId, categoryData);
  }

  @Delete('delete-category/:id')
  async deleteCategory(@Param('id') categoryId: string): Promise<Category> {
    return this.categoriesService.delete(categoryId);
  }
}
