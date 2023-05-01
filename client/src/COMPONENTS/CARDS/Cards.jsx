import React from "react";
import Card from "../CARD/Card";



const Cards = ({ pets }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1  sm:px-32" >
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
              weight={pet.weight}
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
