import {
  Table,
  Column,
  Model,
  HasMany,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({
  tableName: 'users_tbl',
})
export default class UserModel extends Model<UserModel> {
  // @PrimaryKey
  // @Column
  // id: number;

  @Column
  name: string;

  @Column
  phone: string;

  @Column
  password: string;

  @Column
  email: string;

  @Column
  addr_id: number;

  // get(k:string):string{

  //   return this.getDataValue('name')
  // }
  // @Column
  // get name(): string {
  //   return this.getDataValue('name');
  // }

  // set name(value: string) {
  //   this.setDataValue('name', value);
  // }
}
