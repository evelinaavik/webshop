import React, { useEffect, useState } from 'react'
// import cartJSON from "../../data/cart.json"
import { Link } from 'react-router-dom';
import styles from "../../css/Cart.module.css";

function Cart() {                   // 1. 2.
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [pms, setPms] = useState([]);

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
    .then(res => res.json()) // terve API päringu tagastus (errorid, mahud, tüübid jms nö metadata)
    .then(data => setPms(data)) // reaalne tagastus sealt API otspunktist (mida brauser näeb)
  }, []);

  // uef

  const pay = () => {
    const url ="https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    const paymentBody = {
        "account_name": "EUR3D1",
        "nonce": "135784a" + new Date() + Math.random() * 99999,
        "timestamp": new Date(),
        "amount": addUp(),
        "order_reference": Math.random() * 99999,
        "customer_url": "https://ws0424.web.app",
        "api_username": "92ddcfab96e34a5f",
    };

    const paymentHeaders = {
        "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==",
      "Content-Type": "application/json"
    };
    
    fetch(url, {method: "POST", body: JSON.stringify(paymentBody), headers: paymentHeaders})
     .then(res => res.json())
      .then (json => window.location.href = json.payment_link);
  }

  // kui suuname HTML-is <Link to:"">
  // kui suuname JS-s: const navigate = useNavigate()    navigate ("/admin/...")
  // kui suuname välisele lingile: window.location.href = ""

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
    products.forEach(product => sum = sum + product.toode.price * product.kogus);
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
       

       {products.length > 0 && 
       <React.Fragment>
          <select>
            {pms
              .filter(pm => pm.A0_NAME === "EE") 
            .map(pm => <option key={pm.NAME}> {pm.NAME} </option>)}                   
          </select>

          <button onClick={pay}>Maksa</button>
       </React.Fragment>}

        {products.length === 0 && <Link to='/'>Ostukorv on tühi. Mine avalehele</Link> }
        <br /> <br /><br />
    </div>
  )
}
//  kui ostukorv suurem kui 0, näita React.Fragement sees olevat

export default Cart