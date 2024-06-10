import React from 'react'
import { useParams } from 'react-router-dom'
import productsJSON from "../../data/products.json"

function SingleProduct() {
   const {id} = useParams();
          // productJSON[index]                     ÜKSHAAVAL     URLis
   const foundProduct = productsJSON.find(product => product.id === Number(id)); 
                                                         // convert: stringist number
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