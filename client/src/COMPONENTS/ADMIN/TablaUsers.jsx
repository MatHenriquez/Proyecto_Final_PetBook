import React from "react";

const TablaUsers = ({ user, email, index,id }) => {

//voy a necitar usar el id para poder eliminar el usuario
  return (
    <>
    
      <td className="py-2">{user}</td>
      <td className="text-gray-500">{email}</td>
      <button key={index}>X</button>
    </>
  );
};

export default TablaUsers;
