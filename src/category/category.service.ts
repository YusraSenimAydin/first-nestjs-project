import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from '../typeorm/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto, UpdateCategoryDto } from './CreateCategoryDto.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const createdCategory = this.categoryRepository.create(createCategoryDto);
    return await this.categoryRepository.save(createdCategory);
  }

  async update(
    categoryId: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    const categoryToUpdate = await this.categoryRepository.findOne({
      where: {
        id: categoryId,
      },
    });
    if (!categoryToUpdate) {
      throw new NotFoundException('No such category');
    }
    Object.assign(categoryToUpdate, updateCategoryDto);
    return this.categoryRepository.save(categoryToUpdate);
  }

  async delete(categoryId: number): Promise<void> {
    const categoryToDelete = await this.categoryRepository.findOne({
      where: {
        id: categoryId,
      },
    });
    if (!categoryToDelete) {
      throw new NotFoundException('No such category');
    }
    await this.categoryRepository.delete(categoryId);
  }
}
