import { Sequelize } from "sequelize-typescript";
import * as path from "path";

const sequelize = new Sequelize({
  database: "personal-blog",
  dialect: "postgres",
  username: "postgres",
  password: "admin",
  storage: ":memory:",
});

sequelize.addModels([path.join(__dirname, "./Models")]);

export default sequelize;
