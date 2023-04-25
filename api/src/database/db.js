require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_DEPLOY } = process.env;


  const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {
      logging: false,
      native: false,
    }
  );

//const sequelize = new Sequelize(
 //DB_DEPLOY,
 //{
  // logging: false,
   //native: false,
    // dialectOptions: {
    //   ssl:{
    //     require: true,
    //   }
    // }
 //}
//);

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);


const { Shelter } = sequelize.models;
const { Pet } = sequelize.models
const { Product } = sequelize.models;
const { User } = sequelize.models
const { Category } = sequelize.models;

const { User_pet } = sequelize.models;

const { Email } = sequelize.models;

const { Adopt } = sequelize.models;

// model relations

// Adopt user pet
Adopt.belongsTo(User);
Adopt.belongsTo(Pet);

// Email / User
Email.belongsTo(User, { foreignKey: 'userId', as: 'userEmail'});
User.hasMany(Email, { foreignKey: 'userId'});

// User / Pet M : N
User.belongsToMany(Pet, { through: User_pet });
Pet.belongsToMany(User, { through: User_pet });

User.hasMany(User_pet, { foreignKey: 'userId' });
User_pet.belongsTo(User, { foreignKey: 'userId' });

User_pet.belongsTo(Pet);
Pet.belongsToMany(User, { through: User_pet });



// User / Category 1:1
Category.belongsTo(User, { foreignKey: 'userId' });   // userId is the id of the user that creates the category

Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'productCategory' });
//Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'productCategoryId'}); // categoryId of the product
Category.hasMany(Product, { foreignKey: 'categoryId'}); // Use "categoryId" instead of "productId"


Product.belongsTo(User, { foreignKey: 'userId' });

// User / Product M:N
User.belongsToMany(Product, { through: 'user_product' });
//Product.belongsToMany(User, { through: 'user_product' });
Product.belongsTo(User, { foreignKey: 'userId'}); // userId is the id of the user that creates the product

// User / Shelter 1: N
Shelter.hasMany(User, { foreignKey: 'userId' });
User.belongsTo(Shelter, { foreignKey: 'userId' });

// Pet / Products : 1:N
Pet.hasMany(Product, { foreignKey: 'petId' });
Product.belongsTo(Pet, { foreignKey: 'petId' });

// Shelter / Pet 1 : N 
Shelter.hasMany(Pet, { foreignKey: 'shelterId' });
Pet.belongsTo(Shelter, { foreignKey: 'shelterId' });

module.exports = {
  ...sequelize.models,
  sequelize,
};
