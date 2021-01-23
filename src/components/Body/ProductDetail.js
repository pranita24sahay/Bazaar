import React from 'react';
import {Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function RenderImage({item}) {
    if (item!=null){
        return(
            <div className="row justify-content-center ">
                <div className="col-sm-6 ">
                    <img src={item.image} width="80%" alt={item.description}/>
                </div>
                <div className="col-sm-6 detail" >

                    <h1>{item.name}</h1>
                    <h3>{item.description}</h3>
                    <h5>{item.price}</h5>
                    <br /><br /><br /><br /><br /><br /><br /><br />
                    <div className="row">
                        <ol>
                            <li><Button>Add to Cart</Button></li>
                            <li><Button>Wishlist</Button></li>
                        </ol>
                    </div>
                </div>
            </div>  
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
                </div>
                    <div className="col-sm-12">
                        <RenderImage item={props.item} />
                    </div>
            </div>
        );
    } else {
        return <div></div>
    }
}
export default ProductDetail;