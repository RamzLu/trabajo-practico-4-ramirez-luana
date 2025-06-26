import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Character = sequelize.define("personaje", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ki: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  race: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
