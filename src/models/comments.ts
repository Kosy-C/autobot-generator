import { db } from "../config";
import { DataTypes, Model } from "sequelize";

export interface CommentAttributes {
  id: string;
  name: string;
  email: string;
  body: string;
  postId: string;
}

export class CommentInstance extends Model<CommentAttributes> {}

CommentInstance.init(
  {
    id: {
        type: DataTypes.UUID, // Use UUID
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4, // Automatically generate UUIDs
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postId: {
        type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "comments",
  }
);
