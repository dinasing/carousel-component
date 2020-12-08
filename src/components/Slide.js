import React from 'react';

const Slide = props => {
  const {
    slide: { heading, description, image },
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
      <div>{heading}</div>
      <div>{description}</div>
      <div>
        <img src={image} alt="" width="100%" height="auto" />
      </div>
    </div>
  );
};

export default Slide;
