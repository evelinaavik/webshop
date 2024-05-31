import React from 'react';
import Button from 'react-bootstrap/Button';
import linesPNG from './lines.png';

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
                      <p className=""> Webshop</p>
                      <p>Contact Us</p>
                      <p>Map</p>
                </div>
              
            </div>
    </section>

    )
}
export default Footer;