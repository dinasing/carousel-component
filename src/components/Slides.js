import React from 'react';
import Slide from './Slide';

const Slides = props => {
  const {
    slides,
    x,
    transitionDuration,
    numberOfSlidesOnPage,
    numberOfSlidesOnPageMobile,
    isMobile,
  } = props;

  return (
    <div className="slides">
      {slides.map((slide, index) => (
        <Slide
          key={`slide ${index}`}
          slide={slide}
          x={x}
          transitionDuration={transitionDuration}
          numberOfSlidesOnPage={isMobile ? numberOfSlidesOnPageMobile : numberOfSlidesOnPage}
        />
      ))}
    </div>
  );
};

export default Slides;
