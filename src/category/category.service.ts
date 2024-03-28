import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from '../schemas/category.schema';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async create(categoryData: any): Promise<Category> {
    const createdCategory = new this.categoryModel(categoryData);
    return createdCategory.save();
  }

  async update(categoryId: string, categoryData: any): Promise<Category> {
    return this.categoryModel
      .findByIdAndUpdate(categoryId, categoryData, { new: true })
      .exec();
  }

  async delete(categoryId: string): Promise<Category> {
    return this.categoryModel.findByIdAndDelete(categoryId).exec();
  }
}
