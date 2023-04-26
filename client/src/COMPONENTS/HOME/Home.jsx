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
import Carousel from "../CAROUSEL/Carousel";



const Home = () => {

  //CARTAS DE ADOPCION:

 const dispatch = useDispatch();
  const state = useSelector((state) => state);
  
  useEffect(() => {
    dispatch(getPetsRandom());
  }, [dispatch]);

  // const itemsToShow = pets?.rows?.slice(0, 2);
  


  return (
  <div>

    <div className="">

        <div>
        {localStorage.getItem('token') ? <HeaderLogin className='mb-4' /> : <Header className="mb-4" /> }    
        </div>


      <div className="flex flex-col w-full lg:flex-row justify-center items-center">
      
          <div className="grid flex-grow h-32 card rounded-box place-items-center font-[candara] italic text-2xl text-neutral"> 
        Everybody needs a home. 
          <br />
          Every home needs love.</div>

          <div className="grid flex-grow card  rounded-box place-items-center justify-center ">
              <img className="mask mask-squircle  bg-primary h-[30vh] lg:h-[85vh]" src="perritoOreja.png" />
          </div>       
      </div>

    </div>

    
    
    
 {/* BACKGROUND */}
    <div className="bg-[url('/backadopt.png')] bg-no-repeat w-full abosulte">

          
    {/* CARRUSEL */}

    <div className="flex flex-col w-full lg:flex-row justify-center items-center">

      <div>
        <h2 className="titleRight">adoption stories</h2>
      </div>

      <div>
        <Carousel />
      </div>

    </div>
      
    {/* COMPONENTE ABOUT */}

    <div  className="flex flex-col w-full lg:flex-row justify-center items-center">
      <img src='../../public/perritoabout.png' className="hidden lg:block place-items-center h-[90vh]"/>

      <div className="">
      <h2 className="text px-6"> At <a className='font-bold italic'>PETBOOK</a> </h2>
      <div>
        <h5 className="titleLeft">WE ARE</h5>
      </div>
        <h2 className="text pb-6 text-justify px-6">  passionate about animal welfare and are committed to creating a world where all pets have a safe and loving home. We believe that every pet deserves a chance to live a happy and healthy life, and we are dedicated to making that a reality. Join us in our mission to make a difference in the lives of pets and their human companions. </h2>
       <div className="flex justify-center sm:justify-end mr-5">
       <Link to='/about'>
          <button className="btn btn-accent btn-sm ">MORE ABOUT US</button>
        </Link>

       </div>

      </div>

    </div>

    {/*CARDS DE ANIMALES EN ADOPCION */}
   

    <div className='flex flex-col w-full lg:flex-row justify-center items-center'>

        <div className="p-8 mr-8 ml-8">
          <h2 className=" titleCenter sm:titleLeft">READY TO GO HOME</h2>
          <p className="text text-justify">Here you can see all of our animals who are ready and eager to go to their new home..</p>
         

          <div className="flex justify-center sm:justify-start">
           <Link to ="/AvaliblePetsAdoption">
            <button className="btn btn-accent btn-sm mt-6">MORE</button> 
          </Link> 

    </div>

        </div>

        <div>
          <PreviewPetsAdoption previewPets={state.petsRandomHome && state.petsRandomHome} />
        </div>
    </div>

  {/*COMPONENTE DONACIONES */}

  <div className="flex flex-col w-full sm:flex-row justify-center items-center">
  
  <div>    
    <img src='/kittens.png' className=""/>
  </div>

  <div>
    <h5 className="titleCenter lg:titleRight ">HELP US!</h5>
    <h2 className="text px-6 text-justify">Your generous contribution can make a real difference in the lives of pets in need, helping them find their forever homes and providing them with a safe and loving environment. </h2>
    <br />
    <h2 className="text px-6 text-justify">
      By donating, you'll be joining other animal lovers who share the same mission of creating a world where every pet can thrive. You can choose to make a one-time donation, or sponsor a pet to support their ongoing care. <a className='font-bold italic'>JOIN OUR COMMUNITY</a>  today and be a part of this important work!
    </h2>
    <br />
    <div className="flex flex-col w-full sm:flex-row justify-center items-center">
        <Link to ="/">
          <button className="btn btn-accent btn-sm shadow uppercase inline-block my-2 sm:mx-3 rounded">SPONSOR A PET</button> 
        </Link> 
        <Link to='/donate'>
        <button className="btn btn-accent btn-sm  uppercase inline-block my-2 rounded">ONE-TIME DONATION</button>
        </Link>


    </div>

  </div>

 </div>
          
</div>

  <br />
    <div>
    <Footer className="mt-8"/>
    </div>
          
    </div>
  );
};

export default Home;
