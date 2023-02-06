import { Exclude } from 'class-transformer';
import { Expose } from 'class-transformer/types/decorators';
import { BaseProductDto } from './base-product.dto';

@Exclude()
export class ReadProductDto extends BaseProductDto {
  @Expose()
  readonly title;

  @Expose()
  readonly price;

  @Expose()
  readonly category;
}
