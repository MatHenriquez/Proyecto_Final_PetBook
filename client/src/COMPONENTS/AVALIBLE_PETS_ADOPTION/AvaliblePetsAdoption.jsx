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

  useEffect(() => {
    let query = window.localStorage.getItem("lastQuerys");
    let parseQuery = JSON.parse(query);
    
    if (!query) {
      dispatch(getPets());
      return;
    }
    if (parseQuery !== undefined) {
      dispatch(getPets(`?${createSearchParams(parseQuery)}`));
    }
    if (parseQuery === undefined) {
      return;
    }
  }, [dispatch]);

  useEffect(() => {
    return () => {
      let querys = state?.pets?.params;
      
      if (querys !== undefined) {
        window.localStorage.setItem("lastQuerys", JSON.stringify(querys));
      } else return;
    };
  }, [state.pets.params]);

  const onclickRefresh = () => {
    dispatch(getPets());
  };

  return (
    <div className="bg-[url('/backadopt.png')] bg-no-repeat w-full">
      
{/* HEADER */}
  <div>
      {localStorage.getItem('token') ? <HeaderLogin className='mb-4' /> : <Header className="mb-4" /> }    
  </div>

{/* FILTRADO Y SEARCH  */}

<div className="navbar border-black">
  <div className="">
    <FilterAndOrder />
    <button className="btn btn-xs mt-1" onClick={onclickRefresh}>Refresh</button>
  </div>


  <div className="ml-24">
  <SearchBar />
        <div className="">
        {state?.namePets?.length > 0 && <SearchResultsList />}
        {/* si se mueve esto a otro componente importar searchBar y searchResultList y ponerlo en este orden*/}
        </div>

  </div>
     
</div>

 <Cards pets={state?.pets?.data} />
      
 {/* PAGINADO */}
      <div>
        <Pagination />
      </div>

  {/* ADOPT AND SAVE A LIFE...  */}

      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1 '>
        <div className="flex items-center justify-end ">
          <p className="titleRight w-72 pr-6 "> Adopt today and change a life</p>
          <br />
          <p className="titleRight"> </p>
        </div>
        <div>
          <ul className="steps steps-vertical">
            <li className="step step-primary text text-neutral">Register</li>
            <li className="step step-primary text text-neutral">Find a friend you wish to take home</li>
            <li className="step text text-neutral">Go through our adoption requirements </li>
            <li className="step text text-neutral">Schedule a visit to the shelter</li>
            <li className="step text text-neutral">Meet your new furry friend and go home</li>
          </ul>
        </div>
 



      </div>



 {/* FOOTER */}
      
      <div> 
        <Footer /> 
      </div>
        
    </div>
  );
};

export default AvaliblePetsAdoption;
