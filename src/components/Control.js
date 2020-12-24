import React from 'react';
import PropTypes from 'prop-types';

const Control = props => {
  const { handler, className, icon } = props;

  return (
    <div onClick={handler} className={className}>
      {icon}
    </div>
  );
};

Control.propTypes = {
  handler: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Control;
