import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import productsJSON from "../../data/products.json"

function SingleProduct() {
   const {id} = useParams();
   const [products, setProducts] = useState([]); 
   const foundProduct = products.find(product => product.id === Number(id)); 
   const urlProducts = "https://webshop-9bfa5-default-rtdb.europe-west1.firebasedatabase.app/products.json"
 
   useEffect(() => {
     fetch(urlProducts)
     .then(res => res.json())
     .then(json => setProducts(json || []));
   }, []);

   if (foundProduct === undefined) {
    return <div>Not Found</div>
   }

  return (
    <div><br /><br />
      <div>Product: <br />
      <b>{foundProduct.title} </b></div>
      <hr></hr>
      <div>Product description: {foundProduct.description} </div>
      <div>Product category: {foundProduct.category} </div>
      <div>Product rate: {foundProduct.rating.rate} </div>
      <div>Product price: {foundProduct.price} </div>   
      <div> <img src={foundProduct.image} alt="product"/></div>
      <br /><br /><br />
    </div>
  )
}

export default SingleProduct