import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity('products', { schema: 'ventas' })
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    name: 'name',
    unique: true,
    comment: 'nombre de la categoría',
  })
  name: string;

  @Column('varchar', {
    name: 'image',
    unique: true,
    comment: 'Imagen',
  })
  image: string;

  @CreateDateColumn({
    name: 'created_date',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_date',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @OneToMany(() => ProductEntity, (product) => product.category)
  product: ProductEntity[];
}
