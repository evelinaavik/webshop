import React from 'react'
import productsJSON from "../../data/products.json"
import cartJSON from "../../data/cart.json"
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function HomePage() {
  const [products, setProducts] = useState (productsJSON.slice());

  const reset = () => {
    setProducts(productsJSON.slice())
  }

  const sortAZ = ()  => { 
    products.sort((a, b) => a.title.localeCompare(b.title));
    setProducts(products.slice());
  } 

  const toCart = (product) => {
    cartJSON.push(product);

    toast.success("Toode on lisatud ostukorvi!", {
      position: "bottom-right"
    });
  }



  return (
    <div>
      <br /><br />
      <div><b>Tooted</b></div>
      <button onClick={reset}>Tooted reset</button>
      <button onClick={sortAZ}>Tooded A-Z</button>
      {products.map(product => 
        <div key={product.id}>
          <img style={{width: "100px"}} src={product.imgage} alt=""></img>
          <div>{product.title}</div>
          <div>{product.price}</div>
          <button onClick={() => toCart(product)}>Add to cart</button>
          
          <ToastContainer 
        position="bottom-right"
        autoClose={4000}    // sekundid
        theme="dark"
       /> 
        </div>
        
      )} 
    </div>
  )
}

export default HomePage