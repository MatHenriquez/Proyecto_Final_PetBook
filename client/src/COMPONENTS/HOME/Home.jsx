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
import { FaExclamation } from 'react-icons/fa';



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



  return (
    <div>

      {/* HEADER */}
     <Header className="mb-4"/>

  {/* CARRUSEL */}
{mascotasFiltradas.length > 0 ? (
  <div className='container my-24 px-6 mx-auto'>
    <section className="mb-32 text-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-12">ADOPTION STORIES</h2>

      <div id="carouselExampleCaptions" className="carousel slide relative carousel-dark">
        <div className="carousel-inner relative w-full overflow-hidden flex flex-row">
          {currentMascotas.map((mascota, index) => (
           <div key={index} className={`carousel-item${index === 0 ? " active" : ""} relative float-left w-full md:w-1/3`}>
           <img className="rounded-full shadow-lg mb-4 mx-auto h-80 w-80"
             src={mascota.image}
             alt={`Image ${currentImageIndex + 1}`}
           />
           <div class='flex flex-wrap justify-center'>
           <div class="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
           <h5 class="text-lg font-bold mb-3">{mascota.name}</h5>
         </div>
         </div>
       </div>
          ))}
        </div>

        <button className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          onClick={handlePrevClick}
          type="button"
          data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon inline-block bg-no-repeat text-7xl" aria-hidden="true"></span>
          <span className="visually-hidden text-7xl"><BiLeftArrow/></span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          onClick={handleNextClick}
          type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon inline-block bg-no-repeat text-7xl" aria-hidden="true"></span>
          <span className="visually-hidden text-7xl"><BiRightArrow/></span>
        </button>
      </div>

    </section>

  </div>
) : (
  <p>No hay mascotas disponibles</p>
)}

  
{/* COMPONENTE ABOUT */}

<div className="grid grid-cols-2 gap-2 bg-green-200 h-70">
  <div>
    <h5 className="text-7xl text-center text-orange-600 italic font-bold tracking-wide mt-20 m-40">WE ARE...</h5>
    <img src='../../public/perritoabout.png' className="-mb-20 -mt-40 w-80 h-85 ml-80"/>
  </div>
  <div>
    <h2 className="text-2xl text-left indent-8  leading-loose mt-20 ml-5 mr-40 mb-8 "> Welcome to <a className='font-bold italic'>PETBOOK</a>, we are dedicated to providing information about animals for adoption. Here you can adopt or sponsor a pet so that it finds a home full of love. We have a section where you can make donations and receive information about each pet. You can also buy products in our store. Join our community! </h2>
    <Link to='/about'>
      <button className="w-2/6 my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">MORE ABOUT US</button>
    </Link>
  </div>
</div>


  
    {/*CARDS DE ANIMALES EN ADOPCION */}
  <div className='flex flex-row flex-wrap items-center justify-center pt-5 mt-20'>
  <div className="w-full md:w-1/2">
    <PreviewPetsAdoption previewPets={state.petsRandomHome && state.petsRandomHome} />
  </div>
  <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
    <h2 className="text-7xl text-orange-600 italic font-bold tracking-wide mb-5">READY TO GO HOME...</h2>
    <Link to ="/AvaliblePetsAdoption">
      <button className="w-20 my-10 py-1 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">MORE</button> 
    </Link> 
  </div>
</div>



  
  {/*COMPONENTE DONACIONES */}

  <div className="grid grid-cols-2 gap-2 bg-green-200 h-70 mt-40">
  <div>
    <h5 className="text-7xl text-center text-orange-600 italic font-bold tracking-wide mt-20 m-40">HELP US...</h5>
    <img src='../../public/helpme.png' className="-mb-5 -mt-40 w-100 h-100 ml-60 "/>
  </div>
  <div>
    <h2 className="text-2xl text-left indent-8  leading-loose mt-20 ml-5 mr-40 mb-8 ">Your generous contribution can make a difference in the lives of pets in need and help them find their forever homes. 
    By donating, you will join other animal lovers who share the same mission of providing a safe haven for all pets. 
    You can donate one time or sponsor a pet.
    <br></br>
    <a className='font-bold italic'>JOIN OUR COMMUNITY<FaExclamation/></a>
    </h2>
    <Link to ="/">
      <button className="w-80 my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">YOU CAN SPONSOR A PET</button> 
    </Link> 
    <Link to='/'>
     <button style={{ marginBottom: '100px' }} className="w-80 my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">DONATE FOR A ONE TIME</button>
     </Link>
  </div>
  </div>


  <div className="mx-auto mt-20 bg-white w-4/5"></div>

    {/* FOOTER */}
      <Footer className="mt-8"/>

    
    </div>
  );
};

export default Home;

