import {
  Table,
  Column,
  Model,
  HasMany,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({
  tableName: 'products_tbl',
})
export default class ProductModel extends Model<ProductModel> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  type_id: number;

  @Column
  name: string;

  @Column
  detail_id: number;



}
