import React, {useRef, useState} from 'react'
import productsJSON from "../../data/products.json"

function AddProduct() {
   const [message, changeMessage] = useState("Add new product");
   const idRef = useRef();
   const titleRef = useRef();
   const priceRef = useRef();
   const imageRef = useRef()
   const categoryRef = useRef();

   const add = () => {
      if (titleRef.current.value === " ") {
         changeMessage("Add product id");
        } else {
          const newProduct = {
            title: titleRef.current.value,
            id: idRef.current.value,
            price: priceRef.current.value,
            image: imageRef.current.value,
            category: categoryRef.current.value
        }
        productsJSON.push(newProduct)
        changeMessage("Product " + titleRef.current.value + "added !");
      }
    }
  
  return (
    <div>
        <div>{message}</div>
       <label>Product title</label><br/>
       <label>Product id</label><br/>
       <input ref={idRef} type="text" /> <br />      .
       <label>Product price</label><br/>
       <input ref={priceRef} type="text" /> <br />        
       <label>Product category</label><br/>
       <input ref={categoryRef} type="text" /> <br />   
       <label>Product image</label><br/>
       <input ref={imageRef} type="file" /> <br />      
       <button onClick={add}>Add</button>
    </div>
  )
}

export default AddProduct