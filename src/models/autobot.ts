import { db } from "../config";
import { DataTypes, Model, Optional } from "sequelize";
import { PostInstance } from "./posts";

export interface AutobotAttributes {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export interface AutobotCreationAttributes extends Optional<AutobotAttributes, 'id'> {}

export class AutobotInstance extends Model<AutobotAttributes, AutobotCreationAttributes> implements AutobotAttributes {
  public id!: string; // Non-null assertion that id will always be defined
  public name!: string;
  public username!: string;
  public email!: string;
  public phone!: string;
  public website!: string;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

AutobotInstance.init(
  {
    id: {
        type: DataTypes.UUID, // UUID type
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4, // Automatically generate UUIDs
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: "Email address required" },
        isEmail: { msg: "Please provide a valid email" },
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // company: {
    //     type: DataTypes.STRING,
    //     allowNull: true
    // },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    tableName: "autobots",
  }
);

AutobotInstance.hasMany(PostInstance, { foreignKey: "autobotId", as: "post" });

PostInstance.belongsTo(AutobotInstance, {
  foreignKey: "autobotId",
  as: "autobot",
});
