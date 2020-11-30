import React from 'react';

const Slide = props => {
  const { heading, description, image } = props.slide;

  return (
    <div className="slide">
      <div>{heading}</div>
      <div>{description}</div>
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Slide;
