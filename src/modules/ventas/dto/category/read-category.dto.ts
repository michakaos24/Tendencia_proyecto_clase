import { Exclude, Expose } from 'class-transformer';
import { ProductEntity } from '../../entities';

@Exclude()
export class ReadCategoryDTO {
  @Expose()
  readonly name;

  @Expose()
  readonly image;

  @Expose()
  readonly products: ProductEntity;
}
