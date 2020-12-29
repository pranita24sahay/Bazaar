import React, { Component } from 'react';

import Collections from '../Home/Collections/collections';

import Slider from './carousel';
import Trending_for_men from './trending_men';
import Trending_for_women from './trending_women';

import Clothes_arr from '../Clothes/Clothes_arr';
import Footwear_arr from '../Footwear/Footwear_arr';
import ITEMS from '../Home/items';

import './body.css';

import { Switch, Route, Redirect,withRouter  } from 'react-router-dom';
import BrowseALL from '../Product/browseall';

import {Card,CardBody,CardImg,CardTitle,CardText} from 'reactstrap';

class Body extends Component { 


  render() {
    const HomePage = () => {
      return(
          <div>
                <Slider arr={ITEMS}/>
                <Collections />
          </div>
      );
    }
    const Clothespage = () =>
    {
        return(
            <div>
                <Slider arr={Clothes_arr} />
                <Trending_for_men arr ={Clothes_arr} />
                <Trending_for_women arr ={Clothes_arr} />
                <BrowseALL arr={Clothes_arr}/>
            </div>
        )
    }
    const FootwearPage = () =>
    {
      return(
        <div>
            <Slider arr ={Footwear_arr} />
            <Trending_for_men arr ={Footwear_arr} />
            <Trending_for_women arr ={Footwear_arr} />
            <BrowseALL arr={Footwear_arr}/>
        </div>
      )
    }
    const JewelleryPage = () =>
    {
      return(
        <div className="row justify-content-center">
          <br />
          <br />
          <br />
            <h1>
              Coming soon ...
            </h1>
            <br />
        </div>
      )
    }
    const ProductPage =() =>
    {
      return(
        <div>
          
        </div>
      )
    }

    return (
        <div>
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/clothes' component={Clothespage} />
              <Route exact path='/footwear' component={FootwearPage} />
              <Route exact path='/jewellery' component={JewelleryPage} />
              <Route exact path='/product' component={ProductPage} />
              <Redirect to="/home" />
          </Switch>
        </div>
    );
  }
}

export default withRouter((Body));