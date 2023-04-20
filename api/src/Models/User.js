const { DataTypes, BOOLEAN } = require("sequelize");


const User = (sequelize) => {
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: 'Nickname is required'
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: 'Email is required'
          }
        }
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      BankData: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      purchases: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull:true,
      },
      donationsMade: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull:true,
      },
      role: {
        type: DataTypes.ENUM('admin_role','user_role'),
        allowNull: false,
        defaultValue: 'user_role',
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'The password is required'
          }
        }
      },
      image: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      google: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      }
    },
    { timestamps: false,
    }
  );
};


module.exports = User;


