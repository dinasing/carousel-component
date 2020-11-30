import React, { Component } from 'react';
import '../styles/App.css';
import Carousel from './Carousel';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My Carousel!</h1>
        <Carousel />
      </div>
    );
  }
}

export default App;
