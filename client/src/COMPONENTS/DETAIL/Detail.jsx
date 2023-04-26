import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPetDetailSuccess } from '../../Redux/actions';
import { Link } from 'react-router-dom';
import styles from '../DETAIL/Detail.module.css';

import AdoptionForm from '../FORMS/FormAdoption';

import Header from '../HEADER/Header';
import HeaderLogin from "../HEADER/HeaderLogin";
import Footer from "../FOOTER/Footer";



function Detail() {
  const [loading, setLoading] = useState(true);
  const [selectedPet, setSelectedPet] = useState(null); // create state variable
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const pet = useSelector(state => state.pet);
  const userEmail = localStorage.getItem('email');


  useEffect(() => {
    dispatch(fetchPetDetailSuccess(id))
      .then(() => setLoading(false));
  }, [id]);

  const handleSelectMascota = (e) => {
    //e.preventDefault();
    setSelectedMascota(pet); // update state variable with pet's data
  };

  if(pet){
    console.log(pet);
  }
  

  return (
    
    
    <div  className="bg-[url('/backdonations1.png')] bg-no-repeat w-[100hv] h-[100hv]">
        


        <div className='flex items-center justify-center'>

        {loading ? (
        <p>Loading...</p>
      ) : (

            <div className="card lg:card-side bg-base-100 shadow-xl w-1/2">

                      <figure><img className="card-body" src={pet.image} alt={pet.name} /></figure>
                      <div className="card-body">
                        <h2 className="card-title titleCenter">{pet.name}</h2>
                        <ul className="text bg-primary w-fit rounded-full max-w-lg mx-auto">
                          <div className="text-center">
                            <li>Specie: {pet.specie}</li>
                            <li>Gender: {pet.gender}</li>
                            <li>Size: {pet.size}</li>
                            <li>Weight: {pet.weight} kg</li>
                            <li>Age: {pet.age} years</li>
                            <li>Adopted: {pet.adopted ? 'Is already adopted' : 'He is still waitng for a home'}</li>
                          </div>
                        </ul>
                        <Link to='/donate'>
                          <img className = {styles.imgFoot}  src="../../../public/patita3.png" alt="patita de perro" />
                        </Link>
                        <br />
                        <br />

                        <div className=''>
                        <Link to = {`/FormAdoption/${id}`}>
                        <div className="card-actions justify-center m-1">
                        <button onClick={handleSelectPet} className="btn btn-xs btn-accent">ADOPT ME!</button>
                        {selectedPet && <AdoptionForm pet={pet} userEmail={userEmail} />} {/* pass selected pet's data as prop */} 
                        </div>
                        </Link>
                        
                        <div className="card-actions  justify-center m-1">
                          <button className="btn btn-xs btn-accent">Sponsor {pet.name}</button>
                        </div>
                        

                        </div>


                        
                      </div>
             </div>

          )}
  
        </div>



    </div>
    
  );
}

export default Detail;