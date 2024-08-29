"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
exports.db = new sequelize_1.Sequelize("autobots_db", "root", "password1234", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});
// //Sequelize connection
exports.db.sync()
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
