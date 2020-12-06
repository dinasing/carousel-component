import React from 'react';
import Slide from './Slide';

const Slides = props => {
  const { slides, currentItemIndex, x } = props;

  return (
    <div
      className="slides"
      style={{
        transform: `translateX(${x}%)`,
      }}
    >
      {slides.map((slide, index) => (
        <Slide key={`slide ${index}`} slide={slide} />
      ))}
    </div>
  );
};

export default Slides;
