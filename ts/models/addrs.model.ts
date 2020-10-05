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
  uid: number;

  @Column
  province_id: number;

  @Column
  city_id: number;

  @Column
  county_id: number;

  @Column
  province: string;

  @Column
  city: string;

  @Column
  county: string;

  @Column
  detail_locatoin: string;

  @Column
  postal_code: string;

  @Column
  name: string;

  @Column
  tel: string;

  @Column
  checked: boolean;
}
