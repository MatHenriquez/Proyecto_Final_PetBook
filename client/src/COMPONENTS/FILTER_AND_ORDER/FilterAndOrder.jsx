import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPets } from "../../Redux/actions";
import { createSearchParams } from "react-router-dom";

const FilterAndOrder = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState();

  const handleClick = (e) => {
  if(e.target.value === "Default") return 
  
    setChecked({ ...checked, [e.target.name]: e.target.value });
  
    
    
    
  };

const handlerFilter = ()=>{
    dispatch(getPets(`?${createSearchParams(checked)}`))
    
}

  return (
    <div className="m-2">

      <select className="m-2" name="specie" onChange={(e) => handleClick(e)}>
      <option value="Default">specie</option>
     <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
        <option value="Rabbit">Rabbit</option>
        <option value="Guinea Pig">Guinea Pig</option>
        <option value="Parrot">Parrot</option>
      </select>


      <select className="m-2" onChange={(e) => handleClick(e)} name="gender">
      <option className="text" value="Default">gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <select className="m-2" onChange={(e) => handleClick(e)} name="size">
      <option value="Default">size</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>

  
      <select className="m-2" onChange={(e) => handleClick(e)} name="typeOrder">
      <option value="Default">sort by</option>
        <option value="name">name</option>
        <option value="age">age</option>
        <option value="weight">weight</option>
      </select>
  
      <select className="m-2" onChange={(e) => handleClick(e)} name="sort">
      <option value="Default">asc -desc</option>
        <option value="ASC">ASC</option>
        <option value="DESC">DESC</option>
      </select>
      
      <button className="btn btn-primary btn-xs h-max-1 h-min-1" onClick={handlerFilter}>Filter & Order</button>
    </div>
  );
};

export default FilterAndOrder;
// name, specie, gender, size, weight, age, godFather, sort, typeOrder
