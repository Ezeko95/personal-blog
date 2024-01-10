import { Sequelize } from "sequelize-typescript";

const db = new Sequelize({
  dialect: "postgres",
  database: `${process.env.DB_NAME}`,
  password: `${process.env.DB_PASSWORD}`,
  username: "postgres",
  storage: ":memory:",
  models: [__dirname + "/models"],
});

export default db;
