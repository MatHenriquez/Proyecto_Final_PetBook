
import React from 'react';
import Footer from '../FOOTER/Footer';
import Header  from '../HEADER/Header';
import HeaderLogin from '../HEADER/HeaderLogin';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';



function About() {
  return (
<div className="bg-[url('/backabout.png')] bg-no-repeat w-screen">

{/* HEADER */}
  <div>
      {localStorage.getItem('token') ? <HeaderLogin className='mb-4' /> : <Header className="mb-4" /> }    
  </div>


{/* THE ONG */}
  <div className='flex items-center justify-center'>  
    <div className="card w-[56rem] shadow-xl image-full ">
      
      <div className="card-body">
        <h2 className="titleRight px-8">ABOUT THE ONG</h2>
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
      <div className="card w-[56rem] shadow-xl image-full">
        <div className='card-body'>
      
        <h2 className="titleLeft px-8">About the SITE </h2>
        <p className='text text-justify px-8'>
        <b>PETBOOK.COM</b> is a modern and user-friendly website that connects pets in need of a home with loving families. The platform is designed to facilitate the pet adoption process and offers a wide variety of pet profiles available for adoption. Users can create their own profile and browse detailed information about the pets, such as age, breed, size, personality, geographical location, and special requirements. </p>
          <br />
        <p className='text text-justify px-8'>
        The site was created as part of the final project for the programming bootcamp <Link to='http://www.soyhenry.com'><i>SoyHENRY</i></Link>. Our team of developers used  state-of-the-art technologies such as React, Redux, Sequelize, Node, JavaScript, CSS, and Express. These tools allow us to create a fast, reliable, and responsive web application that delivers a seamless user experience. We also prioritize security and data protection, ensuring that all user information is encrypted and stored safely. </p>
        </div>     
      </div>
  </div>


{/* THE TEAM */}
    <div className='bg-primary rounded-full mt-3 p-6 '>
      <h2 className='titleRight mr-20'>About THE DEVELOPER TEAM </h2>
      <p className='text ml-10 font-semibold'>Scroll over the team photos and know more about them!!!</p>




      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ">

       {/* SOFI */}
      <div className="p-4">
        <a className="group relative bg-black h-5/6 lg:h-full flex justify-center items-center">
                    <img alt="Developer" src="/sofimorita.jpg" className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />

                    <div className="relative p-2 sm:p-6 lg:p-6">  
                      <div className="mt-20 sm:mt-20 lg:mt-20">
                        <div className="transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 translate-y-96">
                        <p className="text-xl font-bold text-white sm:text-2xl">Sofi & Morita</p>
                        <br />
                        <p className="text-sm font-medium uppercase tracking-widest  text-pink-500"> Front-End team</p>
                        
                          <p className="text-sm text-white">
                            Sofi is a full stack developer, always eager to learn and improve her skills, and is constantly staying up-to-date with the latest trends front-end development.
                          </p>
                          <br />
                          <p className="text-sm text-white">
                          Morita is a lovable dog who never fails to bring a smile to Sofi's face, whether they're going for a walk or snuggling up on the couch
                          </p>
                          <Link><button><img src="/git.png" alt="" className='w-8 h-8'/></button></Link>
                          <Link><button><img src="/linkedin.png" alt="" className='w-8 h-8'/></button></Link>
                      </div>
                    </div>
                    </div>
                  </a>  
                
       </div>

        {/* MATI */}
        <div class="p-4">
        <a className="group relative bg-black h-5/6 lg:h-full flex justify-center items-center">
            <img alt="FOTO MATI" src="/matifreyjamei.jpg" className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />

            <div className="relative p-2 sm:p-6 lg:p-6">  
              <div className="mt-20 sm:mt-20 lg:mt-20">
                <div className="transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 translate-y-96">
                <p className="text-xl font-bold text-white sm:text-2xl">Mati, Freyja & Mei </p>
                <br />
                <p className="text-sm font-medium uppercase tracking-widest  text-pink-500"> Front-End team</p>
                
                  <p className="text-sm text-white">
                    Mati is a FullStack developer. He is a highly analytical thinker who approaches every problem with a methodical and detail-oriented mindset. 
                  </p>
                  <br />
                  <p className="text-sm text-white">
                    Freyja and Mei were adopted together and have been inseparable ever since. They are both lovable and playful sisters who bring joy to everyone around them.  
                  </p>
                  <Link><button><img src="/git.png" alt="" className='w-8 h-8'/></button></Link>
                  <Link><button><img src="/linkedin.png" alt="" className='w-8 h-8'/></button></Link>
              </div>
            </div>
            </div>
          </a>  
        
        </div>
     
        {/* CANDE */}
        <div class="p-4">
        <a className="group relative bg-black h-5/6 lg:h-full flex justify-center items-center">
                    <img alt="Developer" src="/candenino.jpg" className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />

                    <div className="relative p-2 sm:p-6 lg:p-6">  
                      <div className="mt-20 sm:mt-20 lg:mt-20">
                        <div className="transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 translate-y-96">
                        <p className="text-xl font-bold text-white sm:text-2xl">Cande & Nino</p>
                        <br />
                        <p className="text-sm font-medium uppercase tracking-widest  text-pink-500"> Front-End team</p>
                        
                          <p className="text-sm text-white">
                            Cande is a full stack developer, inclined for front-end. Always committed to delivering top-quality work.
                          </p>
                          <br />
                          <p className="text-sm text-white">
                          Nino is an energetic and adventurous pup who loves nothing more than long walks and exploring new places with his human
                          </p>
                          <Link><button><img src="/git.png" alt="" className='w-8 h-8'/></button></Link>
                          <Link><button><img src="/linkedin.png" alt="" className='w-8 h-8'/></button></Link>
                      </div>
                    </div>
                    </div>
                  </a>  
                
        </div>

        {/* NIKI */}       
              
        <div class="p-4">
        <a className="group relative bg-black h-5/6 lg:h-full flex justify-center items-center">
            <img alt="Developer" src="/nikimilo.jpg" className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />

            <div className="relative p-2 sm:p-6 lg:p-6">  
              <div className="mt-20 sm:mt-20 lg:mt-20">
                <div className="transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 translate-y-96">
                <p className="text-xl font-bold text-white sm:text-2xl">Niki & Milo</p>
                <br />
                <p className="text-sm font-medium uppercase tracking-widest  text-pink-500"> Front-End team</p>
                
                  <p className="text-sm text-white">
                    Nikki is a full stack developer, passionate for front-end, web desing, UX and UI. With a keen eye for design and a love of creating beautiful, user-friendly web experiences.
                  </p>
                  <br />
                  <p className="text-sm text-white">
                  Milo is the most curious and loving cat. He is the greatest companion and can often be found snuggled up next to Nikki's keyboard as she works on her latest project.
                  </p>
                  <Link><button><img src="/git.png" alt="" className='w-8 h-8'/></button></Link>
                  <Link><button><img src="/linkedin.png" alt="" className='w-8 h-8'/></button></Link>
              </div>
            </div>
            </div>
          </a>  
        
        </div>


        {/* LUCAS */}
        <div class="p-4">
        <a className="group relative bg-black h-5/6 lg:h-full flex justify-center items-center">
                    <img alt="Developer" src="/lucasyrandolf.jpg" className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />

                    <div className="relative p-2 sm:p-6 lg:p-6">  
                      <div className="mt-20 sm:mt-20 lg:mt-20">
                        <div className="transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 translate-y-96">
                        <p className="text-xl font-bold text-white sm:text-2xl">Lucas & Randolf</p>
                        <br />
                        <p className="text-sm font-medium uppercase tracking-widest  text-pink-500"> Back-End team</p>
                        
                          <p className="text-sm text-white">
                            Lucas is a full stack developer, he is a talented and experienced back-end developer with a deep passion for coding and problem-solving.
                          </p>
                          <br />
                          <p className="text-sm text-white">
                          Randolf is a lovable and energetic dog who brings joy and laughter to everyone he meets. he likes to go out for walks with Lucas, enjoying the fresh air and sunshine.
                          </p>
                          <Link><button><img src="/git.png" alt="" className='w-8 h-8'/></button></Link>
                          <Link><button><img src="/linkedin.png" alt="" className='w-8 h-8'/></button></Link>
                      </div>
                    </div>
                    </div>
                  </a>  
                
        </div>

        {/* RAUL */}
        <div class="p-4">
        <a className="group relative bg-black h-5/6 lg:h-full flex justify-center items-center">
                    <img alt="Raul Foto" src="/raul.png" className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />

                    <div className="relative p-2 sm:p-6 lg:p-6">  
                      <div className="mt-20 sm:mt-20 lg:mt-20">
                        <div className="transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 translate-y-96">
                        <p className="text-xl font-bold text-white sm:text-2xl">Raúl </p>
                        <br />
                        <p className="text-sm font-medium uppercase tracking-widest  text-pink-500"> Back-End team</p>
                        
                          <p className="text-sm text-white">
                            Raúl is a full stack developer, is a highly creative thinker who enjoys exploring new technologies and experimenting with different approaches to problem-solving
                          </p>
                          <br />
                          <p className="text-sm text-white">
                         {/* resumen de la mascota */}
                          </p>
                          <Link><button><img src="/git.png" alt="" className='w-8 h-8'/></button></Link>
                          <Link><button><img src="/linkedin.png" alt="" className='w-8 h-8'/></button></Link>
                      </div>
                    </div>
                    </div>
                  </a>  
                
        </div>
<div>
  
</div>
        {/* CAMILO */}
        <div class="p-4">
        <a className="group relative bg-black h-5/6 lg:h-full flex justify-center items-center">
                    <img alt="Camilo-foto" src="/.jpg" className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />

                    <div className="relative p-2 sm:p-6 lg:p-6">  
                      <div className="mt-20 sm:mt-20 lg:mt-20">
                        <div className="transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 translate-y-96">
                        <p className="text-xl font-bold text-white sm:text-2xl">Camilo</p>
                        <br />
                        <p className="text-sm font-medium uppercase tracking-widest  text-pink-500"> Back-End team</p>
                        
                          <p className="text-sm text-white">
                            Camilo is a full stack developer, he is a hard-working back-end developer who is always striving to improve his skills and deliver high-quality work.
                          </p>
                          <br />
                          <p className="text-sm text-white">
                          {/* resumen de la mascota */}
                          </p>
                          <Link><button><img src="/git.png" alt="" className='w-8 h-8'/></button></Link>
                          <Link><button><img src="/linkedin.png" alt="" className='w-8 h-8'/></button></Link>
                      </div>
                    </div>
                    </div>
                  </a>  
                
        </div>
      </div>


    </div>




<div className="mx-auto mt-10 bg-white w-4/5"></div>

    <Footer />
</div>
  )
}

export default About

