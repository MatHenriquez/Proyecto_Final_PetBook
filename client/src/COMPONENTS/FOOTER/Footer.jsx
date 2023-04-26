import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt} from "react-icons/fa";


export default function Footer() {
  return (

<footer className="footer items-center p-4 bg-primary text-neutral ">
  <div className="items-center grid-flow-col">
    <img src="patita1.png" alt="" width="36" height="36" />
    <p className="letter-footer">PETBOOK - Copyright © 2023 - All right reserved</p>
  </div> 
  <div className="grid-flow-col gap-4 place-self-center lg:justify-self-end">
   
    <a href="https://www.facebook.com"> <FaFacebookF  className="iconsfooter"/> </a> 

    <a href="https://www.instagram.com"> < FaInstagram  className="iconsfooter"/> </a>

    <a href="https://www.facebook.com"> < FaWhatsapp  className="iconsfooter"/> </a> 
    {/* la idea es q lleven al lugar correspondiente, per ono tenemos fb ni ig ni wpp de la ong creados */}
    
     {/* < FaPhoneAlt  className="iconsfooter" /> <a className="textColor mt-1">+54 9  11 4926596</a> */}

  </div>
</footer>

  );
}
