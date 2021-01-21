import React,{Component} from 'react';
import { Card, CardBody, CardImg,CardHeader,CardSubtitle,CardTitle,CardText} from 'reactstrap';
import {Link} from 'react-router-dom';

class BrowseALL extends Component {   

    render() {
        const browseall = this.props.arr.map((item) => {
            return (
                <>
                <div  className="col-sm-3">
                    <Card className="style" key={item.id} >
                    <Link to={`/${item.url}/${item.id}`} >
                        <CardImg className="style-pic" width="200px" height="400px" src={item.image} alt={item.name} />
                        <CardBody className="style-body">
                            <CardHeader className="justify-content-center"><b>{item.name}</b></CardHeader>
                            <CardSubtitle className="justify-content-center"><em>{item.price}</em></CardSubtitle>
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