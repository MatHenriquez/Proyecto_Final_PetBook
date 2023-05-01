import React from "react";
import Header from "../HEADER/Header";
import HeaderLogin from "../HEADER/HeaderLogin";
import Footer from "../FOOTER/Footer";
import { Link } from "react-router-dom";

export default function ErrorPage () {


    return (
        <div>
            
            <div className="bg-[url('/backdonations1.png')] bg-no-repeat w-[100hv] h-[100hv]">

                <div>
                {localStorage.getItem('token') ? <HeaderLogin className='mb-4' /> : <Header className="mb-4" /> }    
                </div>

              
                <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
                   
                    <div className='flex flex-col justify-center'>
                        <h1 className="titleCenter ">DON'T PANIC!!!</h1>
                        <h3 className="text text-center text-lg">It seems the content you are looking for doesn't exists... </h3>
                        <h3 className="subtitle">Go back home and continue watching our litle furrriends</h3>
                        <div className="flex justify-center sm:justify-center mr-5"><Link to='/home'><button className="btn btn-primary">HOME</button></Link></div>
                        
                    </div>

                    <div className='hidden sm:flex flex-col justify-center'>
                         <div className="flex justify-center items-center"> <img src="./cat404.png" alt="" width='500px'/> </div>
                    </div>


                
                </div>
        
                
            </div>


            <div> <Footer /></div>
            
        </div>
    )
}