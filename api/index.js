const server = require("./src/app.js");
const { sequelize } = require("./src/database/db.js");
const { Role } = require('./src/database/db.js');
require("dotenv").config();
const { PORT } = process.env;
const loadPets = require('./src/database/scriptPets.js')
const {uploadProductos} = require("./src/controllers/uploadProductsCotroller.js");
const tuApi = "c5c2be10-c919-4ac7-aebd-b359d3487566";


sequelize.sync({alter:true }).then( async () => {

  await loadPets();
  await uploadProductos(tuApi);

  console.log("estoy conectado a", sequelize.getDatabaseName());
  await Role.findOrCreate({ where: { role: "admin_role" }, defaults: { role: "admin_role" } });
  await Role.findOrCreate({ where: { role: "user_role" }, defaults: { role: "user_role" } });
  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
    
  })
})
