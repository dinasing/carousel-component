import React from 'react';
import LinksContainer from './LinksContainer';
import Slide from './Slide';

const Slides = props => {
  const { slides, currentItemIndex } = props;

  return (
    <div className="slides">
      {slides.map((slide, index) => (
        <Slide key={`slide ${index}`} slide={slide} />
      ))}
      <LinksContainer
        goToSlide={props.goToSlide}
        length={slides.length}
        currentItemIndex={currentItemIndex}
      />
    </div>
  );
};

export default Slides;
