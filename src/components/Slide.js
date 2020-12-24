import React from 'react';
import PropTypes from 'prop-types';

const Slide = props => {
  const {
    slide: { content },
    x,
    transitionDuration,
    numberOfSlidesOnPage,
  } = props;

  const minWidth = 100 / numberOfSlidesOnPage;
  return (
    <div
      className="slide"
      style={{
        transform: `translateX(${x}%)`,
        transitionDuration,
        minWidth: `${minWidth}%`,
      }}
    >
      {content}
    </div>
  );
};

Slide.propTypes = {
  slide: PropTypes.object.isRequired,
  x: PropTypes.number.isRequired,
  numberOfSlidesOnPage: PropTypes.number.isRequired,
  transitionDuration: PropTypes.string.isRequired,
};

export default Slide;
