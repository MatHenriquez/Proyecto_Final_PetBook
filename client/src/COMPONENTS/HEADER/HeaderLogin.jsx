import React from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function HeaderLogin() {
  const Menu = (e) => {
    const menu = document.querySelector(".mobile-links");
    menu.classList.toggle("hidden");
  };

  const [admin, setAdmin] = useState("");

  useEffect(() => {
    let adminRoll = window.localStorage.getItem("Admin");
   
    setAdmin(JSON.parse(adminRoll));
  }, [admin,window.localStorage.getItem("Admin")]);
  

  // console.log("userlogueado " + localStorage.getItem("token"));

  const userLogout = () => {
    localStorage.clear();
    window.location.reload();
    console.log(localStorage.getItem("token"));
    if (admin === true) {
      window.localStorage.setItem("Admin", JSON.stringify(false));
    }
  };

  return (
    <div>
      {/*  HEADER MOBILE  */}
      <div>
        <div className="navbar lg:hidden">
          <div className="navbar-start dropdown">
            <ul className="menu menu-horizontal px-1 ">
              <li tabIndex={0}>
                <a>
                  <FiMenu />
                </a>
                <ul className="menu dropdown-content p-2 bg-primary w-56 rounded-box text group-hover:bg-primary">
                  <li>
                    <a href="/home">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/donate">Donate</a>
                  </li>
                  <li>
                    <a href="/AvaliblePetsAdoption">Adopt</a>
                  </li>
                  <li>
                    <a href="/store">Store</a>
                  </li>
                  <li>
                    <a href="/FormContact">Contact us</a>
                  </li>
                  <li>
                    <a href="/FormHistory">Create your story</a>
                  </li>
                  <li tabIndex={0} className="menu dropdown-bottom">
                    <a className="justify-between">
                      My Account
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                      </svg>
                    </a>
                    <ul className="p-2">
                      <li>
                        <a>Profile</a>
                      </li>
                      <li>
                        <button onClick={() => userLogout()}>Logout</button>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <img src="/logo.png" alt="" width="200rem" />
          </div>
        </div>
      </div>

      {/* HEADER NORMAL LOGUEADO  */}

      <div className=" contain mx-auto bg-transparent">
        <div className=" hidden lg:navbar">
          <div className="flex-1">
            <Link to="/home">
              <img src="/logo.png" alt="" width="200rem" />
            </Link>
          </div>

          <div className="flex-none gap-2">
            <a href="/home" className="textoheader">
              home
            </a>
            <a href="/about" className="textoheader">
              about
            </a>
            <a href="/donate" className="textoheader">
              donate
            </a>
            <a href="/store" className="textoheader">
              store
            </a>
            <a href="/AvaliblePetsAdoption" className="textoheader">
              adopt
            </a>
            <a href="/FormHistory" className="textoheader">
              create your story
            </a>
            <a href="/FormContact" className="textoheader">
              {" "}
              contact us
            </a>

            {/*                USUARIO LOGUEADO               */}

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/perritoabout.png" />
                  {/* ACA REEMPLAZAR POR LA IMAGEN DE PERFIL DE USUARIO, O AVATAR */}
                </div>
              </label>

              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                {/* <li><a>Settings <span className="badge">New</span> </a></li> */}
                <li>
                  <button onClick={() => userLogout()}>Logout</button>
                </li>

                {admin === true ? <a href="/admin">admin</a> : ""}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
