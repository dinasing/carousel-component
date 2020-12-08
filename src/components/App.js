import React, { Component } from 'react';
import '../styles/App.css';
import Carousel from './Carousel';
import image1 from '../../assets/images/chihiro032.jpg';
import image2 from '../../assets/images/chihiro043.jpg';
import image3 from '../../assets/images/chihiro046.jpg';
import image4 from '../../assets/images/majo035.jpg';
import image5 from '../../assets/images/majo040.jpg';
import image6 from '../../assets/images/majo048.jpg';

const slides = [
  {
    description: '',
    heading: '',
    image: image1,
  },
  { description: '', heading: '', image: image2 },
  { description: '', heading: '', image: image3 },
  { description: '', heading: '', image: image4 },
  { description: '', heading: '', image: image5 },
  { description: '', heading: '', image: image6 },
];

class App extends Component {
  render() {
    return (
      <>
        <Carousel slides={slides} numberOfSlidesOnPage={2} />
      </>
    );
  }
}

export default App;
