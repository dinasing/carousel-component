import React from 'react';
import Slide from './Slide';

const Slides = props => {
  const { slides, currentItemIndex, x } = props;

  return (
    <div className="slides">
      {slides.map((slide, index) => (
        <Slide key={`slide ${index}`} slide={slide} x={x} />
      ))}
    </div>
  );
};

export default Slides;
