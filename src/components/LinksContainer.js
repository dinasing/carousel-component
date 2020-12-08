import React from 'react';
import LinkToSlide from './LinkToSlide';

export default function LinksContainer(props) {
  const { currentItemIndex, length } = props;

  const links = [];
  for (let index = 1; index <= length; index++) {
    links.push(
      <LinkToSlide
        key={`link to slide # ${index}`}
        isActive={currentItemIndex === index}
        value={index}
        goToSlide={() => props.goToSlide(index)}
      />
    );
  }

  return <div className="links-container">{links}</div>;
}
