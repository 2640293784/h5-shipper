import {
  Table,
  Column,
  Model,
  HasMany,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({
  tableName: 'types_tbl',
})
export default class TypeModel extends Model<TypeModel> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;
}
