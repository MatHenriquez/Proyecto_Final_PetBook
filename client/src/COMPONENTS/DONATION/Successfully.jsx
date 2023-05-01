import React from "react";
import Header from "../HEADER/Header";
import Footer from "../FOOTER/Footer";
import HeaderLogin from "../HEADER/HeaderLogin";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from 'query-string';


export default function Successfully(){

    const params = queryString.parse(location.search);
    const id = params.id;
    const amount = params.amount;

    return (
        <div>
            
            <div className="bg-[url('/backdonations1.png')] bg-no-repeat w-[100hv] h-[100hv]">

                <div>
                {localStorage.getItem('token') ? <HeaderLogin className='mb-4' /> : <Header className="mb-4" /> }    
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
                   
                    <div className='flex flex-col justify-center'>
                        <h1 className="titleCenter ">THANKS FOR YOUR DONATION!!!</h1>
                        <h3 className="subtitle">Go back home and continue watching our litle furrriends</h3>
                        <br>
                        </br>
                        <div className="flex justify-center sm:justify-center mr-5"><Link><button className="btn btn-primary">HOME</button></Link></div>
                        
                    </div>

                    <div className='hidden sm:flex flex-col justify-center'>
                         <div className="flex justify-end items-center"> <img src="./catdog.png" alt="Dogs and cats" width='700px'/> </div>
                    </div>


                
                </div>
        
                
            </div>


            <div> <Footer /></div>
            
        </div>
    )
}