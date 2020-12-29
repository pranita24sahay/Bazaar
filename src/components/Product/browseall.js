import React from 'react';
import { Card, CardBody, CardImg,CardHeader,CardSubtitle} from 'reactstrap';
import Product from './product';

function BrowseALL(props) {
    const browseallproducts = props.arr.map(item =>
        {
            return(
                <div  className="col-sm-3">
                    <Card className="style" onclick={<Product piece={item}/>}>
                        <CardImg className="style-pic" width="200px" height="400px" src={item.image} alt={item.name} />
                        <CardBody className="style-body">
                            <CardHeader className="justify-content-center">{item.name} <CardSubtitle className="justify-content-center">{item.price}</CardSubtitle></CardHeader>
                        </CardBody>
                    </Card>
                </div>
            )
        })
    
    return (
        <div>
            <div className="row justify-content-center">
                <h1>Browse</h1>
                <br /><br /><br /><br />
            </div>
            <div className="row justify-content-center">
                {browseallproducts}
            </div>
        </div>
        )
}

export default BrowseALL;