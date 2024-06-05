import React from 'react'
import productsJSON from "../../data/products.json"
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
  const [products, setProducts] = useState (productsJSON.slice());

  const reset = () => {
    setProducts(productsJSON.slice())
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

  const filterMensClothing = () => {
     const result = productsJSON.filter(product => product.category === "men's clothing");
     setProducts(result);
  }

  const filterWomensClothing = () => {
    const result = productsJSON.filter(product => product.category === "women's clothing");
    setProducts(result);
  }
  
 const filterElectronics = () => {
  const result = productsJSON.filter(product => product.category === "electronics");
  setProducts(result); 
}

const filterJewelery = () => {
  const result = productsJSON.filter(product => product.category === "jewelery");
  setProducts(result);
}

  const toCart = (product) => {
    // cartJSON.push(product);
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];   // JSON.parse nö "" mahavõtmine
    cartLS.push(product);
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
 
       <Button onClick={filterMensClothing}>Men's clothing</Button>       
       <Button onClick={filterWomensClothing}>Women's clothing</Button>
       <Button onClick={filterElectronics}>Electronics</Button>
       <Button onClick={filterJewelery}>Jewelery</Button><br />   

       <Button onClick={sortFromLow} variant="outlined">Sort by price from low to high</Button>
       <Button onClick={sortFromHigh} variant="outlined">Sort by price from high to low</Button>
       <Button onClick={sortAZ} variant="outlined">Sort by product name</Button> <br /><br />
       <Button onClick={reset} variant="contained">See all products</Button><br /> <br />
       <br /><br />
       <div><b> Products on page: {products.length} items</b></div>
       
       <div className={styles.products}>
          {products.map((product, index) => 
            <div key={product.id} className={styles.product}>
              <img className={styles.picture} src={product.image} alt=""></img>
              <div className={styles.title}>{product.title.length > 20 ? product.title.substring(0,25) + "..." : product.title}</div>
              <div className={styles.price}>{product.price.toFixed(2)} eur</div>
              <Button1 onClick={() => toCart(product)} className="cartButton" variant="outline-info">Add to cart</Button1><br />
        
              <Link to={"global/SingleProduct/" + index }> Product details </Link> 
              
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
