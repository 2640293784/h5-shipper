import {
  Table,
  Column,
  Model,
  HasMany,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({
  tableName: 'details_tbl',
})
export default class DetailModel extends Model<DetailModel> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  title: string;

  @Column
  img_url: string;
  
  @Column
  size: number;

  @Column
  unit: string;

  @Column
  attr_name: string;

  @Column
  attr_model: string;

  @Column
  attr_l: number;

  @Column
  attr_w: number;

  @Column
  attr_h: number;


  @Column
  attr_unit: string;

  @Column
  attr_location: string;

  @Column
  attr_send_time: string;

  @Column
  rid: number;


}
