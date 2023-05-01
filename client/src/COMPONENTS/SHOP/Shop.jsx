import React, { useEffect, useState } from 'react';
import Header from "../HEADER/Header";
import HeaderLogin from "../HEADER/HeaderLogin";
import Footer from "../FOOTER/Footer";
import { getAllProducts } from '../../Redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import FilterProducts from './FilterProducts';


export default function Shop() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const products = useSelector(state => state.products.products);
 


  

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  //Paginado
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = Array.isArray(products) && products.slice(indexOfFirstProduct, indexOfLastProduct);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(Array.isArray(products) && products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (event) => {
    setCurrentPage(Number(event.target.id));
  }

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  }

  const goToPrevPage = () => {
    setCurrentPage(currentPage - 1);
  }

  const renderPageNumbers = pageNumbers.map(number => {
    if (number === currentPage) {
      return (
        <div
          key={number}
          id={number}
          onClick={handlePageClick}
          className="btn btn-primary text-white text-lg font-bold mt-[0.18rem]">
          {number}
        </div>
      )
    } else if (number > currentPage - 1 && number < currentPage + 1) {
      return (
        <div
          key={number}
          id={number}
          onClick={handlePageClick}
          className="btn btn-ghost text-neutral text-lg font-bold mt-[0.18rem]">
          {number}
        </div>
      )
    } else {
      return null;
    }
  })

  return (
    <div>
      <div className="bg-[url('/backdonations1.png')] bg-no-repeat w-[100hv] h-[100hv]">
        <div>
          {localStorage.getItem('token') ? <HeaderLogin className='mb-4' /> : <Header className="mb-4" />}
        </div>
        <div>
          <FilterProducts />
        </div>


      

        <div className="h-full w-screen">
          <h1 className="titleLeft">SHOP ONLINE</h1>
          <div className="container mx-auto">
            <div className="grid grid-cols-4 gap-4">
              {Array.isArray(currentProducts) && currentProducts.map((product) => (
                <div key={product.id} className="border p-4 mb-6">
                  <img src={product.image} alt={product.name} className="mb-2 h-48" />
                  <h3 className="text text-xl font-bold">{product.name}</h3>
                  <p className='text italic'>{product.description}</p>
                  <p className="text font-bold mt-2">${Math.ceil(product.price)}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center">
             <div className="btn-group">
             <button onClick={goToPrevPage} disabled={currentPage === 1} className="btn btn-ghost text-neutral text-2xl">
               «
           </button>
          {pageNumbers.map((number) => (
           <button
            key={number}
           id={number}
           onClick={handlePageClick}
          className={`btn btn-ghost text-neutral text-l mt-[0.18rem] ${currentPage === number ? 'bg-neutral text-white' : ''}`}
            >
        {number}
      </button>
    ))}
    <button onClick={goToNextPage} disabled={currentPage === pageNumbers.length} className="btn btn-ghost text-neutral text-2xl">
      »
    </button>
  </div>
</div>
</div>


      <div>
        <Footer />
      </div>
   </div>
</div>
</div>
)}


