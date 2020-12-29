import React from 'react'
import { Card, CardBody, CardImg} from 'reactstrap';
import './collection.css';

import ITEMS from '../items'
function home() {
    const cardList=ITEMS.map(item =>
      {
      if(item.collection)
      {
        return (
          <div  className="col-sm-3">
            <Card className="style">
              <CardImg className="pic-style" width="450px" height="320px" src={item.image} alt={item.name} />
              <CardBody><h5>{item.description}</h5></CardBody>
            </Card>
            <br />
          </div>
        )
      }
      })

    
    return (
    <div className="container">
      <div className="row justify-content-center">
        <br />
        <h1>Our Collections</h1>
        <br /><br />
      </div>
      <div className="row justify-content-center">
        {cardList}
      </div>
    </div>
    );
}

export default home;