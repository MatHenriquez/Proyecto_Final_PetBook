const { Pet } = require("../db.js");


const postPetsController = async (image,name,size,specie,weight,age,gender) => {
    let response = await Pet.create({ image,name,specie,size,weight,age,gender });
    return response;
};

module.exports = postPetsController;
