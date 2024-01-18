import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({ tableName: "Posts", timestamps: true })
export class Post extends Model<Post> {
  @Column({ primaryKey: true, autoIncrement: true })
  id!: number;

  @Column({ allowNull: false })
  title!: string;

  @Column({ allowNull: false, type: DataType.TEXT })
  content!: string;

  @Column({ allowNull: false, type: DataType.TEXT })
  summary!: string;

  @Column({ allowNull: false })
  image!: string;

  @Column({ allowNull: true, defaultValue: "Uncategorized" })
  category!: string;
}

export default Post;
