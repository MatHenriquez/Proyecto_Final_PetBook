const { Pet } = require("../db.js");

const getAllPetsController = async (page, size) => {
  let options = {
    limit: +size,
    offset: +page * +size,
  };

  const responsePaginate = await Pet.findAndCountAll(options);

  if (responsePaginate === 0) {
    throw new Error("Error getting the pets from DataBase.");
  } else {
    return responsePaginate;
    //dentro de responsePaginate hay 2 atributos count que es la cantidad total de objetos/pets y row que es el objeto en crudo para consumir seguraente cuando se tenga hacer la vista de la paginacion sea importante usar count para implementar cierta logica 
  }
};
module.exports = getAllPetsController;





