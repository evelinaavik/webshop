import React, { useState } from 'react';
import productsJSON from "../../data/products.json"
import {Link} from 'react-router-dom'


function MaintainProducts() {
  const [products, changeProducts] = useState(productsJSON.slice());

  const sortAZ = ()  => { 
    products.sort();
    changeProducts(products.slice());
  } 
  
    const deleteProduct = (index) => {
    productsJSON.splice(index, 1);
    changeProducts(productsJSON.slice());
  }

  return (
    <div>    
      <button onClick={sortAZ}>Sort by title</button><br /><br />
      {products.map((product, index) => 
      <div key={product.id}>
          <img src={product.image} alt="" className="productImg" />
          <div>{product.title}</div> 
          <div>{product.price}</div> 
          <button onClick={() => deleteProduct(index)}>x</button> 
      <Link to={"/admin/edit-product/" + product.id}><button>Edit product info</button></Link>
      </div>)}
    </div>
  )
}

export default MaintainProducts