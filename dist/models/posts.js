"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostInstance = void 0;
const config_1 = require("../config");
const sequelize_1 = require("sequelize");
const comments_1 = require("./comments");
class PostInstance extends sequelize_1.Model {
}
exports.PostInstance = PostInstance;
PostInstance.init({
    id: {
        type: sequelize_1.DataTypes.UUID, // UUID type
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4, // Automatically generate UUIDs
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    body: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    autobotId: {
        type: sequelize_1.DataTypes.UUID,
        //   allowNull: false,
    },
}, {
    sequelize: config_1.db,
    tableName: "posts",
});
PostInstance.hasMany(comments_1.CommentInstance, { foreignKey: "postId", as: "comment" });
comments_1.CommentInstance.belongsTo(PostInstance, { foreignKey: "postId", as: "post" });
