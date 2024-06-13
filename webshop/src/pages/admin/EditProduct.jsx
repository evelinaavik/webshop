import React from 'react'
import {useRef, useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
// import productsJSON from "../../data/products.json"

function EditProduct() {
  const {id}   = useParams();  // edit/:id 
  const [products, setProducts] = useState([]);
  const found = products.find(product => product.id === Number(id));
  const navigate = useNavigate();
  const titleRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const idRef = useRef();
  const [categories, setCategories] = useState([]);
  const url = "https://webshop-9bfa5-default-rtdb.europe-west1.firebasedatabase.app/categories.json"
  const urlProducts = "https://webshop-9bfa5-default-rtdb.europe-west1.firebasedatabase.app/products.json"
  const [message, changeMessage] = useState("");
 
   useEffect(() => {
     fetch(urlProducts)
     .then(res => res.json())
     .then(json => setProducts(json || []));
   }, []);
  

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(json => setCategories(json || []));
  }, []);


  function edit() {
    const index = products.indexOf(found);
    // const index = productsJSON.findIndex(product => product.id === Number(id));

    const foundProduct = products.find(product => product.id === Number(idRef.current.value)); 
      // sisestatud id ei võrdu URLi ID     JA    leiti  mingi  toode
      if (idRef.current.value !== id && foundProduct !== undefined) {               
         changeMessage("inserted ID already exists on another product"); 
         return;
        } 
      
       if (idRef.current.value === "") {
        changeMessage("Add product ID!")
        return;
       } 

       if (titleRef.current.value === "") {
        changeMessage("Add product title")
        return;
       } 

    const newProduct = {
      title: titleRef.current.value,
      price: Number(priceRef.current.value),
      id: Number(idRef.current.value),
      image: imageRef.current.value,
      category: categoryRef.current.value,
      description: descriptionRef.current.value,
      rating: {
        rate: found.rating.rate,
        count: found.rating.count                          // et ta võtaks olemasolevad andmed, seega 0-de asemel found.rating...
      }
    };

    products[index] = newProduct;
    fetch(urlProducts, {"method": "PUT", "body": JSON.stringify(products)})
    // fetch puhul navigate toimub enne ehk kood saab minna enne kui fetch ära laeb, see on fetchi erandlik omadus
      .then (() => navigate("/admin/maintain-products/"));    // muidu navigeerib ära ja saab uuendamata andmed
    }                                    

    if (found === undefined) {
      return <div>Product not found</div>
  }

  return (
    <div>
    <div>{message}</div>  
      <label>Title</label><br />
      <input type="text"  ref={titleRef} defaultValue={found.title}/> <br />
      <label>Price</label><br />
      <input type="number"  ref={priceRef} defaultValue={found.price}/> <br />
      <label>Id</label><br />
      <input type="number"  ref={idRef} defaultValue={found.id}/> <br />

      <label>Category</label><br />
      {/* <input type="text"  ref={categoryRef} defaultValue={found.category}/> <br /> */}

      <select ref={categoryRef} defaultValue={found.category}>
         {categories.map(category => <option key={category.name}>{category.name}</option>)}
       </select><br />

      <label>Description</label><br />
      <input type="text"  ref={descriptionRef} defaultValue={found.description}/> <br /> 
      <label>Image</label><br />
      <input type="text"  ref={imageRef} defaultValue={found.image}/> <br />
      <button onClick={edit}>Confirm</button> <br />
   
    </div>
  )
}

export default EditProduct