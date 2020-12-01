import React from 'react';

const Slide = props => {
  const {
    slide: { heading, description, image },
    isActive,
  } = props;
  return (
    <div className={`slide${isActive ? ' active' : ''}`}>
      <div>{heading}</div>
      <div>{description}</div>
      <div>
        <img src={image} alt="" width="100%" />
      </div>
    </div>
  );
};

export default Slide;
