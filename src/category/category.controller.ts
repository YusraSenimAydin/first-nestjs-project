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
import { Category } from '../typeorm/category.entity';
import { CreateCategoryDto, UpdateCategoryDto } from './CreateCategoryDto.dto';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoriesService: CategoryService) {}

  @Get('get-all')
  async getAllCategories(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @Post('add-category')
  async createCategory(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return this.categoriesService.create(createCategoryDto);
  }

  @Put('update-category/:id')
  async updateCategory(
    @Param('id') categoryId: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    return this.categoriesService.update(categoryId, updateCategoryDto);
  }

  @Delete('delete-category/:id')
  async deleteCategory(@Param('id') categoryId: number): Promise<void> {
    return this.categoriesService.delete(categoryId);
  }
}
