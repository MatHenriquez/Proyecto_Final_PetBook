import React from 'react';
import Footer from '../FOOTER/Footer';
import Header  from '../HEADER/Header';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';



function About() {
  return (
<div>

    <Header />

<div className="mx-auto mt-20 bg-white w-4/5"></div>

<div className="columns-2 gap-0 bg-green-200">

    <h5 className="text-7xl text-center text-orange-600 italic font-bold tracking-wide m-40">ABOUT US...</h5>

    <h2 className="text-2xl text-center indent-8  leading-loose mt-20 ml-5 mr-40 mb-8">We are Henry students who are passionate about animals. This Web application corresponds to the final project of the Full Stack Developer degree developed from the knowledge learned in the bootcamp. Its objective is to connect pets with people so that they can adopt them and provide them with a home. We also offer the possibility of making donations and sponsoring a pet to improve their quality of life. We also have an online store where you can buy products or redeem your points, obtained by donations.</h2>

</div>

<img src='../../public/imagenAbout.png' className='w-1/2 h-30 block mx-auto'/>

<div className="flex flex-wrap bg-green-200">

{/* SOFIA */}

<div className="grid gap-4 text-center md:grid-cols-3 lg:gap-12">
<div className='bg-white rounded-lg border-2 border-black box-content h-100 w-100 mx-24 mt-10'>
<div className="mb-12 md:mb-0">
<div className="mb-6 flex justify-center">
    <img src='https://avatars.githubusercontent.com/u/113480481?s=400&u=0dca69a0e579b6b35cfc192e6b01f5058cd2aac5&v=4' alt="Sofia Costamagna"
     className='mx-24 mt-10 w-60 h-60 rounded-full shadow-lg dark:shadow-black/30' />
 </div>
    <h5 className="mb-4 text-xl font-semibold">Sofia Costamagna</h5>
    <h6 class="mb-4 font-semibold text-primary dark:text-primary-500">Full Stack Developer</h6>
<div className="flex items-center justify-center">
  <a href="https://github.com/sofiacostamagna" className="text-2xl" target="_blank"><AiOutlineGithub /></a> 
  <a href="https://www.linkedin.com/in/sofia-costamagna" className="text-2xl" target="_blank"><AiFillLinkedin /></a>
</div>
    <p className="mx-10 mt-5 mb-5 text-center text-base">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="inline-block h-7 w-7 pr-2"
        viewBox="0 0 24 24">
        <path
          d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
    </svg>
    Sofia is a full stack developer. She loves the front-end. She is detailed and you pursue her goals until you achieve them.</p>    
</div>
 </div>

    {/* CANDE */}
    <div className='bg-white rounded-lg border-2 border-black box-content h-100 w-100 mx-24 mt-10 space-x-2'>
     <div className="mb-12 md:mb-0">
        <div className="mb-6 flex justify-center">
        <img src="https://avatars.githubusercontent.com/u/103840476?v=4" alt="Maria Candela Reynoso"
         className='mx-24 mt-10 w-60 rounded-full shadow-lg dark:shadow-black/30' />
         </div>
        <h5 className="mb-4 text-xl font-semibold">Maria Candela Reynoso</h5>
        <h6 class="mb-4 font-semibold text-primary dark:text-primary-500">Full Stack Developer</h6>
        <div className="flex items-center justify-center">
  <a href="https://github.com/CandelaReynoso" className="text-2xl" target="_blank"><AiOutlineGithub /></a> 
  <a href="https://www.linkedin.com/in/candelareynoso/" className="text-2xl" target="_blank"><AiFillLinkedin /></a>
</div>
<p className="mx-10 mt-5 mb-5 text-center text-1xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="inline-block h-7 w-7 pr-2"
        viewBox="0 0 24 24">
        <path
          d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
      </svg>
      Maria is a Full Stack Developer. Her passion is the front-end, she is very hard-working and studious.</p>
   </div>   
</div>

{/* LUCAS */}

<div className='bg-white rounded-lg border-2 border-black box-content h-100 w-100 mx-24 mt-10 space-x-1'>
 <div className="mb-12 md:mb-0">
     <div className="mb-6 flex justify-center">
     <img src="https://avatars.githubusercontent.com/u/113627748?v=4" alt="Lucas Nahuel Salvatierra"
         className='mx-24 mt-10 w-60 rounded-full shadow-lg dark:shadow-black/30' />
 </div>
    <h5 className="mb-4 text-xl font-semibold">Lucas Nahuel Salvatierra</h5>
    <h6 class="mb-4 font-semibold text-primary dark:text-primary-500">Full Stack Developer</h6>
<div className="flex items-center justify-center">
     <a href="https://github.com/LucasNS1759" className="text-2xl" target="_blank"><AiOutlineGithub /></a> 
     <a href="https://www.linkedin.com/in/lucas-nahuel-salvatierra-862604260/"className="text-2xl" target="_blank"><AiFillLinkedin /></a>
</div>
<p className="mx-10 mt-5 mb-5 text-center text-1xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="inline-block h-7 w-7 pr-2"
        viewBox="0 0 24 24">
        <path
          d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
      </svg>
      Lucas is a full stack developer. He works well in both front-end and back-end and is very passionate about his work.</p>
</div>
</div>
</div>

{/* NICOLE */}


<div className="grid gap-4 text-center md:grid-cols-2 lg:gap-12">
<div className='bg-white rounded-lg border-2 border-black box-content h-100 w-100 mt-10 ml-80 mr-60 mb-25'>
<div className="mb-12 md:mb-0 ">
<div className="mb-6 flex justify-center">
    <img src='https://media.licdn.com/dms/image/C4D03AQFxpF0INnJ7jw/profile-displayphoto-shrink_800_800/0/1654212246852?e=1687392000&v=beta&t=i6XAyFeZk318ng5LZh5VTWwxjZumWvxOH2cesSa9DJc' alt="Nicole Burgos Vega" 
     className='mx-24 mt-10 w-60 rounded-full shadow-lg dark:shadow-black/30' />
 </div>
    <h5 className="mb-4 text-xl font-semibold">Nicole Burgos Vega</h5>
    <h6 class="mb-4 font-semibold text-primary dark:text-primary-500">Full Stack Developer</h6>
<div className="flex items-center justify-center">
  <a href='https://github.com/nikkiburgos' className="text-2xl" target="_blank"><AiOutlineGithub /></a> 
  <a href="https://www.linkedin.com/in/nburgosvega/" className="text-2xl" target="_blank"><AiFillLinkedin /></a>
</div>
    <p className="mx-10 mt-5 mb-5 text-center text-base">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="inline-block h-7 w-7 pr-2"
        viewBox="0 0 24 24">
        <path
          d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
    </svg>
    Nikki is a full stack developer, passionate for front-end, web desing, UX and UI.</p>

</div>
 </div>

{/* MATIAS */}

<div className='bg-white rounded-lg border-2 border-black box-content h-100 w-100 mt-10 ml-60 mr-80 mb-25'>
 <div className="mb-12 md:mb-0">
     <div className="mb-6 flex justify-center">
     <img src="https://media.licdn.com/dms/image/D4D03AQFDlW7QBcdROQ/profile-displayphoto-shrink_800_800/0/1670725152596?e=1687392000&v=beta&t=suXOHZPzlEVbP9TYBuXkEdNAuvK60b3jm29XtuqnL1U"  alt="Matias Eduardo Henriquez" 
         className='mx-24 mt-10 w-60 rounded-full shadow-lg dark:shadow-black/30' />
 </div>
    <h5 className="mb-4 text-xl font-semibold">Matias Eduardo Henriquez</h5>
    <h6 class="mb-4 font-semibold text-primary dark:text-primary-500">Full Stack Developer</h6>
<div className="flex items-center justify-center">
     <a href="https://github.com/trechiStrix" className="text-2xl" target="_blank"><AiOutlineGithub /></a> 
     <a href="https://www.linkedin.com/in/mat%C3%ADas-henr%C3%ADquez-7a435925a/"className="text-2xl" target="_blank"><AiFillLinkedin /></a>
</div>
<p className="mx-10 mt-5 mb-5 text-center text-1xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="inline-block h-7 w-7 pr-2"
        viewBox="0 0 24 24">
        <path
          d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
      </svg>
      Matias is a Full Stack Developer. He performs very well in front-end and in back-end. He lover of new challenges and projects.</p>
</div>
</div>
</div>



{/* RAUL */}

<div className="grid gap-4 text-center md:grid-cols-3 lg:gap-12">
<div className='bg-white rounded-lg border-2 border-black box-content h-100 w-100 mx-24 mt-10 mb-10'>
<div className="mb-12 md:mb-0">
<div className="mb-6 flex justify-center">
    <img src='https://avatars.githubusercontent.com/u/107262829?v=4'alt="Raul Humberto Diaz Fernandez"
     className='mx-24 mt-10 w-60 h-60  rounded-full shadow-lg dark:shadow-black/30' />
 </div>
    <h5 className="mb-4 text-xl font-semibold">Raul Humberto Diaz Fernandez</h5>
    <h6 class="mb-4 font-semibold text-primary dark:text-primary-500">Full Stack Developer</h6>
<div className="flex items-center justify-center">
  <a href="https://github.com/rulhdiazf" className="text-2xl" target="_blank"><AiOutlineGithub /></a> 
  <a href="https://www.linkedin.com/in/rauldf/" className="text-2xl" target="_blank"><AiFillLinkedin /></a>
</div>
    <p className="mx-10 mt-5 mb-5 text-center text-base">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="inline-block h-7 w-7 pr-2"
        viewBox="0 0 24 24">
        <path
          d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
    </svg>
    Raul is a Full Stack Developer. Passionate about the back-end, he is very detailed and never gives up until he reaches his goal.</p>
</div>
 </div>

    {/* CAMILO */}
    <div className='bg-white rounded-lg border-2 border-black box-content h-100 w-100 mx-24 mt-10 mb-10 space-x-2'>
     <div className="mb-12 md:mb-0">
        <div className="mb-6 flex justify-center">
        <img src="" alt="Camilo Lopez Calvache" 
         className='mx-24 mt-10 w-60 rounded-full shadow-lg dark:shadow-black/30' />
         </div>
        <h5 className="mb-4 text-xl font-semibold">Camilo Lopez Calvache</h5>
        <h6 class="mb-4 font-semibold text-primary dark:text-primary-500">Full Stack Developer</h6>
        <div className="flex items-center justify-center">
  <a href="" className="text-2xl" target="_blank"><AiOutlineGithub /></a> 
  <a href="" className="text-2xl" target="_blank"><AiFillLinkedin /></a>
</div>
<p className="mx-10 mt-5 mb-5 text-center text-1xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="inline-block h-7 w-7 pr-2"
        viewBox="0 0 24 24">
        <path
          d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
      </svg>
      Camilo is a Full Stack Developer. He is passionate about the back-end, but he has no problem working on the front-end. Hardworking and dedicated.</p>
   </div>   
</div>

{/* ANDRES */}

<div className='bg-white rounded-lg border-2 border-black box-content h-100 w-100 mx-24 mt-10 mb-10 space-x-1'>
 <div className="mb-12 md:mb-0">
     <div className="mb-6 flex justify-center">
     <img src="" alt="Andres Aramando Benavidez Lopez" 
         className='mx-24 mt-10 w-60 rounded-full shadow-lg dark:shadow-black/30' />
 </div>
    <h5 className="mb-4 text-xl font-semibold">Andres Aramando Benavidez Lopez</h5>
    <h6 class="mb-4 font-semibold text-primary dark:text-primary-500">Full Stack Developer</h6>
<div className="flex items-center justify-center">
     <a href="https://github.com/Adresspy" className="text-2xl" target="_blank"><AiOutlineGithub /></a> 
     <a href=""className="text-2xl" target="_blank"><AiFillLinkedin /></a>
</div>
<p className="mx-10 mt-5 mb-5 text-center text-1xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="inline-block h-7 w-7 pr-2"
        viewBox="0 0 24 24">
        <path
          d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
      </svg>
      Andres is a Full Stack Developer. His passion is the front-end, design, very detailed.</p>
</div>
</div>
</div>

</div>

<div className="mx-auto mt-20 bg-white w-4/5"></div>

    <Footer />
</div>
  )
}

export default About