import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPets } from '../../Redux/actions';
import { toggleFavorite } from '../../Redux/actions';

const Card = (pet) => {
  
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.pets);
  const isLoggedIn = !!localStorage.getItem('token');
const isFavorite = pet.isFavorite;
  

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(pet.id));
  };

  return (
    <>
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
              <Link key={pet?.id} to={`/detail/${pet?.id}`}><button className="btn btn-xs btn-primary">More about {pet.name}</button></Link>
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
              
    </>
  );
};

export default Card;