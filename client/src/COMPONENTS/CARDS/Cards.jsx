import React from "react";
import Card from "../CARD/Card";
import { Link } from 'react-router-dom';


const Cards = ({ pets }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-1 px-32 " >
     {/* <h1 className={styles.title}>Find & Adopt</h1> */}
      {pets &&
        pets.map((pet, index) => {
          return (
            <Card 
              key={index}
              id={pet.id}
              specie={pet.specie}
              gender={pet.gender}
              size={pet.size}
              weighth={pet.weighth}
              age={pet.age}
              adopted={pet.adopted}
              name={pet.name}
              image={pet.image}
            />
          );
        })}
    </div>
  );
};

export default Cards;
