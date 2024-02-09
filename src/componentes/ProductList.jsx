import React, { useState, useEffect } from "react";
import SortedProductList from "./SortedProductList";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [showSorted, setShowSorted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const toggleSortedView = () => {
    setShowSorted(!showSorted);
  };

  return (
    <div>
      <h1>Lista de Productos</h1>
      <button onClick={toggleSortedView}>
        {showSorted ? 'Ver Lista No Ordenada' : 'Ver Lista Ordenada por Valoración'}
      </button>
      {showSorted ? null : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
      {showSorted ? (
        <SortedProductList />
      ) : null}
    </div>
  );
}

export default ProductList;
