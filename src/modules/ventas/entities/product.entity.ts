import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from '../dto';
import { CategoryEntity } from './category.entity';

@Entity('products', { schema: 'ventas' })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

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

  @DeleteDateColumn({
    name: 'deleted_date',
    type: 'timestamptz',
    nullable: true,
  })
  deletedAt: Date;

  @Column('varchar', {
    name: 'title',
    unique: true,
    comment: 'titulo del producto',
  })
  title: string;

  @Column('number', {
    name: 'price',
    comment: 'precio del producto con dos decimales',
  })
  price: number;

  @Column('varchar', {
    name: 'description',
    nullable: true,
    comment: 'Descripcion del Producto ',
  })
  description: string;

  ///Relaciones
  @ManyToOne(() => CategoryEntity, (category) => category.product)
  category: Category;

  @BeforeInsert()
  @BeforeUpdate()
  async setTitle() {
    if (!this.title) {
      return;
    }
    this.title = this.title.toUpperCase();
  }
}
