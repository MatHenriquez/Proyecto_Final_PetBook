const { Pet } = require("../db.js");

const filterPetsController = async ({sorts, ...resto}) => {

  console.log(sorts, resto)

  const filter = resto;

  console.log(resto)

  const sort = sorts;
  console.log(sort);
 
  if(sort === 'ASC'){
    const results = await Pet.findAll({
      where: filter,
      order: [['name', 'ASC']]
    });

    return results;
  } else if(sort === 'DESC'){
    const results = await Pet.findAll({
      where: filter,
      order: [['name', 'DESC']]
    });

    return results;

  } else {
    const results = await Pet.findAll({
      where: filter
    });

    if(results.length === 0){
      throw new Error('Error filtering pets.')
    }
    return results;
  }

}

  module.exports = filterPetsController;