import React, { useEffect } from 'react'
// import productsJSON from "../../data/products.json"
// import cartJSON from "../../data/cart.json"
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {Button} from '@mui/material';
import Button1 from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import OffCanvas from '../../components/OffCanvas';
import CarouselProducts from '../../components/CarouselProducts';
// import "../../css/HomePage.css";  // sellisena rakendub tervele rakendusele 
import styles from "../../css/HomePage.module.css";
// from "../" --> läheb kausta võtta ülespoole
// from "react" --> võtab node_module-st React kaustast

function HomePage() {
  const [products, setProducts] = useState ([]);    // muutuv seisund HTMLis
  const [dbproducts, setDbProducts] = useState ([]);    // andmebaasi seis -> ei muuda, et saaks reseti teha
                                                        //  setDbProducts rohkem ei tee kui andmebaasist võttes
  const url = "https://webshop-9bfa5-default-rtdb.europe-west1.firebasedatabase.app/categories.json"
  const [categories, setCategories] = useState([]);
  const urlProducts = "https://webshop-9bfa5-default-rtdb.europe-west1.firebasedatabase.app/products.json"

  useEffect(() => {
    fetch(urlProducts)
    .then(res => res.json())
    .then(json => {
      setProducts(json || []);        // HTMLi
      setDbProducts(json || []);     // täpne ab seis
      
    });
  }, []);
  
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(json => setCategories(json || []));
  }, []);


  const reset = () => {
    setProducts(dbproducts.slice())
  }

  const sortAZ = ()  => { 
    products.sort((a, b) => a.title.localeCompare(b.title));
    setProducts(products.slice());
  } 

  const sortFromLow= ()  => { 
    products.sort((a, b) => (a.price - b.price));
    setProducts(products.slice());
  } 
  const sortFromHigh= ()  => { 
    products.sort((a, b) => (b.price - a.price));
    setProducts(products.slice());
  } 

  const filterByCategory = (categoryClicked) => {
      const result = dbproducts.filter(product => product.category === categoryClicked);
      setProducts(result);
  }

//   const filterMensClothing = () => {
//      const result = productsJSON.filter(product => product.category === "men's clothing");
//      setProducts(result);
//   }

//   const filterWomensClothing = () => {
//     const result = productsJSON.filter(product => product.category === "women's clothing");
//     setProducts(result);
//   }
  
//  const filterElectronics = () => {
//   const result = productsJSON.filter(product => product.category === "electronics");
//   setProducts(result); 
// }

// const filterJewelery = () => {
//   const result = productsJSON.filter(product => product.category === "jewelery");
//   setProducts(result);
// }

  const toCart = (product) => {
    // cartJSON.push(product);
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];   // JSON.parse nö "" mahavõtmine
    
    const found = cartLS.find(cp => cp.toode.id === product.id);    // cart product
    if (found === undefined) {
      cartLS.push({kogus: 1, toode: product});
    } else {
       found.kogus = found.kogus + 1;
    }

    // cartLS.push(product);
    localStorage.setItem("cart", JSON.stringify(cartLS));   

    // ostukorvi lisamine localStoragesse
    // localStorage-sse ARRAY/LIST/MASSIIV panekul on vaja viite sammu:
  // 1. võtta localStorage-st (localStorage.getItem("VÕTI"))
  // 2. võtta jutumärgid maha (JSON.parse())
  // 3. lisada üks juurde (.push())
  // 4. panna jutumärgid tagasi (JSON.stringify())
  // 5. panna localStorage-sse tagasi (localStorage.setItem("VÕTI", "UUS"))

    toast.info("Toode on lisatud ostukorvi!", {
      position: "bottom-right"
    });
  }

  return (
   <div>
      <CarouselProducts/><hr /> <br />
    <div className="tooted">
     
      <div><b>OUR PRODUCTS:</b></div><br />
     
      <OffCanvas/> <br /><br />
 
       {/* <Button onClick={() => filterByCategory("Men's clothing") }>Men's clothing</Button>       
      <Button onClick={() => filterByCategory("Women's clothing")}>Women's clothing</Button>
       <Button onClick={filterElectronics}>Electronics</Button>
       <Button onClick={filterJewelery}>Jewelery</Button><br />    */}

       <Button onClick={sortFromLow} variant="outlined">Sort by price from low to high</Button>
       <Button onClick={sortFromHigh} variant="outlined">Sort by price from high to low</Button>
       <Button onClick={sortAZ} variant="outlined">Sort by product name</Button> <br /><br />
       <Button onClick={reset} variant="contained">See all products</Button><br /> <br />

       <br /><br />
       <div><b> Products on page: {products.length} items</b></div>

      <div>
        {categories.map(category => <Button onClick={() => filterByCategory(category.name)}>{category.name}</Button>)}
      </div>
       
       <div className={styles.products}>
          {products.map((product, index) => 
            <div key={product.id} className={styles.product}>
              <img className={styles.picture} src={product.image} alt=""></img>
              <div className={styles.title}>{product.title.length > 20 ? product.title.substring(0,25) + "..." : product.title}</div>
              <div className={styles.price}>{product.price.toFixed(2)} eur</div>
              <Button1 onClick={() => toCart(product)} className="cartButton" variant="outline-info">Add to cart</Button1><br />
              <Link to={"global/SingleProduct/" + product.id }> Product details </Link> 
              
              <ToastContainer 
            position="bottom-right"
            autoClose={3000}    
            theme="colored"
          /> 
           </div>
      )} 
      </div>
      <div className="bottom-bar"> </div>
    </div></div>
  )
}

export default HomePage

// storage / cookies
