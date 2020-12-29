import React, { Component } from 'react';
import Menu from '../Body/menu';
import Footwear  from './Footwear_arr';

class FootwearProd extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: Footwear,
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

export default FootwearProd;