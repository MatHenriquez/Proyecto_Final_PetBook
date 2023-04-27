import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import AplicationTable from "./AplicationTable";


const AplicationsRequest = () => {
  const [adoptions, setAdoptions] = useState();

  useEffect(() => {
    async function getAdoptions() {
      let request = await axios(`/adoptions`)
      setAdoptions(request?.data?.adoptions)
     
     
    }
    getAdoptions();
  }, []);



  return (
    <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
      <h1>solicitudes de adopciones</h1>
      <table className="w-full text-gray-600">
        {adoptions &&
          adoptions?.map((adopt, index) => {
            return (
              <AplicationTable
                userId={adopt.id}
                name={adopt.name}
                email={adopt.email}
                address={adopt.address}
                postalCode={adopt.postalCode}
                age={adopt.age}
                facebook={adopt.facebook}
                instagram={adopt.instagram}
                petId={adopt.petId}
                key={index}
              />
            );
          })}
      </table>
    </div>
  );
};

export default AplicationsRequest;