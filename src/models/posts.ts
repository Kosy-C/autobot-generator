import { db } from "../config";
import { DataTypes, Model, Optional } from "sequelize";
import { CommentInstance } from "./comments";

export interface PostAttributes {
  id: string;
  title: string;
  body: string;
  autobotId: string;
}

export interface PostCreationAttributes extends Optional<PostAttributes, 'id'> {}

export class PostInstance extends Model<PostAttributes, PostCreationAttributes> implements PostAttributes {
  public id!: string; // Non-null assertion that id will always be defined
  public title!: string;
  public body!: string;
  public autobotId!: string;
 

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

PostInstance.init(
  {
    id: {
        type: DataTypes.UUID, // UUID type
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4, // Automatically generate UUIDs
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    autobotId: {
        type: DataTypes.UUID,
    //   allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "posts",
  }
);

PostInstance.hasMany(CommentInstance, { foreignKey: "postId", as: "comment" });

CommentInstance.belongsTo(PostInstance, { foreignKey: "postId", as: "post" });
