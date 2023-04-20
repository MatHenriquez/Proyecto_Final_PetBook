const { DataTypes, BOOLEAN } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "pet",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      specie: {
        type: DataTypes.ENUM("Cat", "Dog", "Rabbit", "Guinea Pig", "Parrot"),
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM("Male", "Female"),
        allowNull: false,
      },
      size: {
        type: DataTypes.ENUM("Small", "Medium", "Large"),
        allowNull: false,
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adopted: {
        type: BOOLEAN,
        defaultValue: false,
      },

      godfather: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },

      godparentDonations: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};
