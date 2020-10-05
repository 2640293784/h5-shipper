import {
  Table,
  Column,
  Model,
  HasMany,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({
  tableName: 'related_tbl',
})
export default class RelatedModel extends Model<RelatedModel> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  img_url: string;



}
