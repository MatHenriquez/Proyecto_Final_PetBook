import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPets } from '../../Redux/actions';
import { toggleFavorite } from '../../Redux/actions';
import AdoptionForm from '../FORMS/FormAdoption';
import HeartButton from '../FAVORITOS CARD/HeartButton';


const Card = (pet) => {
  
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.pets);
  const isLoggedIn = !!localStorage.getItem('token');
const isFavorite = pet.isFavorite;
  

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(pet.id));
  };

  const [showDetail, setShowDetail] = useState(false);
  let [selectedPet, setSelectedPet] = useState(null);

  const userEmail = localStorage.getItem('email');

  const [selectedMascota, setSelectedMascota] = useState(null); // create state variable

  const handleSelectMascota = (e) => {
    //e.preventDefault();
    setSelectedMascota(pet); // update state variable with pet's data
  };


  const handleShowDetail = () => {
    setSelectedPet(pet); // guardamos los datos de la mascota seleccionada en el estado selectedPet
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    selectedPet = null
  };


  return (


    <div>
           <div className="card card-side bg-base-100 shadow-xl p-2 m-3">
            <figure> <img className='w-[7rem] rounded-3xl' src={pet?.image} alt={pet?.name} />
            </figure>

            <div className="card-body">
              <h2 className="card-title subtitle">{pet?.name?.toUpperCase()}</h2>
              <p className='text'> 
              gender: {pet?.gender}
              <br />
              age: {pet?.age} 
              <br />

              </p>
              <div className="card-actions justify-end">
              <button onClick={handleShowDetail}><label htmlFor="my-modal-3" className="btn btn-xs btn-primary">More about {pet.name}</label></button>
              </div>
            </div>
            {isLoggedIn && (
          <button className={`btn btn-square btn-ghost ${isFavorite ? 'text-green-300' : 'text-opacity-0'}`} onClick={handleToggleFavorite}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0  20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18.777L3.937 13.3C1.81 11.528.503 9.235.503 6.668.503 3.547 3.051 1 6.165 1c1.91 0 3.677.878 4.835 2.278C12.158 1.878 13.926 1 15.836 1 18.95 1 21.498 3.547 21.498 6.668c0 2.567-1.307 4.86-3.435 6.633L10 18.777z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
              


          {showDetail && (
              <div>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                  <div className="modal-box relative max-w-[18rem] sm:max-w-[32rem]">
                    <label htmlFor="my-modal-3" onClick={handleCloseDetail} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    
                    <div className="">

            {/* <figure className="w-2/3"><img className="card-body" src={pet.image} alt={pet.name} /></figure> */}
            <div >
              <h2 className="titleCenter">{pet.name}</h2>
              <ul className="text bg-primary w-fit rounded-full max-w-lg mx-auto">
                <div className="text-center">
                  <h2>{selectedPet?.name}</h2>
                  <li>Specie: {selectedPet?.specie}</li>
                  <li>Gender: {selectedPet?.gender}</li>
                  <li>Size: {selectedPet?.size}</li>
                  <li>Weight: {selectedPet?.weight} kg</li>
                  <li>Age: {selectedPet?.age} years</li>
                  <li>{selectedPet?.adopted ? 'Is already adopted' : 'Is still waitng for a home'}</li>
                </div>
              </ul>

              <div className=''>
                <Link to = {`/FormAdoption/${selectedPet?.id}`}>
                  <div className="card-actions justify-center m-1">
                    <button onClick={handleSelectMascota} className="btn btn-xs btn-accent">adopt</button>
                  {selectedMascota && <AdoptionForm pet={pet} userEmail={userEmail} />} {/* pass selected pet's data as prop */} 
                  </div>
                </Link>
                <HeartButton isFavorite={isFavorite} onClick={handleToggleFavorite} color="green" />
              <div className="card-actions  justify-center m-1">
                <button className="btn btn-xs btn-accent">Sponsor</button>
              </div>
              

              </div>


              
            </div>
                    </div>
                    
                </div>
                </div>
              </div>
            )}
    </div>
  );
};

export default Card;