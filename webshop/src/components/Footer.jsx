import React from 'react';
import Button from 'react-bootstrap/Button';
import linesPNG from './lines.png';
import {Link} from "react-router-dom"

const Footer = () => {        
    return (
        <section className="py-10 sm:pt-16 lg:pt-24">
            <div className="footer" style={{
    backgroundImage: `url('${linesPNG}')`,
  }}  >
        
                <div>     <br /><br />
                        <div> 
                            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Subscribe to our newsletter</p>
                                    <form action="#" method="POST" className="mt-2">
                                    <input type="email" name="email" id="email" placeholder="Enter your email" className="email"/><br/>
                                    <Button type="submit" variant="outline-dark">Subscribe</Button>  
                                    </form>
                        </div><br /><br /><br />
                </div>
                <div className="end">
                    <Link to=" "><p>Webshop</p> </Link>   
                    <Link to="contact"><p>Contact Us</p> </Link>
                    <Link to="shpos"><p>Our Shops</p> </Link>

               
                </div>
              
            </div>
    </section>

    )
}
export default Footer;