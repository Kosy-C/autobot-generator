"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentInstance = void 0;
const config_1 = require("../config");
const sequelize_1 = require("sequelize");
class CommentInstance extends sequelize_1.Model {
}
exports.CommentInstance = CommentInstance;
CommentInstance.init({
    id: {
        type: sequelize_1.DataTypes.UUID, // Use UUID
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4, // Automatically generate UUIDs
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    body: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    postId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
}, {
    sequelize: config_1.db,
    tableName: "comments",
});
