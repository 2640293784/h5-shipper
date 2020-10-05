import {
  Table,
  Column,
  Model,
  HasMany,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({
  tableName: 'areas_tbl',
})
export default class AreaModel extends Model<AreaModel> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  area_name: string;

  @Column
  area_code: string;

  @Column
  area_short: string;

  @Column
  area_is_hot: number;

  @Column
  area_sequence: number;

  @Column
  area_parent_id: number;

  @Column
  init_date: Date;

  @Column
  init_addr: string;

  // +----------------+--------------+------+-----+---------+----------------+
  // | Field          | Type         | Null | Key | Default | Extra          |
  // +----------------+--------------+------+-----+---------+----------------+
  // | id             | int(11)      | NO   | PRI | NULL    | auto_increment |
  // | area_name      | varchar(16)  | YES  |     | NULL    |                |
  // | area_code      | varchar(128) | YES  |     | NULL    |                |
  // | area_short     | varchar(32)  | YES  |     | NULL    |                |
  // | area_is_hot    | varchar(1)   | YES  |     | NULL    |                |
  // | area_sequence  | int(11)      | YES  |     | NULL    |                |
  // | area_parent_id | int(11)      | YES  | MUL | NULL    |                |
  // | init_date      | datetime     | YES  |     | NULL    |                |
  // | init_addr      | varchar(16)  | YES  |     | NULL    |                |
  // +----------------+--------------+------+-----+---------+----------------+
}
