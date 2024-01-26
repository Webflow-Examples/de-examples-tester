import React, { ChangeEvent } from 'react';

// Define the types for the props
type ParameterInputProps = {
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const ParameterInput: React.FC<ParameterInputProps> = ({ name, value, onChange, placeholder }) => (
  <input
    key={name}
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default ParameterInput;