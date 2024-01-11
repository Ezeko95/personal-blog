import { Sequelize } from "sequelize-typescript";
import Model from "./Models/Admin";
import Post from "./Models/Post";

const sequelize = new Sequelize({
  database: "personal-blog",
  dialect: "postgres",
  username: "postgres",
  password: "admin",
  storage: ":memory:",
  logging: false,
  models: [Model, Post],
});

sequelize.addModels(["./Models/Admin.ts", "./Models/Post.ts"]);

export default sequelize;
