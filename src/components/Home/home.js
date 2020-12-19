import React from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

import ITEMS from '../shared/items'
function home() {
    const cardList=ITEMS.map(item =>
    <div className="container">
    <div  className="col-sm-3">
        <Card>
          <CardImg width="200px" src={item.image} alt={item.name} />
          <CardBody>
            <CardTitle>{item.category}</CardTitle>
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
      </div>
    </div>)
    
    return (
    <div>{cardList}</div>
    );
}

export default home;