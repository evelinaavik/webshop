import React, { useEffect, useState } from 'react'

function Supplier() {
    const [products, setProducts] = useState([]);

    useEffect (() => {
     fetch(" https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(json => setProducts(json))
    },[]);


  return (
    <div>
        {products.map(product => 
            <div key={product.id} >
            <img src={product.image} alt=""></img>
            <div >{product.title.length > 20 ? product.title.substring(0,25) + "..." : product.title}</div>
            <div >{product.price.toFixed(2)} eur</div>
            </div>
        )} 
    </div>
  )
}

export default Supplier