import React from "react";
import './App.css'; 

import ProductList from "./componentes/ProductList";
import SortedProductList from "./componentes/SortedProductList";

function App() {
  return (
    <div className="App">
      <ProductList />
      <SortedProductList /> 
    </div>
  );
}

export default App;
