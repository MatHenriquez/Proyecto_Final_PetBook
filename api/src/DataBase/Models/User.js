const { DataTypes, BOOLEAN } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      nickName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
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
      isAdmin: {
        type: BOOLEAN,
        defaultValue: false,
        
      },
    },
    { timestamps: false }
  );
};

// Usuarios.
// atributos = email , telefono, pais?, cbu en pirncipio va a estar vacio y si algun usuario realiza una compra u donacion se llena ese atributo con el input que mande el usuario
// donaciones hechas?
// atributo es admin? true o false