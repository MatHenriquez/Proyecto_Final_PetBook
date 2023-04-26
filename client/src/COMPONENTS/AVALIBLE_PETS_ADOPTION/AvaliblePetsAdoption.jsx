import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPets } from "../../Redux/actions";
import Cards from "../CARDS/Cards";
import Header from "../HEADER/Header";
import HeaderLogin from "../HEADER/HeaderLogin";
import Footer from "../FOOTER/Footer";
import styles from "../CARD/Card.module.css";
import SearchBar from "../SEARCH/SearchBar";
import Pagination from "../PAGINATION/Pagination";
import FilterAndOrder from "../FILTER_AND_ORDER/FilterAndOrder";
import SearchResultsList from "../SEARCH/SearchResultList";
import { createSearchParams } from "react-router-dom";



const AvaliblePetsAdoption = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const onclickRefresh = () => {
    dispatch(getPets());
  };

  return (
    <div className="w-screen">
    <div className="bg-[url('/backadopt.png')] bg-no-repeat w-screen">
      {/* HEADER */}
      <div>
        {localStorage.getItem("token") ? (
          <HeaderLogin className="mb-4" />
        ) : (
          <Header className="mb-4" />
        )}
      </div>

      {/* FILTRADO Y SEARCH  */}

      <div className="navbar border-black">
        <div className="">
          <FilterAndOrder />
          <button className="btn btn-xs mx-6" onClick={onclickRefresh}>
            Refresh
          </button>
        </div>

        <div className="hidden sm:block sm:ml-10">
          <SearchBar />
          <div className="">
            {state?.namePets?.length > 0 && <SearchResultsList />}
            {/* si se mueve esto a otro componente importar searchBar y searchResultList y ponerlo en este orden*/}
          </div>
        </div>
        


      </div>
      <div className="sm:hidden">
          <SearchBar />
          <div className="">
            {state?.namePets?.length > 0 && <SearchResultsList />}
            {/* si se mueve esto a otro componente importar searchBar y searchResultList y ponerlo en este orden*/}
          </div>
        </div>
      

<div className="flex justify-center">
<Cards pets={state?.pets?.data} />
</div>
      

      {/* PAGINADO */}
      <div>
        <Pagination />
      </div>

      {/* ADOPT AND SAVE A LIFE...  */}

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1 ">
        <div className="flex items-center justify-end ">
          <p className="titleRight w-72 pr-6 ">
            {" "}
            Adopt today and change a life
          </p>
          <br />
          <p className="titleRight"> </p>
        </div>
        <div>
          <ul className="steps steps-vertical">
            <li className="step step-primary text text-neutral">Register</li>
            <li className="step step-primary text text-neutral">
              Find a friend you wish to take home
            </li>
            <li className="step text text-neutral">
              Go through our adoption requirements{" "}
            </li>
            <li className="step text text-neutral">
              Schedule a visit to the shelter
            </li>
            <li className="step text text-neutral">
              Meet your new furry friend and go home
            </li>
          </ul>
        </div>
      </div>

      {/* FOOTER */}

      <div>
        <Footer />
      </div>
    </div>
    </div>
  );
};

export default AvaliblePetsAdoption;
