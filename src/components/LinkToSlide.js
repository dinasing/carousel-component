import React from 'react';

export default function LinkToSlide(props) {
  const { value, isActive } = props;

  return (
    <div onClick={props.goToSlide} className={`link-to-slide${isActive ? ' active' : ''}`}>
      {value}
    </div>
  );
}
