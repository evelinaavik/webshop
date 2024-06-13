import React, { useState, useEffect } from 'react';
// import productsJSON from "../../data/products.json"
import {Link} from 'react-router-dom'


function MaintainProducts() {
  const [products, changeProducts] = useState([]);
  const url = "https://webshop-9bfa5-default-rtdb.europe-west1.firebasedatabase.app/products.json"

  
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(json => changeProducts(json || []));
  }, []);

  const sortAZ = ()  => { 
    products.sort();
    changeProducts(products.slice());
  } 
  
    const deleteProduct = (index) => {
    products.splice(index, 1);
    fetch(url, {"method": "PUT", "body": JSON.stringify(products)});
    changeProducts(products.slice());
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