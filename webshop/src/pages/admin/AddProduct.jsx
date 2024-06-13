import React, {useEffect, useRef, useState} from 'react'
// import productsJSON from "../../data/products.json"

function AddProduct() {
   const [message, changeMessage] = useState("Add new product");
   const idRef = useRef();
   const titleRef = useRef();
   const priceRef = useRef();
   const imageRef = useRef()
   const categoryRef = useRef();
   const descriptionRef = useRef();
   const urlCategories = "https://webshop-9bfa5-default-rtdb.europe-west1.firebasedatabase.app/categories.json"
   const [categories, setCategories] = useState([]);
   const [products, setProducts] = useState([]);
   const urlProducts = "https://webshop-9bfa5-default-rtdb.europe-west1.firebasedatabase.app/products.json"
 
   useEffect(() => {
     fetch(urlProducts)
     .then(res => res.json())
     .then(json => setProducts(json || []));
   }, []);
  
   useEffect(() => {
     fetch(urlCategories)
     .then(res => res.json())
     .then(json => setCategories(json || []));
   }, []);

   const add = () => {
    const found = products.find(product => product.id === Number(idRef.current.value));       // nr ja sõna võrdlus, current value  alati sõna

      if (found !== undefined) {
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
            id: Number(idRef.current.value),
            price: Number(priceRef.current.value),
            image: imageRef.current.value,
            category: categoryRef.current.value,
            description: descriptionRef.current.value,
            "rating": {
              "rate": 0,
              "count": 0
            } 
        }
        products.push(newProduct);
        fetch(urlProducts, {"method": "PUT", "body": JSON.stringify(products)});   // andmebaasi tagasi saatmine
        changeMessage("Product " + titleRef.current.value + "added !");
      }
    
  return (
    <div>
        <div>{message}</div>
       <label>Product title</label><br/>
       <input ref={titleRef} type="text" /> <br /> 
       <label>Product id</label><br/>
       <input ref={idRef} type="number" /> <br />      

       <label>Product price</label><br/>
       <input ref={priceRef} type="number" /> <br />        
       <label>Product category</label><br/>
       {/* <input ref={categoryRef} type="text" /> <br />   */}

       <select ref={categoryRef}>
        {categories.map(category => <option key={category.name}>{category.name}</option>)}
       </select><br />

       <label>Product description</label><br/>
       <input ref={descriptionRef} type="text" /> <br />   
       <label>Product image</label><br/>
       <input ref={imageRef} type="text" /> <br />   
       <button onClick={add}>Add</button>
    </div>
  )
}

export default AddProduct


// kodus EditCategories