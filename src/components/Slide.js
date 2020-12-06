import React from 'react';

const Slide = props => {
  const {
    slide: { heading, description, image },
    x,
  } = props;
  return (
    <div className={`slide`} style={{ transform: `translateX(${x}%)` }}>
      <div>{heading}</div>
      <div>{description}</div>
      <div>
        <img src={image} alt="" width="100%" />
      </div>
    </div>
  );
};

export default Slide;
