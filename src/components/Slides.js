import React from 'react';
import Slide from './Slide';

const Slides = props => {
  const { slides } = props;
  return (
    <div className="slides-container">
      {slides.map(slide => (
        <Slide slide={slide} />
      ))}
    </div>
  );
};

export default Slides;
