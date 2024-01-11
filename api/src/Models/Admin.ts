import { Model, Table, Column } from "sequelize-typescript";

@Table({ tableName: "Admins", timestamps: true })
export class Admin extends Model<Admin> {
  @Column({ allowNull: false, unique: true })
  username!: string;

  @Column({ allowNull: false, unique: true })
  password!: string;
}

export default Admin;
