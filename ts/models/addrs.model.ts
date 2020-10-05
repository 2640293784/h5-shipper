import {
  Table,
  Column,
  Model,
  HasMany,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({
  tableName: 'addrs_tbl',
})
export default class AddrModel extends Model<AddrModel> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  location: string;

  @Column
  phone: string;

  @Column
  checked: boolean;

}
