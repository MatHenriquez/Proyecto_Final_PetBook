import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPets } from "../../Redux/actions";
import { createSearchParams } from "react-router-dom";



const Pagination = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handlerPrev = () => {
    if (state.pets.prevPage === null) return;
    let p = state.pets.params;
    p.page = state.pets.prevPage;
   dispatch(getPets(`?${createSearchParams(p)}`));
  };

  const handlerNext = () => {
    if (state.pets.nextPage === null) return;
    
    let p = state.pets.params;
    p.page = state?.pets?.nextPage;
    dispatch(getPets(`?${createSearchParams(p)}`));
   
  };
  
  const handlerStart = () =>{
    if (state.pets.prevPage === null) return;
    let p = state.pets.params;
    p.page = 0;
    dispatch(getPets(`?${createSearchParams(p)}`));
  }
  
  const handlerEnd = () =>{
    if (state.pets.nextPage === null) return;
    let p = state.pets.params;
    p.page = Math.ceil(state.pets.count / state.pets.pageSize -1);
    dispatch(getPets(`?${createSearchParams(p)}`));
  }
  

  return (
    <div>
     
      <div className="flex items-center justify-center">
        <div className="btn-group">
          <div
              onClick={handlerStart}
              className="btn btn-ghost text-neutral text-2xl"
            >
              «
          </div>
          <div
            onClick={handlerPrev}
            className="btn btn-ghost text-neutral text-2xl"
          >
            ‹
          </div>
          <div className="btn btn-ghost text-neutral text-l mt-[0.18rem]">
            {state?.pets?.currentPage} / {state.pets.totalPage}
          </div>
          <div
            onClick={() => handlerNext()}
            className="btn btn-ghost text-neutral text-2xl"
          >
            ›
          </div>
          <div
            onClick={handlerEnd}
            className="btn btn-ghost text-neutral text-2xl"
         
          >
            »
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;


