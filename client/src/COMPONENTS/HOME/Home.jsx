import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import Header from '../HEADER/Header';
import mascotas from '../DATA/Data';
import Footer from '../FOOTER/Footer';
import { getPetsRandom } from "../../Redux/actions";
import PreviewPetsAdoption from "../PREVIEW_PETS_ADOPTION/PreviewPetsAdoption";
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import HeaderLogin from '../HEADER/HeaderLogin';
import Chatbot from '../CHATBOT/Chatbot'



const Home = () => {

  //CARTAS DE ADOPCION:

 const dispatch = useDispatch();
  const state = useSelector((state) => state);
  
  useEffect(() => {
    dispatch(getPetsRandom());
  }, [dispatch]);

  // const itemsToShow = pets?.rows?.slice(0, 2);
  
// CARRUSEL:
const [currentImageIndex, setCurrentImageIndex] = useState(0);

const handleNextClick = () => {
  const nextIndex =
    currentImageIndex === images.length - 3
      ? 0
      : currentImageIndex + 1;
  setCurrentImageIndex(nextIndex);
};

const handlePrevClick = () => {
  const prevIndex =
    currentImageIndex === 0
      ? images.length - 3
      : currentImageIndex - 1;
  setCurrentImageIndex(prevIndex);
};

const mascotasFiltradas = mascotas.filter(mascota => mascota.adopted);
const images = mascotasFiltradas.map(mascota => mascota.image);
const currentMascotas = mascotasFiltradas.slice(currentImageIndex, currentImageIndex + 3);

// UseEffect para hacer el carrusel automático
useEffect(() => {
  const interval = setInterval(() => {
    handleNextClick();
  }, 6000); // cambiar el valor  para ajustar la velocidad del carrusel

  return () => clearInterval(interval);
}, [currentImageIndex]); // volver a llamar el useEffect cuando currentImageIndex cambie


  return (
  <div>

    <div>

        <div>
        {localStorage.getItem('token') ? <HeaderLogin className='mb-4' /> : <Header className="mb-4" /> }    
        </div>


      <div className="flex flex-col w-full lg:flex-row justify-center items-center">
      
          <div className="grid flex-grow h-32 card rounded-box place-items-center font-[candara] italic text-2xl text-neutral"> 
        Everybody needs a home. 
          <br />
          Every home needs love.</div>

          <div className="grid flex-grow h-fit card  rounded-box place-items-center ">
              <img className="mask mask-squircle bg-primary h-[85vh]" src="perritoOreja.png" />
          </div>       
      </div>

    </div>

    
    
    
 {/* BACKGROUND */}
    <div className="bg-[url('/backadopt.png')] bg-no-repeat w-full">

          
    {/* CARRUSEL */}

    <div className="pb-7 items-center rounded-full h-[90vh] flex justify-center">
        <h2 className="titleRight">adoption stories</h2>

    {mascotasFiltradas.length > 0 ? (
      <div className='mx-auto '>
                <div className="carousel carousel-end rounded-box w-4/5 h-4/5 mx-auto my-auto p-3 justify-evenly">
                      
              {currentMascotas.map((mascota, index) => (
                
              <div key={index} className={`carousel-item${index === 0 ? " active" : ""} relative float-left md:w-1/3`}> 
              {/*  se utiliza para establecer la clase active en el primer elemento del carrusel. La clase active se utiliza para indicar cuál es la imagen actualmente visible en el carrusel*/}
              
                    <img className="carousel-item object-cover cursor-pointer transform:rotate-180 rounded-3xl w-[20rem] h-[10rem]"
                      src={mascota.image}
                      alt={`Image ${currentImageIndex + 1}`}
                    />
              </div>
                ))}


                </div>
                <div className="absoulte flex transform  p-8 items-center ml-60 ">
                          <a onClick={handlePrevClick} className="btn btn-circle btn-accent"> ❮</a> 
                          <a onClick={handleNextClick} className="btn btn-circle btn-accent">❯</a>
                      </div>
            
          </div>
        ) : (
          <p>No hay mascotas disponibles</p>
        )}
    </div>
      
    {/* COMPONENTE ABOUT */}

    <div className="flex justify-center pl-10 pr-16">
      <img src='../../public/perritoabout.png' className="h-[90vh] w-[90vh]"/>

      <div>
      <h2 className="text"> At <a className='font-bold italic'>PETBOOK</a> </h2>
      <div>
        <h5 className="titleLeft">WE ARE</h5>
      </div>
        <h2 className="text pb-6">  passionate about animal welfare and are committed to creating a world where all pets have a safe and loving home. We believe that every pet deserves a chance to live a happy and healthy life, and we are dedicated to making that a reality. Join us in our mission to make a difference in the lives of pets and their human companions. </h2>
        <Link to='/about'>
          <button className="btn btn-secondary ">MORE ABOUT US</button>
        </Link>
      </div>

    </div>

    {/*CARDS DE ANIMALES EN ADOPCION */}
   

    <div className='flex items-center justify-center pr-10  pl-10'>
        <div className="">
          <PreviewPetsAdoption previewPets={state.petsRandomHome && state.petsRandomHome} />
        </div>
        <div className="p-8 mr-8 ml-8">
          <h2 className="titleRight">READY TO GO HOME</h2>
          <p className="text">Here you can see all of our animals who are ready and eager to go to their new home..</p>
          <Link to ="/AvaliblePetsAdoption">
            <button className="buttonSmallgreen">MORE</button> 
          </Link> 
        </div>
    </div>

</div>

  
  <br />

  {/*COMPONENTE DONACIONES */}

  <div className="grid grid-cols-2 gap-2 h-70 pb-4 mt-4">
  <div>
    
    <img src='/kittens.png' className=""/>
  </div>
  <div>
    <h5 className="titleRight pr-20">HELP US!</h5>
    <h2 className="text pr-20 text-justify">Your generous contribution can make a real difference in the lives of pets in need, helping them find their forever homes and providing them with a safe and loving environment. </h2>
    <br />
    <h2 className="text pr-20 text-justify">
      By donating, you'll be joining other animal lovers who share the same mission of creating a world where every pet can thrive. You can choose to make a one-time donation, or sponsor a pet to support their ongoing care. <a className='font-bold italic'>JOIN OUR COMMUNITY</a>  today and be a part of this important work!
    </h2>
    <br />
    <Link to ="/">
      <button className="btn btn-primary shadow uppercase inline-block py-2 px-4 mr-20 rounded">SPONSOR A PET</button> 
    </Link> 
    <Link to='/donate'>
     <button className="btn btn-primary uppercase inline-block py-2 px-4 mr-20 rounded">ONE-TIME DONATION</button>
     </Link>
  </div>
  </div>



    <div>
    <Footer className="mt-8"/>
    </div>
      


    
    </div>
  );
};

export default Home;

