import React, { Component } from 'react';
import { Card, CardImg,CardBody,CardText,CardTitle } from 'reactstrap';
//import BrowseALL from '../Body/browseall';
import black_hoodie from './Images/black_hoodie.webp';
class CardSample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCard: false
        }
    }

    onCardSelect() {
        this.setState((prevState) => {
            return { selectedCard: !prevState.selectedCard }
          })
    }

    renderCard()  {
        if (this.state.selectedCard)
        {
            return(
                <Card>
                    <CardImg top src={black_hoodie} alt="Couldn't load" width={'50px'} />
                    <CardBody>
                      <CardTitle>Name</CardTitle>
                      <CardText>Text</CardText>
                    </CardBody>
                </Card>
            );
        }
        else
            return(
                <div></div>
            );
    }
    render() {
        return (
        <>
            <div className="row justify-content-center">
                <div className="col-sm-3">
                    <Card onMouseEnter={() => this.onCardSelect()} onMouseLeave={() => this.onCardSelect()} >
                        <CardImg src={black_hoodie} height="300px" width="100%"/>
                    </Card>
                </div>
                <div  className="col-sm-6 offset-sm-3 placing">
                    {this.renderCard(this.state.selectedCard)}
                </div>
            </div>
        </>
        );
    }
}

export default CardSample;