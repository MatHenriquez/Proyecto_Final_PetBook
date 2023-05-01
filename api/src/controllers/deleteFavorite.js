const { Favorite, User } = require("../database/db.js");

const deleteFavorite = async (idPet, idUser) => {
  const result = await Favorite.destroy({
    where: { id: idPet },
    include: [{ model: User, where: { id: idUser } }],
  });

  return result;
};

module.exports = deleteFavorite;
