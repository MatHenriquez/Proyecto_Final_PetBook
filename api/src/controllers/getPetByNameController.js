const { Pet } = require("../database/db.js");
const { Op } = require("sequelize");

const getPetByNameController = async (name) => {
  let uper = name.charAt(0).toUpperCase() + name.slice(1);;
  let lower = name.charAt(0).toLowerCase() + name.slice(1);;
  
  const response = await Pet.findAll({
    where: {
      [Op.or]: [
        {
          name: {
            [Op.startsWith]: uper,
          },
        },
        {
          name: {
            [Op.startsWith]: lower,
          },
        },
      ],
      adopted: false
    },
  });

  let namesResults = response.map((pet) => pet.name);
  if (response.length === 0) {
    return;
    // throw new Error(`No results to the search ${name}`);
  }
  return namesResults;
};

module.exports = getPetByNameController;
