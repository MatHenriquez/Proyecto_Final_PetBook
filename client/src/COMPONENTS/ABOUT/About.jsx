
import React from 'react';
import Footer from '../FOOTER/Footer';
import Header  from '../HEADER/Header';
import HeaderLogin from '../HEADER/HeaderLogin';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Team from './Team';


function About() {
  return (
  
<div className='flex flex-col w-full justify-center items-stretch'>
  <div className="bg-[url('/backabout.png')] bg-no-repeat w-screen">

{/* HEADER */}
  <div>
      {localStorage.getItem('token') ? <HeaderLogin className='mb-4' /> : <Header className="mb-4" /> }    
  </div>

{/* THE ONG */}
  <div className='flex items-center justify-center'>  
    <div className="card w-[56rem] shadow-xl image-full ">
      
      <div className="card-body">
        <h2 className="titleCenter">ABOUT THE ONG</h2>
        <p className='text text-justify px-8'>
          <b>PETBOOK</b> is a non-profit organization dedicated to the care and protection of animals. Our mission is to provide shelter, medical attention, and a loving environment for abandoned, abused, or neglected pets, and to find them safe and permanent homes through adoption.
          We believe that every animal deserves to be treated with respect, compassion, and dignity, regardless of their species, breed, or condition. We work tirelessly to rescue animals from harm, rehabilitate them if necessary, and match them with responsible and caring owners who will give them the love and care they deserve.
          Our team of volunteers and staff includes experienced veterinarians, animal behaviorists, and trained caregivers who are committed to ensuring the physical and emotional well-being of our animals. We provide them with nutritious food, clean living spaces, exercise, and socialization, and we strive to meet their individual needs and preferences. </p>
          <br />        
          <p className='text text-justify px-8'>
          Thanks to the generous support of our donors, sponsors, and partners, we have been able to save the lives of thousands of animals and make a meaningful impact in our community. We are grateful for your support and invite you to join us in our mission to create a more compassionate and just world for all creatures great and small.
          </p>
        <div className="card-actions justify-end items-center">
          <Link to='/donate'> <button className="btn btn-primary min-h-0 max-h-5 text-xs">CLICK HERE TO HELP US</button> </Link>
          <img className='w-[10rem]' src="/perritoOreja.png" alt="" />
          
        </div>
      </div>
    </div>
  </div>

<br />

{/* THE SITE */}
  <img src='../../public/imagenAbout.png' className='w-1/2 h-30 block mx-auto'/>
  <div className='flex items-center justify-center'>
      <div className="card w-[56rem] shadow-xl image-full px-8">
        <div className='card-body'>
      
        <h2 className="titleCenter">About the SITE </h2>
        <p className='text text-justify'>
        <b>PETBOOK.COM</b> is a modern and user-friendly website that connects pets in need of a home with loving families. The platform is designed to facilitate the pet adoption process and offers a wide variety of pet profiles available for adoption. Users can create their own profile and browse detailed information about the pets, such as age, breed, size, personality, geographical location, and special requirements. </p>
          <br />
        <p className='text text-justify'>
        The site was created as part of the final project for the programming bootcamp <Link to='http://www.soyhenry.com'><i>SoyHENRY</i></Link>. Our team of developers used  state-of-the-art technologies such as React, Redux, Sequelize, Node, JavaScript, CSS, and Express. These tools allow us to create a fast, reliable, and responsive web application that delivers a seamless user experience. We also prioritize security and data protection, ensuring that all user information is encrypted and stored safely. </p>
        </div>     
      </div>
  </div>

{/* THE TEAM */}
<div className='h-full'>
  < Team /> 
</div>


  </div>

<div className='h-screen flex justify-center mt-3'>
<img src="/perrogatootro.png" alt="" className='h-[90vh] items-center justify-center'/>
</div>
    <div className='bottom-0 w-full'>
    < Footer /> 
    </div>
  
</div>
  )
}

export default About

