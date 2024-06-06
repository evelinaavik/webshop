import React from 'react'
import { useParams } from 'react-router-dom'
import productsJSON from "../../data/products.json"

function SingleProduct() {
   const {index} = useParams();
   const valitudToode = productsJSON[index];

   if (valitudToode === undefined) {
    return <div>Not Found</div>
   }

  return (
    <div><br /><br />
      <div>Product: <br />
      <b>{valitudToode.title} </b></div>
      <hr></hr>
      <div>Product description: {valitudToode.description} </div>
      <div>Product category: {valitudToode.category} </div>
      <div>Product rate: {valitudToode.rate} </div>
      <div>Product price: {valitudToode.price} </div>   
      <div> <img src={valitudToode.image} alt="product"/></div>
      <br /><br /><br />
    </div>
  )
}

export default SingleProduct