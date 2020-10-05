import {
  Table,
  Column,
  Model,
  HasMany,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({
  tableName: 'buy_carts_tbl',
})
export default class BuyCartModel extends Model<BuyCartModel> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  uid: number;

  @Column
  detail_id: number;

  @Column
  nums: number;


}
