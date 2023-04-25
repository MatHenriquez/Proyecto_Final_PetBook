import React from "react";
import {Link} from 'react-router-dom'

  export default function Header() {
    const Menu = e => {
      const menu = document.querySelector(".mobile-links");
      menu.classList.toggle("hidden");
    };

    console.log('usersinentrar ' + localStorage.getItem('token')); 

    return (
      <div className=" contain mx-auto">
    
        <div className="navbar">
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
    );
  }










//   import React, { useState, useEffect } from "react";
// import {Link} from 'react-router-dom'

// export default function Header() {
//   const [scroll, setScroll] = useState(false);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleScroll = () => {
//     if (window.pageYOffset > 0) {
//       setScroll(true);
//     } else {
//       setScroll(false);
//     }
//   };

//   return (
//     <div className=" contain mx-auto">
//       <div className={`navbar ${scroll ? 'bg-primary' : ''} fixed transition-all duration-500`}>
//         <div className="flex-1">
//           <Link to='/home'>
//             <img src="/logo.png" alt="" width='200rem'/>
//           </Link>
//         </div>

//         <div className="flex-none gap-2">

//           <a href="/home" className="textoheader hover:bg-primary">home</a>
//           <a href="/about" className="textoheader hover:bg-primary">about</a>
//           <a href="/donate" className="textoheader hover:bg-primary">donate</a>
//           <a href="/store" className="textoheader hover:bg-primary">store</a>
//           <a href="/AvaliblePetsAdoption" className="textoheader hover:bg-primary">adopt</a>
//           <a href="/FormContact" className="textoheader hover:bg-primary">contact us</a>
//           <a href= "/login" className="textoheader hover:bg-primary">log in</a> 

//         </div>


//       </div>
//     </div>
//   );
// }
