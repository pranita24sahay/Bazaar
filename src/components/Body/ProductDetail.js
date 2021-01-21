import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCard({item}) {
    if (item!=null){
        return(
            <Card className="col-12 col-md-5 m-1">
                <CardImg top src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle><strong>{item.name}</strong></CardTitle>
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>  
        );
    } else {
        return(
            <div></div>
        );
    }
}


const ProductDetail = (props) => {
    if (props.item!=null) {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/clothes">Clothes</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.item.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.item.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <RenderCard item={props.item} />
                </div>
            </div>
        );
    } else {
        return <div></div>
    }
}
export default ProductDetail;