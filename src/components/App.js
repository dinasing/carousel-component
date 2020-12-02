import React, { Component } from 'react';
import '../styles/App.css';
import Carousel from './Carousel';
import image1 from '../../assets/images/chihiro032.jpg';
import image2 from '../../assets/images/chihiro043.jpg';
import image3 from '../../assets/images/chihiro046.jpg';

const slides = [
  {
    description: '',
    heading: '',
    image: image1,
  },
  { description: '', heading: '', image: image2 },
  { description: '', heading: '', image: image3 },
];

class App extends Component {
  render() {
    return (
      <>
        <Carousel slides={slides} />
      </>
    );
  }
}

export default App;
