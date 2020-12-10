import React from 'react';

const RightControl = props => {
  return (
    <div onClick={props.onRightButtonClick} className="arrow right">
      {'>'}
    </div>
  );
};

export default RightControl;
