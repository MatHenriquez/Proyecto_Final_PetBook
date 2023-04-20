const { DataTypes } = require("sequelize");


const Category = (sequelize) => {
  sequelize.define(
    "category",
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
            msg: 'Category is required'
          }
        }
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
      }
    },
    {   tableName: 'categories',
        timestamps: false }
  );
};

module.exports = Category;
