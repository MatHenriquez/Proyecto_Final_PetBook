const { Router } = require("express")
const petsRoutes = require("./petsRoutes.js")
const productsRoutes = require("./productsRoutes.js")
const userRoutes = require('./userRoutes.js');
const authRoutes = require("./authRoutes.js");
const categoriesRoutes = require("./categoriesRoutes.js");
const subscriptionRoute = require('./subscriptionRoute.js')

const userPetsRoutes = require("./userPetsRouter.js");
const mercadopagoRoute = require('./mercadopagoRoute.js');
const contactRoutes = require("./contactRoutes.js");
const adoptRoutes = require("./adoptRoutes.js");
const searchRoutes = require("./searchRoutes.js");
const filteredProductsRoutes = require('./filteredProductsRoutes.js');
const donationsRoutes = require('./donationsRoutes.js');
const favoriteRoutes = require("./favoriteRoutes.js")

const router = Router()

router.use("/pets", petsRoutes)
router.use("/products", productsRoutes)
router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/categories', categoriesRoutes);
router.use('/search/', searchRoutes);

router.use('/userPets', userPetsRoutes);

router.use('/contact', contactRoutes);

router.use('/adoptions', adoptRoutes);

//Ruta de donación por MercadoPago.
router.use('/checkout', mercadopagoRoute);

//Ruta de suscripción por MercadoPago
router.use('/sponsor', subscriptionRoute);

//Ruta de filtro de productos:
router.use("/filteredProducts", filteredProductsRoutes);

//Rutas para el modelo de donaciones.
router.use('/donations', donationsRoutes)

//Ruta para Favoritos.
router.use("/favorite",favoriteRoutes)


module.exports = router;