import React from "react";
import Header from "../HEADER/Header";
import HeaderLogin from "../HEADER/HeaderLogin";
import Footer from "../FOOTER/Footer";

export default function Shop () {


    return (
        <div>
            
            <div className="bg-[url('/backdonations1.png')] bg-no-repeat w-[100hv] h-[100hv]">

                <div>
                {localStorage.getItem('token') ? <HeaderLogin className='mb-4' /> : <Header className="mb-4" /> }    
                </div>

                <div className="h-screen w-screen">

                <h1 className="titleLeft"> We are working for you...</h1>
                <div className="flex justify-end"> <img src="./perrotrabaja.png" alt="" width='500px'/> </div>

                </div>
        
                
            </div>


            <div> <Footer /></div>
            
        </div>
    )
}