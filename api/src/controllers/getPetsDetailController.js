const { Pet } = require("../db.js");

const getPetsDetailController = async (id) => {
  let response = await Pet.findByPk(id);
  return response;
};

module.exports = getPetsDetailController;
