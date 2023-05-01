const { Product } = require("../database/db");

const productos = require("../../productosJSON.json");



const uploadProductos = async (tuApi) => {
  try {
    if (!productos.length) throw new Error("No hay productos")

    productos.forEach(item => item.userId = tuApi)

    const count = await Product.count();

    if (count === 0) await Product.bulkCreate(productos);

  } catch (error) {
    console.log(error);
  }
}

const lengthProducts = async () => {
  const count = await Product.count();
  console.log(count);
}



module.exports = { uploadProductos, lengthProducts };

