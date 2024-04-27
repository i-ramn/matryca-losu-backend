import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'articles' })
export class Articles extends Model<Articles> {
  @Column({ type: DataType.STRING })
  title: string;
  @Column({ type: DataType.STRING })
  subtitle: string;
  @Column({ type: DataType.STRING })
  number: string;
  @Column({ type: DataType.TEXT })
  data: string;
}
