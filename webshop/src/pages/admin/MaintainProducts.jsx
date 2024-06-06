import React, { useRef, useState } from 'react';
import productsJSON from "../../data/products.json"
// import {Link} from 'react-router-dom'


function MainstainProducts() {
  const [products, changeProducts] = useState(productsJSON.slice());
  const productsRef = useRef();

  function deleteProduct (product) {
    productsJSON.splice(product, 1);
    changeProducts(productsJSON.slice());
  }

  function duplicate(product) {
    productsJSON.push(product);
    changeProducts(productsJSON.slice())
  }

  function addOwnProduct() {
    productsJSON.push(productsRef.current.value);
    changeProducts(productsJSON.slice());
  }

  const sortAZ = ()  => { 
    products.sort();
    changeProducts(products.slice());
  } 

  return (
    <div>

<label> Add product</label>
      <input type="text" ref={productsRef} />
      <button onClick={addOwnProduct}>Add</button><br /><br />

    {products.map((product, index) => 
    <div key={index}>
        <img src={product.image} alt=""/>
        <div>{product.name}</div> 
        <div>{product.price}</div> 
    <button onClick={() => deleteProduct(index)}>x</button>
    <button onClick={() => duplicate(product)}>Add product</button>
    {/* <Link to={"/edit-product/:index" + index}><button>Change</button></Link> */}
    </div>)}
<br /><br />
       <button onClick={sortAZ}>Sort by title</button>
    </div>
  )
}

export default MainstainProducts