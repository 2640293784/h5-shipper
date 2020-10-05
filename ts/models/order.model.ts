import {
  Table,
  Column,
  Model,
  HasMany,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({
  tableName: 'orders_tbl',
})
export default class OrderModel extends Model<OrderModel> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  detail_id: number;

  @Column
  nums: number;

  @Column
  uid: number;

  @Column
  receive_status: number;
}
