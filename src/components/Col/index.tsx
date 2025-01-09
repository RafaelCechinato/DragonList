import React from 'react';
import './index.css'

const Col  = ({ children, col = 12, style, className }) => {

  return (
    <div style={style} className={`col col-${col} ${className}`}>
      {children}
    </div>
  );
};

export default Col;
