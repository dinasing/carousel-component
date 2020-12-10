import React, { Component } from 'react';
import '../styles/App.css';
import Carousel from './Carousel';
import { slides } from './content';

class App extends Component {
  render() {
    return (
      <>
        <Carousel slides={slides} numberOfSlidesOnPage={2} numberOfSlidesOnPageMobile={1} />
      </>
    );
  }
}

export default App;
