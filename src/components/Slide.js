import React from 'react';

const Slide = props => {
  const {
    slide: { heading, description, image },
  } = props;
  return (
    <div className={`slide`}>
      <div>{heading}</div>
      <div>{description}</div>
      <div>
        <img src={image} alt="" width="100%" height="auto" />
      </div>
    </div>
  );
};

export default Slide;
