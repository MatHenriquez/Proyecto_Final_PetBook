import React, { useState } from 'react';
import axios from 'axios';
import { createSearchParams } from "react-router-dom";
import { filterProducts, getAllProducts } from '../../Redux/actions';
import { useDispatch } from 'react-redux';
import { BsFilterLeft } from 'react-icons/bs';
import { BiRefresh } from "react-icons/bi"

function FilterProducts() {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([]);
  

const [querys, setQuerys] = useState()



const handlerSelect = (e) =>{
  if (e.target.value === "Default") return;
  
  setQuerys({...querys,[e.target.name]:e.target.value})
}

console.log(querys);
  const handleSubmit = (event) => {
    event.preventDefault();
    
    let searchQuerys = `?${createSearchParams(querys)}`
    
    
    dispatch(filterProducts(searchQuerys))

    // axios.get(`/filteredProducts${searchQuerys}`)
    // .then(response => {
    //   setProducts(response.data);
    // })
    // .catch(error => {
    //   console.error(error);
    // });
  };

  const handleClick = () =>{
    dispatch (getAllProducts())
  }
  return (

    <div> 
    {/* MENU FILTROS MOBILE */}
    
    <div >
              <div className="navbar lg:hidden">
    
                <div className="navbar-start dropdown">
                  <ul className="menu menu-horizontal px-1 ">
    
                    <li tabIndex={0}>
                      <a>                   
                        < BsFilterLeft />
                      </a>
                        <ul className="menu dropdown-content p-2 bg-base-100 w-56 rounded-box text group-hover:bg-primary">
                        <li><select className="m-2" name="specie" onChange={(e) => handleClick(e)}>
                        <option className='text' value="Default">specie</option>
                              <option className='text' value="Cat">Cat</option>
                              <option className='text' value="Dog">Dog</option>
                              <option className='text' value="Rabbit">Rabbit</option>
                              <option className='text' value="Guinea Pig">Guinea Pig</option>
                              <option className='text' value="Parrot">Parrot</option>
                        </select></li>

                            <li>
                            <select className="m-2 text" onChange={(e) => handleClick(e)} name="typeOrder">
                              <option  className='text'value="Default">sort by</option>
                              <option className='text' value="price">Precio</option>
                            </select>
                            </li>
    
                          <li>
                          <select className="m-2 text" onChange={(e) => handleClick(e)} name="sort">
                                  <option className='text' value="Default">asc -desc</option>
                                  <option className='text'value="ASC">ASC</option>
                                  <option className='text' value="DESC">DESC</option>
                                </select>
                          </li>
    
                        </ul>
                    </li>
                  </ul>
                </div>
                <div>
                <button
            className="btn btn-primary btn-xs h-max-1 h-min-1"
            onClick={handleSubmit}
          >
            Filter
          </button>

          <button
            className="btn btn-primary btn-xs h-max-1 h-min-1"
            onClick={handleClick}
          >
            <BiRefresh />
          </button>
                </div>
              </div>
            </div>

    {/* FILTROS NORMALES */}
    <div className= "hidden lg:navbar m-2">
          <select className="m-2 text" name='specie' onChange={(e)=>handlerSelect(e)}>
          <option className='text' value="Default">specie</option>
          <option className='text' value="Cat">Cat</option>
        <option className='text' value="Dog">Dog</option>
        <option className='text'value="Rabbit">Rabbit</option>
        <option className='text'value="Guinea Pig">Guinea Pig</option>
        <option className='text'value="Parrot">Parrot</option>
      </select>
       
          <select className="m-2 text" name='price' onChange={(e)=>handlerSelect(e)}>
          <option className='text' value="Default">sort by</option>
           <option className='text'value="price">Precio</option>
          </select>
        
          
          <select className="m-2 text" name='sortCriterion' onChange={(e)=>handlerSelect(e)}>
          <option className='text'value="Default">asc -desc</option>
        <option className='text'value="ASC">ASC</option>
        <option className='text'value="DESC">DESC</option>
      </select>
       

        <button 
        className="btn btn-primary btn-xs h-max-1 h-min-1"
        onClick={handleSubmit}> Filter & Order</button>
      {/* </form> */}

      <button 
        className="btn btn-xs"
        onClick={handleClick}> 
        <BiRefresh />
        </button>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} ({product.specie}) - ${product.price}</li>
        ))}
      </ul>
    </div>
    </div>
  
  );
}

export default FilterProducts;



















