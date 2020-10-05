import {
  Table,
  Column,
  Model,
  HasMany,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({
  tableName: 'dicts_tbl',
})
export default class DictModel extends Model<DictModel> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  type_code: string;

  @Column
  value: number;

  @Column
  label: string;

  @Column
  description: string;
}
