import { IsString, IsNumber } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  title: string;
}

export class UpdateCategoryDto extends CreateCategoryDto {
  @IsNumber()
  categoryId: number;

  @IsString()
  title: string;
}
