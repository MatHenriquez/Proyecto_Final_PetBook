const { Role, User, Category, Product, Adopt } = require('../database/db');

const isRoleValid = async  (role = '') => {
        const roleExists = await Role.findOne({where: {role: role}});
        if(!roleExists){
            throw new Error(`The role ${role} does not exist in Db`)
        }
};

// verify if email exists
const isEmailValid = async (email = '') => {
     const emailExists = await User.findOne({where: {email: email}});
    if(emailExists){
        throw new Error(`Email ${email} already exists, type a different email.`)
    }
} 

const userByIdExists = async (id = '') => {
    const userExists = await User.findByPk(id);
   if ( !userExists ) {
       throw new Error(`The ID: ${id} does not exist.`)
   }
}

const categoryExists = async (id= '') => {
    const categoryExist = await Category.findByPk(id);
    if(!categoryExist){
        throw new Error(`The ID: ${id} does not exist.`)
    }
}

const productExists = async (id= '') => {
    const productExist = await Product.findByPk(id);
    if(!productExist){
        throw new Error(`The ID: ${id} does not exist.`)
    }
}

const adoptionByIdExists = async (id = '') => {
    const adoptExists = await Adopt.findByPk(id);
   if ( !adoptExists ) {
       throw new Error(`The ID: ${id} does not exist.`)
   }
}

module.exports = {
    isRoleValid,
    isEmailValid,
    userByIdExists,
    categoryExists,
    productExists,
    adoptionByIdExists
};    