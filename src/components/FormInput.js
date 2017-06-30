import React from 'react';

const FormInput = ({ handleChange, labelName, type, name, value, placeholder}) => 
  <div>
    <label htmlFor={name}>{labelName}:</label>
    <input 
      onChange={handleChange}
      type={type} 
      name={name} 
      placeholder={placeholder}
      value={value} 
    />
  </div>;

export default FormInput;
