const { Category, User } = require('../db');
const { Op } = require('sequelize');

const categoryHandlerGet = async (req, res) => {
    try {
        const { limit = 20, from = 0, name } = req.query;
        const { id } = req.params;

        let whereClause = {status: true};

        if(id){
            whereClause = {...whereClause, id};
        }

        if(name){
            whereClause = {
                ...whereClause,
                name: { [Op.iLike]: `%${name}%`} // mathes any name 
            };
        }

        const [totalRecords, categories] = await Promise.all([
            Category.count({where: whereClause}),
            Category.findAll({
                where: whereClause,
                limit: Number.parseInt(limit, 10),
                offset: Number.parseInt(from, 10),
                include: {model: User, attributes: ['nickname']}
            })
        ])
        res.status(200).json({totalRecords, categories});
    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

const categoryHandlerPut = async (req, res)=>{
    try {
        const id = req.params.id;
        let { name } = req.body;
        
        name = name.toUpperCase();
        
        
        const updatedCategory = await Category.update({name}, {
            where: {id: id},
            returning: true,
            plain: true
        });

        res.status(200).json({updatedCategory})    ;
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const categoryHandlerPost = async (req, res) => {
    try {
        const name = req.body.name.toUpperCase();

        const categoryDb = await Category.findOne({where: {name: name}});
    
        if(categoryDb){
            return res.status(400).json({
                msg: `Category ${categoryDb.name} already exists.`
            })
        }
        
        const data = {
            name,
            userId: req.user.id
        }
    
        const category = await Category.create(data);
    
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const categoryHandlerDelete = async (req, res)=>{
    try {
        const { id } = req.params;

        const disableCategory = await Category.update({status: false}, {where: {id: id},
            returning: true,
            plain: true
        });
        const authUser = req.user;

        res.status(200).json({disableCategory, authUser})
    } catch (error) {
        res.status(404).json({error: error.message});
    }
    
    
};

module.exports = {
    categoryHandlerPost,
    categoryHandlerGet,
    categoryHandlerPut,
    categoryHandlerDelete
};