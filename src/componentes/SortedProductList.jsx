import React, { useEffect, useState } from "react";

const SortedProductList = () => {
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        // Ordena los productos por valoración de forma descendente
        const sortedData = data.sort((a, b) => b.rating - a.rating);

        setSortedProducts(sortedData);
      } catch (error) {
        console.error('Error al obtener los datos: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de Productos Ordenada por Valoración</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {sortedProducts.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <h3>{product.title}</h3>
            <p>{`Valoración: ${product.rating}`}</p>
            <p>{`Precio: $${product.price}`}</p>
            <img src={product.image} alt={product.title} style={{ maxWidth: '100%' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortedProductList;
