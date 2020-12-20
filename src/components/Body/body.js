import React, { Component } from 'react';

import Caraousel from '../Carousel/caraousel';
import Collections from '../Collections/collections';

import Clothes from '../Clothes/clothes';

import { Switch, Route, Redirect,withRouter  } from 'react-router-dom';



class Body extends Component {    
    
  render() {
    const HomePage = () => {
      return(
            <div>
                <Caraousel />
                <div className="container">
                    <div className="row"><Collections /></div>
                </div>
          </div>
      );
    }
    const Clothespage = () =>
    {
        return(
            <div>
                <Clothes />
            </div>
        )
    }

    return (
        <div>
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/clothes' component={Clothespage} />
              <Redirect to="/home" />
          </Switch>
        </div>
    );
  }
}

export default withRouter((Body));