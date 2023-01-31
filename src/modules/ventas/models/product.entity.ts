import { BeforeInsert, 
         BeforeUpdate, 
         Column, 
         CreateDateColumn, 
         DeleteDateColumn, 
         Entity, 
         ManyToOne, 
         PrimaryGeneratedColumn, 
         UpdateDateColumn } from "typeorm";
import { CategoryEntity } from "./category.entity";

@Entity('products', {schema:'ventas'} )
export class ProductEntity{
    @PrimaryGeneratedColumn('sv')
    id:string;
    //Crear
    @CreateDateColumn({
        name:'created_date',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
      })
      createdAt: Date;
      //Actualizar
    @UpdateDateColumn({
      name:'updated_date',
      type:'timestamptz',
      default:() => 'CURRENT_TIMESTAMP',
    })
    updatedAt: Date;
    //Borrar
    @DeleteDateColumn({
      name:'deleted_date',
      type:'timestamptz',
      default:() => 'CURRENT_TIMESTAMP',
    })
    deletedAt: Date;
    //Relaciones
    @ManyToOne(() => CategoryEntity, (category) => category.products)
    category: CategoryEntity;
    //Columna de Titulo
    @Column('varchar', {
      name:'title',
      unique:true,
      comment:'Titulo del producto',
    })
    title: string;
    //Columna de Precio
    @Column('number', {
      name:'price',
      comment:'Precio del producto con dos decimales',
    })
    price: number;
    //Columna de Descripción
    @Column('varchar', {
      name:'description',
      nullable:true,
      comment:'Descripción del producto',
    })
    description: string;
    @BeforeInsert()
    @BeforeUpdate()
    async setTitle(){
      if(!this.title){
        return;
      }
      this.title = this.title.toUpperCase();
    }
    /* async hashPassword({
       if(!this.password){
         return;
       }
       this.password = await Bcrypt.hash(this.password, 12);
     })
    Este es para minisculas .toLowercase()
    Este es para que no haya espacio .trim()
    Ejemplo campo booleano
     @Column('boolean', {
      name:'state',
    })
    state: boolean; */
  }
