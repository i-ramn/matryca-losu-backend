import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'children-articles' })
export class ChildrenArticles extends Model<ChildrenArticles> {
  @Column({ type: DataType.STRING })
  title: string;
  @Column({ type: DataType.STRING })
  subtitle: string;
  @Column({ type: DataType.STRING })
  number: string;
  @Column({ type: DataType.TEXT })
  data: string;
}
