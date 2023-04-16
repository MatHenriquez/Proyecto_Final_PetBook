const server = require("./src/app.js");
const { sequelize } = require("./src/DataBase/db.js");
const { Role } = require('./src/DataBase/db.js');
require("dotenv").config();
const { PORT } = process.env;


sequelize.sync({ force:false }).then( async () => {

  console.log("estoy conectado a", sequelize.getDatabaseName());
  await Role.findOrCreate({ where: { role: "admin_role" }, defaults: { role: "admin_role" } });
  await Role.findOrCreate({ where: { role: "user_role" }, defaults: { role: "user_role" } });
  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  })
})
