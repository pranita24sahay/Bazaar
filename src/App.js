import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import SideBar from './components/Navigation/sidebar/sidebar.js';
import BackDrop from './components/Navigation/Backdrop/Backdrop.js';
import Header from './components/Header/header';
import Carousel from './components/Carousel/Carousel'  
import Footer from './components/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';


  class App extends Component {

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
      <div>
      <div style={{height:'100%'}}>
      <Toolbar  sidebarClickHandler ={this.sidebarToggleClickHandler}/>
        {sidebar}
        {backdrop}
      </div>
      <Header />
      <Carousel />
      <Footer />
      </div>
    );
    }
  }


export default App;