import React from 'react';
import { Carousel,CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import CLOTHING_ITEMS from './Clothes_arr';

  function Caraousel() {
    const carList=CLOTHING_ITEMS.map(cloth =>
      {
      if(cloth.featured)
      {
        return(
          <CarouselItem>
            <img  className="d-block h-30 mx-auto caro-pic" src={cloth.image} alt={cloth.description}  max-height="400px" position="absolute"/>
          </CarouselItem>
        )
      }
    }
    )
    return (
      <div>
        <Carousel datatype="carousel" height="500px" >
          {carList}
        </Carousel>
      </div>
    );
    }

export default Caraousel;