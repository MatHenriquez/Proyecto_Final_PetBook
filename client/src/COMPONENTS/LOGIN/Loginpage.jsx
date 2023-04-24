import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import Login from './Login';

const Loginpage = () => {

  return (
    <div 
    className='grid grid-cols-1 sm:grid-cols-2 h-screen w-screen'>

{/* IMAGEN */}
			<div className='hidden sm:block'>  
      	<img className='w-full h-full object-cover' src="/LoginImg.png" alt="" /> 
        {/* arreglar el problemita de la imagen q se ve horrible y cambiar el color del botón q está en otro color! */}
      </div>
    
    <div 
    className='bg-white
     flex flex-col justify-center'>
 <h2 className='subtitle'>LOGIN.</h2> 
      <Login />
    
    </div>
    </div>
  );
};

export default Loginpage;
