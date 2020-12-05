import React from 'react';
import Slide from './Slide';

const Slides = props => {
  const { slides, currentItemIndex } = props;

  return (
    <div className="slides">
      {slides.map((slide, index) => (
        <Slide key={`slide ${index}`} slide={slide} />
      ))}
    </div>
  );
};

export default Slides;
