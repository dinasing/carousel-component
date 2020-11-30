import React, { Component } from 'react';
import LeftControl from './LeftControl';
import RightControl from './RightControl';
import Slides from './Slides';

const slides = [
  { description: '', heading: '', image: '../../public/images/chihiro032' },
  { description: '', heading: '', image: '../../public/images/chihiro043' },
  { description: '', heading: '', image: '../../public/images/chihiro046' },
];

export default class Carousel extends Component {
  render() {
    return (
      <>
        <div className="carousel">
          <Slides slides={slides} />
        </div>
        <LeftControl />
        <RightControl />
      </>
    );
  }
}
