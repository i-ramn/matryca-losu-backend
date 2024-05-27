import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'compatibility-articles' })
export class CompatibilityArticles extends Model<CompatibilityArticles> {
  @Column({ type: DataType.STRING })
  title: string;
  @Column({ type: DataType.STRING })
  subtitle: string;
  @Column({ type: DataType.STRING })
  number: string;
  @Column({ type: DataType.TEXT })
  data: string;
}
