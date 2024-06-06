import React from 'react'
import {useRef} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import productsJSON from "../../data/products.json"


function EditProduct() {
  const {index}   = useParams();
  const found = productsJSON[index];
  const navigate = useNavigate();
  const titleRef = useRef();
  const priceRef = useRef();

  function edit() {
    const newProduct = {
      "title": titleRef.current.value,
      "price": priceRef.current.value,
    };

    productsJSON[index] = newProduct;
    navigate("/manage-products/");
    }
    if (found === undefined) {
      return <div>Product not found</div>
  }

  return (
    <div>
      <label>Title</label><br />
      <input type="text"  ref={titleRef} defaultValue={found.title}/> <br />
      <label>Hind</label><br />
      <input type="text"  ref={priceRef} defaultValue={found.price}/> <br />
      <label>Aktiivne</label><br />


      <button onClick={edit}>Edit/button</button> <br />


    </div>
  )
}

export default EditProduct