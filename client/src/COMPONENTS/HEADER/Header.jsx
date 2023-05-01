import React from "react";
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'

  export default function Header() {
    // const Menu = e => {
    //   const menu = document.querySelector(".mobile-links");
    //   menu.classList.toggle("hidden");
    // };

    console.log('usersinentrar ' + localStorage.getItem('token')); 

    return (
      <div>  
      
      {/*  HEADER MOBILE  */}
        <div >
          <div className="navbar  lg:hidden">

            <div className="navbar-start dropdown">
              <ul className="menu menu-horizontal px-1 ">

                <li tabIndex={0}>
                  <a>                   
                    < FiMenu />
                  </a>
                    <ul className="menu dropdown-content p-2 bg-base-100 w-56 rounded-box text group-hover:bg-primary">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/donate">Donate</a></li>
                        <li><a href="/AvaliblePetsAdoption">Adopt</a></li>
                        <li><a href="/login">Log in</a></li>
                        <li><a href="/store">Store</a></li>                        
                        <li><a href="/FormContact">Contact us</a></li>

                    </ul>
                </li>
              </ul>
            </div>
            <div className="flex-1">
            <img src="/logo.png" alt="" width='200rem'/>
            </div>
          </div>
        </div>


        {/* HEADER COMUN */}
        <div className="contain mx-auto">
        <div className="hidden lg:navbar">
            <div className="flex-1">
              <Link to='/home'>
                <img src="/logo.png" alt="" width='200rem'/>
              </Link>
            </div>

            <div className="flex-none gap-2">
              <a href="/home" className="textoheader hover:bg-primary">home</a>
              <a href="/about" className="textoheader hover:bg-primary">about</a>
              <a href="/donate" className="textoheader hover:bg-primary">donate</a>
              <a href="/store" className="textoheader hover:bg-primary">store</a>
              <a href="/AvaliblePetsAdoption" className="textoheader hover:bg-primary">adopt</a>
              <a href="/FormContact" className="textoheader hover:bg-primary">contact us</a>
              <a href= "/login" className="textoheader hover:bg-primary">log in</a> 
            </div>
          </div>
        </div>


      </div>
    );
  }
