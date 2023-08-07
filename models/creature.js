const { DataTypes, Model } = require("sequelize");
const bcrypt = require("bcrypt");

let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Creature extends Model {}

Creature.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    creatureName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    armorClass: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
      unique: true,
    },
    healthPoints: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
    },
    damageOutput: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
      },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "creatures",
    timestamps: true,
    freezeTableName: true,

    //commenting out scope because we aren't taking in a password for this schema right now. No reason for the moment to do so
    // defaultScope: {
    //   attributes: { exclude: ["password"] },
    // },
    // scopes: {
    //   withPassword: {
    //     attributes: {},
    //   },
    // },
  }
);

module.exports = Creature;