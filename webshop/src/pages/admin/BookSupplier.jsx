import React, { useEffect, useState } from 'react'

function BookSupplier() {
    const [products, setProducts] = useState([]);

    // products.map is not a function
    // teen valelee tüübile .map funktsiooni
    // .map() funks saab teha vaid Array-dele []
    // 

    useEffect (() => {
     fetch("https://api.itbook.store/1.0/search/mongodb")
        .then(response => response.json())
        .then(json => setProducts(json.books))
    },[]);


  return (
    <div>
        {products.map(product => 
            <div key={product.id} >
            <img style={{width: "100px"}} src={product.image} alt=""></img>
            <div >{product.title.length > 20 ? product.title.substring(0,25) + "..." : product.title}</div>
            <div >{product.price.toFixed(2)} eur</div>
            </div>
        )} 
    </div>
  )
}

export default BookSupplier