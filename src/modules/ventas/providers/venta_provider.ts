import { DataSource } from 'typeorm';
import {
  ProductEntity,
  
} from '@ventas/entities';

import { DataSourceEnum, RepositoryEnum } from '@shared/enums';

export const ventasProviders = [
  {
    provide: RepositoryEnum.PRODUCT_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProductEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
]