import {
  Table,
  Column,
  Model,
  HasMany,
  DataType,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import DetailModel from './detail.model';
import TypeModel from './type.model';

@Table({
  tableName: 'products_tbl',
})
export default class ProductModel extends Model<ProductModel> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @ForeignKey(() => TypeModel)
  @Column
  type_id: number;

  @ForeignKey(() => DetailModel)
  @Column
  detail_id: number;

  @BelongsTo(() => TypeModel)
  types: TypeModel;

  @BelongsTo(() => DetailModel)
  detail: DetailModel;
}
