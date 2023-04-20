const { Pet } = require("../db.js");
const { Op } = require("sequelize");

const getPetByNameController = async (name) => {
  const response = await Pet.findAll({
    where: {
      name: {
        [Op.startsWith]: name,
      },
    },
  });

  if (response.length === 0) {
    throw new Error("No pets found.");
  }
  return response;
};

module.exports = getPetByNameController;