const { Product, Category, User } = require('../database/db');
const searchProductByNameController = require("../controllers/searchProductByNameController");
const searchAllProductsController = require("../controllers/searchAllProductsController");
const {postProductController, writeProductosDB} = require('../controllers/postProductController');



const postwriteProductos = async(req, res) => {
  try {
    const data = await writeProductosDB();
    if(data.error) throw new Error(data.error);

    res.status(200).send(data)
  } catch (error) {
    res.status(404).send(error);
  }
}





const getHandlerProducts = async (req, res) => {
  try {
    const { name, limit = 20, from = 0 } = req.query;
    const { id } = req.params;
    
    let whereClause = {status: true};

    if(id){
      whereClause = {...whereClause, id};
    }

    if(name){
      whereClause = {
        ...whereClause,
        name: {[Op.iLike]: `%${name}%`} // matches any product
      }
    }

    const [totalRecords, products] = await Promise.all([
      Product.count(({where: whereClause})),
      Product.findAll({
        where: whereClause,
        limit: Number.parseInt(limit, 10),
        offset: Number.parseInt(from, 10),
        include: [
          {model: User, attributes: ['nickname'], as: 'user'},
          {
            model: Category,
            attributes: ['name'],
            as: 'productCategory',
          }
        ]
      })
    ])

    res.status(200).json({totalRecords, products});

  } catch (error) {
    res.status(404).json({error: error.message});
  }
};


const putProductHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const { status, user, ...data } = req.body;
    
    if(data.name){
      data.name = data.name.toUpperCase();
    }
    
    data.user = req.user.id;
    
    const updatedProduct = await Product.update({data}, {
        where: {id: id},
        returning: true,
        plain: true
    });

    res.status(200).json({updatedCategory})    ;
} catch (error) {
    res.status(500).json({error: error.message});
}
};

const postProductHandler = async (req, res) => {
  try {
    const {status, user, ...body} = req.body;
    const productDb = await Product.findOne({where: {name: body.name}});

    if(productDb){
      return res.status(400).json({
        msg: `Product ${productDb.name} already categoryExists.`
      })
    }

  // console.log(req)
    const data = {
      ...body,
      name: body.name.toUpperCase(),
      userId: req.user.id,
    }
    const product = await Product.create(data);
    res.status(201).json(product);

  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

const deleteProductHander = async (req, res) => {
  try {
    const { id } = req.params;

    const disableProduct = await Product.update({status: false}, {where: {id: id},
        returning: true,
        plain: true
    });
    const authUser = req.user;

    res.status(200).json({disableProduct, authUser})
} catch (error) {
    res.status(404).json({error: error.message});
}


}

module.exports = { 
  getHandlerProducts,
  postProductHandler,
  putProductHandler,
  deleteProductHander,
  postwriteProductos
};
