const {Favorite,User} = require("../database/db.js")

const addFavoritesPets = async (image,name,specie,gender,size,weight,age,idUser) =>{

const newFav = await Favorite.create({image,name,specie,gender,size,weight,age})

let findUser = await User.findByPk(idUser)

console.log(newFav.__proto__);
 
 await newFav.addUsers(findUser)
 
 const userFavs = await Favorite.findByPk(newFav.id,{include:[{model:User}]})
 
 return userFavs

}

module.exports = addFavoritesPets



