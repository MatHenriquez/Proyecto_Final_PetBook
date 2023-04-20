const { Pet, User } = require("../db.js");

const adoptionFormController = async (request) =>{
    const userId = request.userId;
    const petId = request.petId;
    const message = request.message;
    const date = request.date;

   const user = User.finByPK(userId);

   const pet = Pet.findByPk(petId);

   const response = {
    user,
    pet,
    message,
    date
   }

   console.log(response);
   
   return response;
}

module.exports = adoptionFormController;