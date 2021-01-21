import React, { Component } from 'react';

import Collections from '../Home/Collections/collections';

import Slider from './ImageSlider';
import TrendingForMen from './trending_men';
import TrendingForWomen from './trending_women';
import BrowseALL from './browseall';
import CardSample from '../Clothes/CardSample';
import ProductDetail from './ProductDetail';


import Clothes_arr from '../Clothes/Clothes_arr';
import Footwear_arr from '../Footwear/Footwear_arr';
import ITEMS from '../Home/items';

import './body.css';

import { Switch, Route, Redirect,withRouter  } from 'react-router-dom';
import Deals from '../Home/deals';

class Body extends Component { 
  
  render() {
    const HomePage = () => {
      return(
          <div>
                <Slider arr={ITEMS}/>
                <Collections />
                <Deals />
          </div>
      );
    }
    const Clothespage = () =>
    {
        return(
            <div>
                <Slider arr={Clothes_arr} />
                <CardSample />
                <TrendingForMen arr ={Clothes_arr} />
                <TrendingForWomen arr ={Clothes_arr} />
                <BrowseALL arr={Clothes_arr}/>
            </div>
        )
    }
    const FootwearPage = () =>
    {
      return(
        <div>
            <Slider arr ={Footwear_arr} />
            <TrendingForMen arr ={Footwear_arr} />
            <TrendingForWomen arr ={Footwear_arr} />
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
    };
    
    const ClothingItem = ({match}) => {
      return(
          <ProductDetail item={Clothes_arr.filter((citem) => citem.id === parseInt(match.params.Cid,10))[0]} />
      );
    };
    const FootwearItem = ({match}) => {
      return(
          <ProductDetail item={Footwear_arr.filter((fitem) => fitem.id === parseInt(match.params.Fid,10))[0]} />
      );
    };

    return (
        <div>
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/clothes' component={Clothespage} />
              <Route path='/clothes/:Cid' component={ClothingItem} />
              <Route exact path='/footwear' component={FootwearPage} />
              <Route path='/footwear/:Fid' component={FootwearItem} />
              <Route exact path='/jewellery' component={JewelleryPage} />
              <Redirect to="/home" />
          </Switch>
        </div>
    );
  }
}

export default withRouter((Body));