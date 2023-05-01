const {Favorite,User} =require("../database/db.js")

const findFavsUser = async (userId) =>{
 const allFavsUser = await Favorite.findAll({
  include:[{model:User,where:{id:userId}}]
 })
 return allFavsUser
}

module.exports = findFavsUser 