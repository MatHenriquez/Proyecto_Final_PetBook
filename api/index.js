const server = require("./src/app.js");
const { sequelize } = require("./src/db.js");
const { Role } = require('./src/db.js');
require("dotenv").config();
const { PORT } = process.env || 3001; //Puerto 3001 en caso de no estar el link a Railway.

//Conectado a Railway.
sequelize.sync({alter:true }).then( async () => {
  console.log("estoy conectado a", sequelize.getDatabaseName());
  await Role.findOrCreate({ where: { role: "admin_role" }, defaults: { role: "admin_role" } });
  await Role.findOrCreate({ where: { role: "user_role" }, defaults: { role: "user_role" } });
  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
    
  })
})
