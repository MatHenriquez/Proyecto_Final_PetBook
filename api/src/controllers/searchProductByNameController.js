const { Product, Sequelize } = require('../db');
const { Op } = require("sequelize");

const searchProductByNameController = async (name) =>{
    try {
        const products = await Product.findAll({
            where: {
                name: {
                    [ Op.iLike]: `%${name}%`
                }
            }
        });
        return products;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = searchProductByNameController