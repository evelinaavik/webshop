import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import productsJSON from "../data/products.json"



function FilterProducts() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [products, setProducts] = useState (productsJSON.slice());
     
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

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Filter products on sidebar
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter products</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body> Siins võiks olla toodete filtreerimise nupud <br /><br />

       <Button onClick={sortFromLow} variant="outline-info">Sort by price from low to high</Button><br />
       <Button onClick={sortFromHigh} variant="outline-info">Sort by price from high to low</Button><br />
       <Button onClick={sortAZ} variant="outline-info">Sort by product name</Button>

       <div>
          {products.map(product => 
            <div key={product.id} >
              <div>{product.title.length > 10 ? product.title.substring(0,15) + "..." : product.title}
              {product.price.toFixed(2)} eur</div>       
      </div>       
      )} 
      </div>         
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default FilterProducts;