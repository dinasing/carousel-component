import React from 'react';

const RightControl = props => {
  return (
    <div onClick={props.onRightButtonClick} className="control right">
      <div className="arrow right">{'>'}</div>
    </div>
  );
};

export default RightControl;
