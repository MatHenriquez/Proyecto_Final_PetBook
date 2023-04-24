import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPets } from '../../Redux/actions';
import styles from '../CARD/Card.module.css';

const Card = (pet) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const pets = useSelector((state) => state.pets);
  // console.log(pets);
  // console.log(pets);

// la data viene en un atributo rows viene asi por la paginacion hecha con sequelize tip siempre hacer console.log de lo que te traiga la action 
  // useEffect(() => {
  //   dispatch(getPets()).then(() => {
  //     setLoading(false);
  //   });
  // }, [dispatch]);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
           <div className="card card-side bg-base-100 shadow-xl p-2 m-3">
            <figure> <img className='w-[7rem] rounded-3xl' src={pet?.image} alt={pet?.name} /> </figure>
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
          </div>
              
    </>
  );
};

export default Card;