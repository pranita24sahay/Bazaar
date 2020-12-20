import React, { Component } from 'react';
import { Carousel,CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image4 from '../Images/blue-f-shirt.jpg';
import image2 from '../Images/gray-shirt.webp';
import image3 from '../Images/shirt.webp';
import image1 from '../Images/white-blue-shirt.jpg';

class Caraousel extends Component {
  render() {
    return (
      <div>
      <Carousel datatype="carousel" className="carousel sz-slider" data height="300px">
        <CarouselItem>
          <img  className="d-block h-100 w-auto mx-auto" src={image1} alt="First slide" />
        </CarouselItem>
        <CarouselItem>
          <img  className="d-block h-100 w-auto mx-auto" src={image2}  alt="Second slide"  />
        </CarouselItem>
        <CarouselItem>
          <img  className="d-block h-100 w-auto mx-auto" src={image3}  alt="Third slide"  />
        </CarouselItem> 
        <CarouselItem>
          <img  className="d-block h-100 w-auto mx-auto" src={image4}  alt="fourth slide"  />
        </CarouselItem>
      </Carousel>
      </div>
    );
  }
}

export default Caraousel;