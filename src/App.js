import React ,{ Component } from 'react';
import './App.css';
import Carousel from './components/Carousel/Carousel';
import Header from './components/Header/header';
import NavigationBar from './components/Navigation/navigation';



class App extends Component{
  render(){
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <Carousel />
      <br /><br /><br />
    </div>
  );
}
}

export default App;
