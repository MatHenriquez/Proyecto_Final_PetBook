const { User } = require("../database/db");

const verifyRoleControler = async (id) => {
  const response = await User.findByPk(id);

  if (!response) {
    throw new Error(`no se encontro el usuario con id ${id}`);
  }

  return response.role === "admin_role" && response.status === true
    ? true
    : false;
};

module.exports = verifyRoleControler;
