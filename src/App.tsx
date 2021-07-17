import React from 'react';
import './App.css';
import Cart from './products/Cart';
import ProductForm from './products/ProductForm';
import ProductList from './products/ProductList';

function App() {
  return (
    <div className="App">
      <h1>Cat Market</h1>
      <ProductList />
      <ProductForm />
      <Cart />
    </div>
  );
}

export default App;
