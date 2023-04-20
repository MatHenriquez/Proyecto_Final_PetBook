const { DataTypes } = require("sequelize");


const Role = (sequelize) => {
  sequelize.define(
    "role",
    {
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: 'Role is required'
          }
        }
      },
    },
    {   tableName: 'roles',
        timestamps: false }
  );
};

module.exports = Role;


