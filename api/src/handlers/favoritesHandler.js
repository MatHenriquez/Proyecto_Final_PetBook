const addFavoritesPets = require("../controllers/addFavoritesPets");
const findFavsUser = require("../controllers/findFavsUser");
const deleteFavorite = require("../controllers/deleteFavorite");

const postFavoritesHandler = async (req, res) => {
  const {id, image,name,specie,gender,size,weight,age,idUser,petId} = req.body;
  console.log(petId);
  
  try {
    const result = await addFavoritesPets(id, image,name,specie,gender,size,weight,age,idUser,petId);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getFavoritesHandler = async (req,res) => {
 const {userId} = req.query;
 
 try {
    const getFavsUser = await findFavsUser(userId)
    res.status(200).json(getFavsUser)
 } catch (error) {
    res.status(400).json({ error: error.message });
 }
};

const deleteFavoritesHandler = async (req,res) => {
    const { idPet,idUser } = req.query;
    try {
      const result = await deleteFavorite(idPet,idUser);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

module.exports = {
  postFavoritesHandler,
  getFavoritesHandler,
  deleteFavoritesHandler,
};
