import React from 'react';
import PropTypes from 'prop-types';
import LinkToSlide from './LinkToSlide';

export default function LinksContainer(props) {
  const { currentItemIndex, length } = props;

  const links = [];
  for (let index = 1; index <= length; index += 1) {
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

LinksContainer.propTypes = {
  currentItemIndex: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  goToSlide: PropTypes.func.isRequired,
};
