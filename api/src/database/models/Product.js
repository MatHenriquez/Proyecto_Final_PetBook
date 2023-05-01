const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "product",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: 'Name es required'
          }
        }
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      image: {
        type: DataTypes.TEXT,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      category: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      weight: {
        type: DataTypes.FLOAT,
      },
      size: {
        type: DataTypes.STRING,
      },
      specie: {
        type: DataTypes.ENUM("Cat", "Dog", "Rabbit", "Guinea Pig", "Parrot"),
        allowNull: true,
      },
      consumption_age: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      discount: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      }
    },
    { timestamps: false }
  );
};

