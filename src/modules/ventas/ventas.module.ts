import { Global, Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/seeds/database.module';
import { ventasProviders } from './providers';

@Global()
@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [...ventasProviders],
  exports: [...ventasProviders],
})
export class VentasModule {}
