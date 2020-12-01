import React, { Component } from 'react';
import LeftControl from './LeftControl';
import RightControl from './RightControl';
import Slides from './Slides';
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

export default class Carousel extends Component {
  state = {
    currentItemIndex: 0,
  };

  render() {
    const { currentItemIndex } = this.state;

    return (
      <>
        <div className="carousel">
          <Slides slides={slides} currentItemIndex={currentItemIndex} />
        </div>
        <LeftControl />
        <RightControl />
      </>
    );
  }
}
