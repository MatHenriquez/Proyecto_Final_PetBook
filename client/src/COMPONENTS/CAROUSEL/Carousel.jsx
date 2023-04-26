import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [petData, setPetData] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);

  useEffect(() => {
    axios
      .get("/userPets/showHistory")
      .then((response) => {
        setPetData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleImageClick = (pet) => {
    setSelectedPet(pet);
  };

  const handleNextClick = () => {
    const nextIndex =
      currentImageIndex === petData.length - 3 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrevClick = () => {
    const prevIndex =
      currentImageIndex === 0 ? petData.length - 3 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
  };

  const currentMascotas = petData.slice(
    currentImageIndex,
    currentImageIndex + 3
  );

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 9000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div>
      {petData.length > 0 ? (
        <div className="mx-auto">
          <div className="carousel carousel-end rounded-box w-4/5 h-4/5 mx-auto my-auto p-3 justify-evenly">
            {currentMascotas.map((pet, index) => (
              <div
                key={index}
                className={`carousel-item${
                  index === 0 ? " active" : ""
                } relative float-left md:w-1/3`}
              >
                <div
                  className="w-full h-full flex justify-center items-center cursor-pointer"
                  onClick={() => handleImageClick(pet)}
                >
                  <img
                    className={`w-full h-full object-cover rounded-3xl ${
                      selectedPet === pet ? "scale-200 transition-transform duration-500" : "transition-transform duration-500 transform translate-x-0"
                    }`}
                    src={pet.image}
                    alt={`Image ${currentImageIndex + 1}`}
                  />
                </div>
                {selectedPet === pet && (
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col p-4 bg-white bg-opacity-70">
                    <img
                      className="w-1/2 h-auto mb-4"
                      src={pet.image}
                      alt={`Image ${currentImageIndex + 1}`}
                    />
    <div className="text-center">
      <div className="font-serif font-semibold text-1xl text-black mb-2">{pet.history}</div>
      <div className="italic text-2xl text-neutral font-[candara] font-bold">
        {pet.user.nickname}
      </div>
    </div>
  </div>
)}

              </div>
            ))}
          </div>
         <div className="absoulte flex transform  p-8 items-center ml-80">
                   <a onClick={handlePrevClick} className="btn btn-circle btn-accent ml-80"> ❮</a> 
                   <a onClick={handleNextClick} className="btn btn-circle btn-accent">❯</a>
               </div>
     
   </div>
 ) : (
   <p className="text ml-3">We are uploading the adoption stories... </p>
 )}
</div>
)}

export default Carousel;
