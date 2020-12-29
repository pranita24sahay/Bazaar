import React from 'react';
import { Card, CardBody, CardImg,CardHeader,CardSubtitle} from 'reactstrap';

function Product(props) {
    return (
        <div className="row">
            <div  className="col-sm-12">
                <Card className="style" >
                    <CardImg className="style-pic" width="200px" height="400px" src={props.piece.image} alt={props.piece.name} />
                </Card>
            </div>
            <div className="col-sm-12">
                <Card>
                    <CardBody className="style-body"> HOLAAAAAAAAAAAAa
                        <CardHeader className="justify-content-center">{props.piece.name} <CardSubtitle className="justify-content-center">{props.piece.price}</CardSubtitle></CardHeader>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default Product;