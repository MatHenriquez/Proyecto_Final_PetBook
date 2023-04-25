const { Router } = require("express");
const { getHandlerProducts, postProductHandler, putProductHandler, deleteProductHander, postwriteProductos } = require("../handlers/ProductsHandler")
const { check } = require('express-validator');
const { validateAttributes } = require('../middlewares/validateAttributes');
const { validateJWT } = require('../middlewares/validateJWT');
const { isAdminRole, isRole } = require('../middlewares/validateRoles');
const { productExists, categoryExists } = require("../helpers/dbValidators");

const productsRoutes = Router();

productsRoutes.post('/writeProducts', postwriteProductos);


// get all products - public
productsRoutes.get("/", getHandlerProducts);

// get one product - public
productsRoutes.get("/:id", [
    check('id', 'Not a valid id').isUUID(),
    check('id').custom(productExists),
    validateAttributes
] ,getHandlerProducts);

// create products - admin
productsRoutes.post('/', [
    validateJWT,
    check('name','Name of product is required').not().isEmpty(),
    check('category', 'Not a valid ID').isUUID(),
    check('category').custom(categoryExists),
    validateAttributes
] ,postProductHandler);

// update products - admin
productsRoutes.put('/:id', [
    validateJWT,
    check('category', 'Not a valid ID').isUUID(),
    check('id').custom(productExists),
    validateAttributes
],putProductHandler);

// delete products - admin
productsRoutes.delete('/:id', [
    validateJWT,
    isAdminRole,
    check('id', 'Not a valid ID').isUUID(),
    check('id').custom(productExists),
    validateAttributes
],deleteProductHander);



module.exports = productsRoutes;
