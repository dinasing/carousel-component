import React from 'react';

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
      className={`slide`}
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

export default Slide;
