import React, { Component } from 'react';
import Slides from './Slides';

export default class Carousel extends Component {
  render() {
    return (
      <div className="carousel">
        <Slides slide={slides} />
      </div>
    );
  }
}
