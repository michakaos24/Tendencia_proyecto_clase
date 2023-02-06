import { DataSourceEnum, RepositoryEnum } from 'src/shared/enums';
import { DataSource } from 'typeorm';
import { ProductEntity } from '../entities';

export const ventasProviders = [
  {
    provide: RepositoryEnum.PRODUCT_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProductEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  /*{
    provide: RepositoryEnum.PLANNING_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(PlanningEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },*/
];
