const server = require("./src/app.js");
const { sequelize } = require("./src/DataBase/db.js");
require("dotenv").config();
const { PORT } = process.env;

sequelize.sync({ force: false }).then(() => {
  console.log("estoy conectado a", sequelize.getDatabaseName());
  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
});
