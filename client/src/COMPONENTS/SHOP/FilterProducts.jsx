import React, { useState } from 'react';
import axios from 'axios';

function FilterProducts() {
  const [specie, setSpecie] = useState('');
  const [typeOrder, setTypeOrder] = useState('');
  const [sort, setSort] = useState('');
  const [products, setProducts] = useState([]);

  const handleSpecieChange = (event) => {
    setSpecie(event.target.value);
  };

  const handleTypeOrderChange = (event) => {
    setTypeOrder(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.get('/filteredProducts', {
      params: {
        specie: specie,
        typeOrder: typeOrder,
        sort: sort
      }
    })
    .then(response => {
      setProducts(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Especie:
          <select value={specie} onChange={handleSpecieChange}>
            <option value="">Seleccione una especie</option>
            <option value="cat">Gato</option>
            <option value="dog">Perro</option>
            <option value="parrot">Loro</option>
          </select>
        </label>
        <br />
        <label>
          Ordenar por:
          <select value={typeOrder} onChange={handleTypeOrderChange}>
            <option value="">Seleccione un criterio de ordenamiento</option>
            <option value="name">Nombre</option>
            <option value="price">Precio</option>
          </select>
        </label>
        <br />
        <label>
          Tipo de orden:
          <select value={sort} onChange={handleSortChange}>
            <option value="">Seleccione un tipo de orden</option>
            <option value="ASC">Ascendente</option>
            <option value="DESC">Descendente</option>
          </select>
        </label>
        <br />
        <button type="submit">Filtrar</button>
      </form>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} ({product.specie}) - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterProducts;



















