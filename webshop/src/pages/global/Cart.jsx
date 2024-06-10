import React, { useState } from 'react'
// import cartJSON from "../../data/cart.json"
import { Link } from 'react-router-dom';
import styles from "../../css/Cart.module.css";

function Cart() {                   // 1. 2.
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  function del(index) {
    products.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(products));
    setProducts(products.slice());
  }

  // function add(product) {
  //   products.push(product); // 3.
  //   localStorage.setItem("cart", JSON.stringify(products)); // 4. 5.   
  //   setProducts(products.slice())  // HTMLI uuedamine
  // }

  function empty(){
    products.splice(0)    
    localStorage.setItem("cart", JSON.stringify(products)); // kui ei pane (0,100) teist nr, on lõpmatu kogus, mida kustutab
    setProducts(products.slice(0))
  }

  function addUp(){
    let sum = 0;
    products.forEach(product => sum = sum + product.toode.price);
    return sum.toFixed(2);   
  }
  
  // const reset = () => {
  //   setProducts(cartJSON.slice())
  // }

  const decreaseQuantity = (index) => {
    products[index].kogus =  products[index].kogus - 1
    if (products[index].kogus === 0) {
      products.splice(index,1);
    }
    localStorage.setItem("cart", JSON.stringify(products));
    setProducts(products.slice(0))
  } 

  const increaseQuantity = (index) => {
    products[index].kogus =  products[index].kogus + 1
    localStorage.setItem("cart", JSON.stringify(products));
    setProducts(products.slice(0))
  }

  return (
    <div><br /> <b>Sinu ostukorv</b>  <br /><br />
        Toodete kogus : {products.length}  tk <br />
        {/* <button onClick={reset}>Tooted reset</button> */}
        <div>Toodete hind kokku: {addUp()}</div>
        {products.length > 0 &&  <button onClick={empty}>Tühjenda ostukorv</button> } <br /><br />
        {products.map ((product, index) =>
            <div key={index} className={styles.product}>
              <img className={styles.picture} src={product.toode.image} alt="" />
              <div className={styles.title}> {product.toode.title} </div>
              <div className={styles.price}>  {product.toode.price} </div>
              <button onClick={() => decreaseQuantity(index)}>-</button>
              <div className={styles.quantity}>{product.kogus}tk </div>
              <button onClick={() => increaseQuantity(index)}>+</button>
              <div className={styles.sum}>{product.toode.price * product.kogus} eur </div>
              <button className={styles.button} onClick={() => del(index)}>x</button>
              {/* <button className={styles.button} onClick={() => add(product)}>Add prduct</button>     */}
            </div>
        )} 
        {products.length === 0 && <Link to='/'>Ostukorv on tühi. Mine avalehele</Link> }
        <br /> <br /><br />
    </div>
  )
}

export default Cart