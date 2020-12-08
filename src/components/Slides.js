import React from 'react';
import Slide from './Slide';

const Slides = props => {
  const { slides, currentItemIndex, x, transitionDuration } = props;

  return (
    <div className="slides">
      {slides.map((slide, index) => (
        <Slide key={`slide ${index}`} slide={slide} x={x} transitionDuration={transitionDuration} />
      ))}
    </div>
  );
};

export default Slides;
