import React from 'react';

const Control = props => {
  const { handler, className, icon } = props;

  return (
    <div onClick={handler} className={className}>
      {icon}
    </div>
  );
};

export default Control;
