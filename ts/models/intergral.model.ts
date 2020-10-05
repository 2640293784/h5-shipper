import {
  Table,
  Column,
  Model,
  HasMany,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({
  tableName: 'intergrals_tbl',
})
export default class IntergralModel extends Model<IntergralModel> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  uid: number;

  @Column
  balance: number;
}
