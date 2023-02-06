import { ArrayNotEmpty, IsString, IsUrl } from 'class-validator';
import { ProductEntity } from '../../entities';

export class Category {
  @IsString()
  readonly name: string;

  @IsString()
  @IsUrl()
  readonly image: string;

  @ArrayNotEmpty()
  readonly products: ProductEntity[];
}
