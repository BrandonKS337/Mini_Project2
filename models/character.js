const { DataTypes, Model } = require("sequelize");
const bcrypt = require("bcrypt");

let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Character extends Model {}

Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    characterName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    // type: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   required: true,
    // },
    // armorClass: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   required: true,
    //   unique: true,
    // },
    // healthPoints: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   required: true,
    // },
    // damageOutput: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    //     required: true,
    //   },
    //   rangedDamage: {
    //     type: DataTypes.BOOLEAN,
    //     allowNull: true,
    //     required: true
    //   },
    //   meleeDamage: {
    //     type: DataTypes.BOOLEAN,
    //     allowNull: true,
    //     required: true
    //   },
    //   healer: {
    //     type: DataTypes.BOOLEAN,
    //     allowNull: true,
    //     required: true
    //   }
  },
  {
    sequelize: sequelizeInstance,
    modelName: "character",
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

module.exports = Character;