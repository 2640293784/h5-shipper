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
  name: string;

  @Column
  img_url: string;
  
  @Column
  movie_url: string;
  
  @Column
  grade: number;

  @Column
  show_time: Date;

  @Column
  director: string;

  @Column
  kind: string;

  @Column
  performer: string;

  @Column
  discribe: string; // text

 


}
