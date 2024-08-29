import { Sequelize } from "sequelize";

export const db = new Sequelize("autobots_db", "root", "password1234", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

// //Sequelize connection
db.sync()
  .then(() => {
    console.log("Db connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

// db.sync({ force: true })
//   .then(() => {
//     console.log("Db connected successfully");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
