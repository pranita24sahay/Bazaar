import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
CardTitle } from 'reactstrap'
function menu(props){
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
                  <CardImg top src={item.image} alt={item.name} width={'100px'}/>
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
        const menu = this.props.arr.map((item) => {
            if(!item.featured)
            {
            return (
              <div  className="col-sm-3 ">
                <Card key={item.id}
                  onClick={() => this.onDishSelect(item)}>
                  <CardImg width="20%" src={item.image} alt={item.name} />
                  <CardImgOverlay>
                      <CardTitle>{item.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        }});

        return (
            <div className="container">
                <div className="row">
                  <div  className="col-sm-6 offset-sm-3 placing">
                    {this.renderDish(this.selectedDish)}
                  </div>
                </div>
            </div>
        );
    }
}

 
    export default Menu;