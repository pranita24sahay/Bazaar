import React, { Component } from 'react';
import { Carousel,CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image4 from '../Images/slideshow1.webp';
import image2 from '../Images/slideshow2.jpg';
import image3 from '../Images/slideshow3.jpg';
import image1 from '../Images/slideshow4.jpg'

class Caraousel extends Component {
  render() {
    return (
      <div>
      <Carousel>
        <CarouselItem>
          <img  className="d-block w-100" src={image1} alt="First slide" />
        </CarouselItem>
        <CarouselItem>
          <img  className="d-block w-100" src={image2}  alt="Second slide"  />
        </CarouselItem>
        <CarouselItem>
          <img  className="d-block w-100" src={image3}  alt="Third slide"  />
        </CarouselItem>
        <CarouselItem>
          <img  className="d-block w-100" src={image4}  alt="fourth slide"  />
        </CarouselItem>
      </Carousel>
      </div>
    );
  }
}

export default Caraousel;