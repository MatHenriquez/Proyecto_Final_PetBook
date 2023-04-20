const { Product, Pet } = require('../db');

const postProductController = async (ProductData) => {
    try {
        let { name, image, quantity, available, price, weight,
            sizes, sku, category, rating } = ProductData;
      
          let productCreated = await Product.create({
            name, image, quantity, available, price, weight, sizes, sku, rating, category });
      
          let productDb = await Pet.findAll({ where: { name: category} });
      
          //productCreated.addPet(productDb);
        return productCreated;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = postProductController;