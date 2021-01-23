import React, { Component } from 'react';
import './App.css';

import Toolbar from './components/Navigation/Toolbar/Toolbar';
import SideBar from './components/Navigation/sidebar/sidebar.js';
import BackDrop from './components/Navigation/Backdrop/Backdrop.js'

import Body from './components/Body/body';


import Footer from './components/Footer/footer';

import { BrowserRouter} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

  class App extends Component {

    authenticate(){
      return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
    }
    componentDidMount(){
      this.authenticate().then(() => {
        const ele = document.getElementById('ipl-progress-indicator')
        if(ele){
          // fade out
          ele.classList.add('available')
          setTimeout(() => {
            // remove from DOM
            ele.outerHTML = ''
          }, 1000)
        }
      })
    }

    state = {
      sidebarOpen:false
    };
    sidebarToggleClickHandler = () => {
      this.setState((prevState) => {
        return {sidebarOpen: !prevState.sidebarOpen}
      });
    };

    backdropClickHandler =  () => {
      this.setState({sidebarOpen :false});
    };
      

    render()
    {
      let sidebar;
      let backdrop;

      if(this.state.sidebarOpen)
      {
        sidebar=<SideBar />;
        backdrop = <BackDrop click={this.backdropClickHandler}/>;
      }
    return (
      <div className="App">
        <BrowserRouter>
          <div style={{height:'100%'}}>
            <Toolbar  sidebarClickHandler ={this.sidebarToggleClickHandler}/>
              {sidebar}
              {backdrop}
          </div>
          <br /><br /><br />
          <Body /> 
          <br /><br /><br />
          <deals />
          <Footer />     
        </BrowserRouter>
      </div>
    );
    }
  } 


export default App;