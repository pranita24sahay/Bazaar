import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle,CardHeader,CardSubtitle } from 'reactstrap'
class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} width={'100px'} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-sm-3 ">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg  src={dish.image} alt={dish.name} className="style-pic" width="300px" height="350px" />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                  <CardBody className="style-body">
                        <CardHeader className="justify-content-center">{dish.name} <CardSubtitle className="justify-content-center">{dish.price}</CardSubtitle></CardHeader>
                    </CardBody>
                </Card>
                
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row justify-content-center">
                    {menu}
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

 
    export default Menu;