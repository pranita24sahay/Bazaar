import React from 'react'
import { Card, CardImg} from 'reactstrap';
import './collection.css';

import ITEMS from '../shared/items'
function home() {
    const cardList=ITEMS.map(item =>
    <div  className="col-sm-3">
        <Card className="style">
          <CardImg className="pic-style" width="200px" src={item.image} alt={item.name} />
        </Card>
        <br />
      </div>
      )
    
    return (
    <div>
      <h1>Our Collections</h1>
      <br />
      {cardList}
    </div>
    );
}

export default home;