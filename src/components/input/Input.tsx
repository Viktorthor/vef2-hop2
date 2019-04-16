import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';


export default function Input(props:any) {
  const { label, type, onChange} = props;
  return (
    <div className = "input">
      <legend className = "register__label">{label}</legend>
      <input type={type} onChange={onChange}/>
    </div>
  );
}
