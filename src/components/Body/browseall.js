import React,{Component} from 'react';
import { Card, CardBody, CardImg,CardHeader,CardSubtitle, CardImgOverlay} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Badge} from 'react-bootstrap';

class BrowseALL extends Component {   

    render() {
        const browseall = this.props.arr.map((item) => {
            return (
                <>
                <div  className="col-sm-3 give-padding ">
                    <Card className="style" key={item.id} >
                    <Link to={`/${item.url}/${item.id}`} >
                        <CardImg className="style-pic" width="200px" height="400px" src={item.image} alt={item.name} />
                        <CardImgOverlay><h3>
                            { item.label === 'New' ? <label className="new-arrival">{item.label}</label> : ""}
                            { item.label === 'Sale' ? <label className="on-sales">{item.label}</label> : ""}
                            { item.label === 'Trending' ? <label className="trending">{item.label}</label> : ""}
                            <Badge  variant="warning"></Badge></h3>
                        </CardImgOverlay>
                        <CardBody className="style-body">
                            <CardHeader ><b>{item.name}</b>
                            <CardSubtitle ><em>{item.price}</em></CardSubtitle></CardHeader> 
                            
                        </CardBody>
                    </Link>
                    </Card>
                </div>
                <br />
                </>
            );
        });

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <h1>Browse</h1>
                    <br /><br /><br /><br />
                </div>
                <div className="row justify-content-center">
                    {browseall}
                </div>
                
            </div>
        );
    }
}

export default BrowseALL;