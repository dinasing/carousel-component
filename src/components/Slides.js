import React from 'react';
import Slide from './Slide';

const Slides = props => {
  const { slides, currentItemIndex } = props;

  return (
    <div className="slides-container">
      {slides.map((slide, index) => (
        <Slide key={`slide ${index}`} slide={slide} isActive={currentItemIndex === index} />
      ))}
    </div>
  );
};

export default Slides;
