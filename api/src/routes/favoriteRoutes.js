const {Router} = require("express")
const {postFavoritesHandler,getFavoritesHandler,deleteFavoritesHandler} = require("../handlers/favoritesHandler")

const favoriteRoutes = Router()

favoriteRoutes.post("/",postFavoritesHandler)
favoriteRoutes.get("/?",getFavoritesHandler)
favoriteRoutes.delete("/?",deleteFavoritesHandler)


module.exports = favoriteRoutes