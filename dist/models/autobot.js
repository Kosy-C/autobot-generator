"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutobotInstance = void 0;
const config_1 = require("../config");
const sequelize_1 = require("sequelize");
const posts_1 = require("./posts");
class AutobotInstance extends sequelize_1.Model {
}
exports.AutobotInstance = AutobotInstance;
AutobotInstance.init({
    id: {
        type: sequelize_1.DataTypes.UUID, // UUID type
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4, // Automatically generate UUIDs
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: { msg: "Email address required" },
            isEmail: { msg: "Please provide a valid email" },
        },
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    // company: {
    //     type: DataTypes.STRING,
    //     allowNull: true
    // },
    website: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: config_1.db,
    tableName: "autobots",
});
AutobotInstance.hasMany(posts_1.PostInstance, { foreignKey: "autobotId", as: "post" });
posts_1.PostInstance.belongsTo(AutobotInstance, {
    foreignKey: "autobotId",
    as: "autobot",
});
