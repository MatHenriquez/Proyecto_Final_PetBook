const { Product, Pet } = require('../database/db');


const readProductos = async () => {
  const pathProductos = path.join('D:\\', 'henry', 'PF', 'Proyecto_Final_PetBook', 'api', 'productosJSON.json');

  try {
    // const productosJSON = await readFileAsync(pathProductos, "utf-8");
    // const productos = JSON.parse(productosJSON);
    return "productos";

  } catch (error) {
    return { error: error };
  }
}

const writeProductosDB = async () => {
  try {
    const productos = await readProductos();
    if (productos.error) throw new Error(productos.error);

    // await Product.bulkCreate(productos);
    console.log("creado en db");
    return `Se han creado ${productos} productos`;
  } catch (error) {
    console.log(error);
  }
}




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

module.exports = {postProductController, writeProductosDB};