import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createSearchParams } from "react-router-dom";
import { getPets, getNamePets, setNamePets } from "../../Redux/actions.js";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const searchNamesResults = async (value) => {
    try {
      let response = await axios.get(
        `http://localhost:3001/pets/name?name=${value}`
      );
      if (response.data.length) {
        dispatch(getNamePets(response.data));
      } else {
        return;
      }
    } catch (error) {
      return window.alert(error.message);
    }
  };

  function handleInputChange(e) {
    setName(e.target.value);
    searchNamesResults(e.target.value);
   }
   
   function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  }

   useEffect(()=>{
    if(!name){
      dispatch(setNamePets())
      }
   },[dispatch,name,setNamePets])

  function handleSubmit() {
    try {
      if (!name) {
        return alert("You must enter a name");
      } else {
        const params = { name };
        dispatch(getPets(`?${createSearchParams(params)}`));
        setName("");
      }
    } catch (error) {
      return window.alert(error.message);
    }
  }

  return (
    <nav >
      <div className="rounded-full">
      <input      
        id="search"
        type="text"
        name="name"
        value={name}
        autocomplete="off"
        placeholder="  Type here..."
        onChange={(e) => handleInputChange(e)} onKeyDown={(e) => handleKeyDown(e)}
        className=" rounded-full"
        
      />
      <button className="btn btn-secondary btn-circle btn-xs" onClick={(e) => handleSubmit(e)}>🔎</button>

      </div>

    </nav>
  );
}

// console.log(value)
// fetch(`http://localhost:3001/pets/name?name=${value}`)
//   .then((response) => response.json())
//   .then((petsName) => {
//   console.log(petsName);

//   dispatch(getNamePets(petsName))
//   })
//   .catch(error =>{
//   return console.log(error);
//   })
