import {
  Column,
  Table,
  Model,
  CreatedAt,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Admin } from "./Admin";

@Table
export class Post extends Model<Post> {
  @Column({ allowNull: false })
  title!: string;

  @Column({ allowNull: false })
  content!: string;

  @CreatedAt
  @Column({ allowNull: false })
  createdAt!: Date;

  @ForeignKey(() => Admin)
  @Column
  email!: string;

  @BelongsTo(() => Admin)
  admin!: Admin;
}
