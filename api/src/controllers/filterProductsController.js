const { Product } = require("../database/db.js");

async function filterProductsController({
    name,
    available,
    price,
    specie,
    category,
    sortCriterion
}){


    let where = {};
    let response;

    if(name || specie || available || category){
        if(price && sortCriterion){
            let toDelete = [];
            where = {
                name: name ? name : toDelete.push("name"),
                specie: specie ? specie : toDelete.push("specie"),
                available: available ? available : toDelete.push("available"),
                category: category ? category :toDelete.push("category"),
            };

            for (let i = 0; i < toDelete.length; i++) {
                delete where[toDelete[i]];
              }


              response = await Product.findAll({
                where,
                order: [[price, sortCriterion]]
              })

              
              return response;
        }

        if (!price || !sortCriterion) {
            let toDelete = [];
            where = {
                name: name ? name : toDelete.push("name"),
                specie: specie ? specie : toDelete.push("specie"),
                available: available ? available : toDelete.push("available"),
                category: category ? category :toDelete.push("category"),
            };
            
            for (let i = 0; i < toDelete.length; i++) {
              delete where[toDelete[i]];
            }
           
            response = await Product.findAll({
              where
            });

            return response;
          }
        
    }

    return;
}

module.exports = filterProductsController;