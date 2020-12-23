import React from 'react';
import PropTypes from 'prop-types';
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
      {slides.map(slide => (
        <Slide
          key={`slide ${slide.id}`}
          slide={slide}
          x={x}
          transitionDuration={transitionDuration}
          numberOfSlidesOnPage={isMobile ? numberOfSlidesOnPageMobile : numberOfSlidesOnPage}
        />
      ))}
    </div>
  );
};

Slides.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
  x: PropTypes.number.isRequired,
  numberOfSlidesOnPage: PropTypes.number.isRequired,
  numberOfSlidesOnPageMobile: PropTypes.number.isRequired,
  isMobile: PropTypes.bool.isRequired,
  transitionDuration: PropTypes.string.isRequired,
};

export default Slides;
