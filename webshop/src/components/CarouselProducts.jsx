import Carousel from 'react-bootstrap/Carousel';
import a1PNG from './a1.png';
import a2PNG from './a2.png';
import a3PNG from './a3.png';

function CarouselProducts() {
  return (
     <div className='carousel'>
        <Carousel>
          <Carousel.Item>
            <img src={a1PNG } alt="pattern" text="First slide"  className="item"/>
            <Carousel.Caption className="cText">
              {/* <h3>Season Sale</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
            <img src={a2PNG } alt="pattern" text="Second slide" className="item"/>
            <Carousel.Caption className="cText">
              {/* <h3>Other Season Sale</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
            <img src={a3PNG } alt="pattern" text="Third slide" className="item"/>
            <Carousel.Caption className="cText">
              {/* <h3>Sale! Sale! Sale! </h3> */}
              {/* <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p>*/}
            
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default CarouselProducts;