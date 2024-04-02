import { IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsString()
  title: string;

  @IsString()
  img: string;

  @IsNumber()
  price: number;

  @IsString()
  category: string;
}

export class UpdateProductDto extends CreateProductDto {
  @IsNumber()
  productId: number;

  @IsString()
  title: string;

  @IsString()
  img: string;

  @IsNumber()
  price: number;

  @IsString()
  category: string;
}
