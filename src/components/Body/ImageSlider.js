import React from 'react';
import { Carousel,CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function slider(props) {
    const carList=props.arr.map(shoe =>
    {
      if(shoe.featured)
      {
        return(
          <CarouselItem>
            <img  className="d-block h-30 mx-auto caro-pic" src={shoe.image} alt={shoe.description} max-height="400px" position="absolute"/>
          </CarouselItem>
        )
      }
    }
    )
    return (
      <div>
        <Carousel datatype="carousel" height="500px" className="caro-style">
          {carList}
        </Carousel>
      </div>
    );
    }

export default slider;