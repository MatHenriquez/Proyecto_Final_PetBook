import React from "react";
import { Link } from "react-router-dom";

export default function Team (){

    return (
        <div className='bg-primary rounded-full mt-3 px-10 py-4'>
        <h2 className=' titleCenter'>About THE DEVELOPER TEAM </h2>
        <p className='text ml-10 font-semibold'>Click in the team photos and know more about them!!!</p>
  
  
  
  
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
  
         {/* SOFI */}
        <div className="p-4">
          <a className="group relative bg-black lg:h-full flex justify-center items-center">
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
          <a className="group relative bg-black lg:h-full flex justify-center items-center">
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
          <a className="group relative bg-black lg:h-full flex justify-center items-center">
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
          <a className="group relative bg-black lg:h-full flex justify-center items-center">
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
          <a className="group relative bg-black  lg:h-full flex justify-center items-center">
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
          <a className="group relative bg-black lg:h-full flex justify-center items-center">
                      <img alt="Raul Foto" src="/raulcoco.jpg" className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />
  
                      <div className="relative p-2 sm:p-6 lg:p-6">  
                        <div className="mt-20 sm:mt-20 lg:mt-20">
                          <div className="transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 translate-y-96">
                          <p className="text-xl font-bold text-white sm:text-2xl">Raúl & Coco </p>
                          <br />
                          <p className="text-sm font-medium uppercase tracking-widest  text-pink-500"> Back-End team</p>
                          
                            <p className="text-sm text-white">
                              Raúl is a full stack developer, is a highly creative thinker who enjoys exploring new technologies and experimenting with different approaches to problem-solving
                            </p>
                            <br />
                            <p className="text-sm text-white">
                            Coco is a beautiful, playful, and very fun dog who accompanies Raul to work every day. He loves to participate in meetings, but his favorite part of the day is going out to play in the yard.
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
          <a className="group relative bg-black lg:h-full flex justify-center items-center">
                      <img alt="Camilo-foto" src="/.jpg" className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />
  
                      <div className="relative p-2 sm:p-6 lg:p-4">  
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
    )
}