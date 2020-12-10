import React from 'react';

const LeftControl = props => {
  return (
    <div onClick={props.onLeftButtonClick} className="arrow left">
      {'<'}
    </div>
  );
};

export default LeftControl;
