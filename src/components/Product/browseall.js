import React,{Component} from 'react';
import { Card, CardBody, CardImg,CardHeader,CardSubtitle,CardTitle,CardText} from 'reactstrap';

class BrowseALL extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(item) {
        this.setState({ selectedDish: item});
    }

    renderDish(item) {
        if (item != null)
            return(
                <Card>
                    <CardImg top src={item.image} alt={item.name} width={'100px'} />
                    <CardBody>
                      <CardTitle>{item.name}</CardTitle>
                      <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        const browseall = this.props.arr.map((item) => {
            return (
                <div  className="col-sm-3">
                    <Card className="style" key={item.id} onClick={() => this.onDishSelect(item)}>
                        <CardImg className="style-pic" width="200px" height="400px" src={item.image} alt={item.name} />
                        <CardBody className="style-body">
                            <CardHeader className="justify-content-center">{item.name} <CardSubtitle className="justify-content-center">{item.price}</CardSubtitle></CardHeader>
                        </CardBody>
                    </Card>
                </div>
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
                <div className="row">
                  <div  className="col-sm-6 offset-sm-3 placing">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                </div>
            </div>
        );
    }
}

export default BrowseALL;