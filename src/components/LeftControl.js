import React from 'react';

const LeftControl = props => {
  return (
    <div onClick={onLeftButtonClick} className="control left">
      <div className="arrow left">{'<'}</div>
    </div>
  );
};

export default LeftControl;
