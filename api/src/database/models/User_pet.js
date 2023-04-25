const { DataTypes } = require("sequelize");

const User_pet = (sequelize) => {
    sequelize.define(
        "user_pet",
        {
            history: {
                type: DataTypes.TEXT,
                validate: {
                    len: {
                        args: [0, 150],
                        msg: 'The "history" field must have a maximum of 75 words.'
                    }
                },
                defaultValue: null,
                allowNull: true

            },
            statusHistory: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        {
            timestamps: false
        }
    )
}

module.exports = User_pet;