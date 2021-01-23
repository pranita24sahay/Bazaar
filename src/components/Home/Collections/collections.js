import React,{useState} from 'react'
import { Card, CardImg} from 'reactstrap';
import './collection.css';
//import ITEMS from '../items';

function SmallCard({value}) {
  return(
    <div  className="col-sm-2">
      <Card className="style">
        <CardImg className="pic-style" width="450px" height="320px" src={value.image} alt={value.name} />
      </Card>
      <br />
    </div>
  );
}
function LargeCard({value}) {
  return(
    <div  className="col-sm-3">
      <Card className="style">
        <CardImg className="pic-style" width="450px" height="320px" src={value.image} alt={value.name} />
      </Card>
      <br />
    </div>
  );
}

  const Collection = (props) => {
    const[doit,handleDoIt]=useState(false);
    const cardList=props.arr.map(item =>
    {
      if(item.collection)
      {   
        return (
          <>
          { doit ? <LargeCard value={item} /> : <SmallCard value={item} />}
          </>
        )
      }
    })
  
    return (
      <>
      <div className="row justify-content-center">
        <br />
        <h1>Our Collections</h1>
        <br /><br />
      </div>
      <div onMouseEnter={() => handleDoIt(true)} onMouseLeave ={() => handleDoIt(false)} >yisgducuysd</div>
      <div className="row justify-content-center">
        {cardList}
      </div>
      </>
    );
}

export default Collection;