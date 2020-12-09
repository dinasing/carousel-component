import React from 'react';
import Slide from './Slide';

const Slides = props => {
  const {
    slides,
    x,
    transitionDuration,
    numberOfSlidesOnPage,
    numberOfSlidesOnPageMobile,
    isSmallScreen,
  } = props;

  return (
    <div className="slides">
      {slides.map((slide, index) => (
        <Slide
          key={`slide ${index}`}
          slide={slide}
          x={x}
          transitionDuration={transitionDuration}
          numberOfSlidesOnPage={isSmallScreen ? numberOfSlidesOnPageMobile : numberOfSlidesOnPage}
        />
      ))}
    </div>
  );
};

export default Slides;
