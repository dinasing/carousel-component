import React from 'react';
import PropTypes from 'prop-types';

export default function LinkToSlide(props) {
  const { value, isActive, goToSlide } = props;

  return (
    <div onClick={goToSlide} className={`link-to-slide${isActive ? ' active' : ''}`}>
      {value}
    </div>
  );
}

LinkToSlide.propTypes = {
  goToSlide: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};
