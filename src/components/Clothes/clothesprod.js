import React, { Component } from 'react';
import Menu from '../Body/menu';
import Clothing from './Clothes_arr'

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: Clothing,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    return (
      <div className="placing">
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
      </div>
    );
  }
}

export default Main;