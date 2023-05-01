import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import Login from './Login';
import Header from '../HEADER/Header';
import HeaderLogin from '../HEADER/HeaderLogin';
import Footer from '../FOOTER/Footer';

const Loginpage = () => {

  return (
    <div> 
  {/* HEADER */}
            <div>
        {localStorage.getItem("token") ? (
          <HeaderLogin className="mb-4" />
        ) : (
          <Header className="mb-4" />
        )}
      </div>

<div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>



{/* IMAGEN */}
			<div className='hidden sm:block place-items-center'>  
      	<img className='w-full h-full' src="/LoginImg.png" alt="" /> 
        {/* arreglar el problemita de la imagen q se ve horrible y cambiar el color del botón q está en otro color! */}
      </div>
    
    <div 
    className='flex flex-col justify-center'>
 <h2 className='subtitle'>LOGIN.</h2> 
      <Login />
    
    </div>
    
  </div>
   
  <div className='mt-10'> <Footer /></div>
</div>
  );
};

export default Loginpage;
