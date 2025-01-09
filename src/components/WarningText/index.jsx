import './index.css'
import React from 'react';

const WarningText  = ({ text, style }) => {

  return (
    <label className='error' style={style}>{text}</label>
  );
};

export default WarningText;
