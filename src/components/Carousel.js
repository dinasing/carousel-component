import React, { Component } from 'react';
import LeftControl from './LeftControl';
import RightControl from './RightControl';
import Slides from './Slides';

export default class Carousel extends Component {
  render() {
    return (
      <>
        <div className="carousel">
          <Slides slide={slides} />
        </div>
        <LeftControl />
        <RightControl />
      </>
    );
  }
}
