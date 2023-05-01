const { response } = require('express');
const { isUUID } = require('validator');
const { Op } = require('sequelize');

const { User, Category, Product } = require('../database/db');

const allowedCollections = [
    'users',
    'categories',
    'products',
    'roles'
];

const searchUsers = async ( term = '', res = response ) => {
    
    const isValidUUID = isUUID(term.toString()); // true
    
    if(isValidUUID){
        const user = await User.findByPk(term);
        return res.json({
            results: (user) ? [user] : []
        });
    }

    //const regex = new RegExp(term, 'i');

    const users = await User.findAll({
        where: {
          [Op.or]: [
            { nickname: { [Op.iLike]: `%${term}` } },
            { email: { [Op.iLike]: `%${term}` } }
          ],
          status: true
        }
      });

    res.json({
        results: users
    });

}

const searchCategories = async ( term = '', res = response ) => {
    
    const isValidUUID = isUUID(term.toString()); // true
    
    if(isValidUUID){
        const category = await Category.findByPk(term);
        return res.json({
            results: (category) ? [category] : []
        });
    }

    //const regex = new RegExp(term, 'i');

    const categories = await Category.findAll({
        where: {
          name: { [Op.iLike]: `%${term}%` },
          status: true,
        },
      });

    res.json({
        results: categories
    });

}

const searchProducts = async ( term = '', res = response ) => {
    
    const isValidUUID = isUUID(term.toString()); // true
    
    if (isValidUUID) {
        const product = await Product.findByPk(term);
    
        return res.json({
          results: product ? [product] : [],
        });
      }

    //const regex = new RegExp(term, 'i');

    const products = await Product.findAll({
        where: {
          [Op.or]: [
            { name: { [Op.iLike]: `%${term}%` } },
            { description: { [Op.iLike]: `%${term}%` } },
          ],
          available: true,
          status: true,
        },
      });

    res.json({
        results: products
    });

}

const searchHandler = async (req, res) => {
    try {
        const { collection, term } = req.params;

        if ( !allowedCollections.includes(collection) ) {
            return res.status(400).json({
                msg: `Allowed collections are: ${allowedCollections}`
            })
        }

        switch(collection){
            case 'users':
                searchUsers(term, res);
                break;
            case 'categories':
                searchCategories(term, res);
                break;
            case 'products':
                searchProducts(term, res);
                break;
            default:
                res.status(500).json({
                    msg: 'Search forgotten'
                })
        }
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = {
    searchHandler
}