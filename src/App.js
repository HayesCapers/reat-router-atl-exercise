import React, { Component } from 'react';
import './App.css';
import BootstrapNavBar from './BootstrapNavBar'
import Home from './Home';
import Atlanta from './Atlanta';
import Images from './Images';
import MayorMessage from './MayorMessage';
import About from './About';
import { BrowserRouter as Router, Route } from 'react-router-dom'

var atlImages = [
  'http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg',
  'http://2.bp.blogspot.com/--XZFLg6LSq8/U4YV65sb2MI/AAAAAAAAO8A/cFl-Em5Zb0A/s1600/Sawfish_Atlanta_Aquarium.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a3/Piedmont-park-urban-park.jpg'
]

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <BootstrapNavBar />
          <div className="container main">
            <Route exact={true} path='/' component={Home} />
            <Route exact={true} path='/one' component={Atlanta} />
            <Route exact={true} path='/two' render={()=>(
              <Images imagesArray={atlImages}/>
            )}/>
            <Route exact={true} path='/three' component={MayorMessage} />
            <Route exact={true} path='/four' component={About} />
          </div>
        </div>
      </Router> 
    );
  }
}

export default App;
