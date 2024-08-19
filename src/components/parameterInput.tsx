import React, { ChangeEvent } from 'react'

// Define proper type for inputConfig
// Define the type for the input configuration
interface InputConfigType {
  [key: string]: {
    type: string
    className: string
    // The onChange function needs to have different signatures depending on the element type
    onChange: (
      name: string,
      onChange: (name: string, value: any) => void,
    ) =>
      | ((e: ChangeEvent<HTMLInputElement>) => void)
      | ((e: ChangeEvent<HTMLSelectElement>) => void)
    placeholder?: string
    options?: string[]
  }
}

const inputConfig: InputConfigType = {
  string: {
    type: 'text',
    className: 'w-input',
    onChange: (name, onChange) => (e: ChangeEvent<HTMLInputElement>) =>
      onChange(name, e.target.value),
  },
  File: {
    type: 'file',
    className: 'w-file-upload',
    onChange: (name, onChange) => (e: ChangeEvent<HTMLInputElement>) =>
      onChange(name, e.target.files?.[0]),
  },
  enum: {
    type: 'select',
    className: 'w-select',
    onChange: (name, onChange) => (e: ChangeEvent<HTMLSelectElement>) =>
      onChange(name, e.target.value),
    placeholder: 'Select or type a file type',
  },
  number: {
    type: 'number',
    className: 'w-input',
    onChange: (name, onChange) => (e: ChangeEvent<HTMLInputElement>) =>
      onChange(name, e.target.value),
  },
}

type ParameterInputProps = {
  name: string
  value?: string
  onChange: (name: string, value: any) => void
  placeholder?: string
  inputType: string | File
  options?: string[] // options for the datalist or select
  datalistId: string | undefined
}

const ParameterInput: React.FC<ParameterInputProps> = ({
  name,
  value,
  onChange,
  placeholder,
  inputType,
  options,
  datalistId,
}) => {
  const config = inputConfig[inputType]

  return (
    <>
      {inputType === 'enum' && options?.length ? (
        <select
          name={name}
          className={config.className}
          value={value}
          onChange={(e) => onChange(name, e.target.value)} // Use the function directly
        >
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={config.type}
          className={config.className}
          value={inputType === 'file' ? undefined : value}
          onChange={config.onChange(name, onChange)} // Use the function directly
          placeholder={config.placeholder || placeholder}
          list={inputType === 'enum' ? `${name}-list` : undefined}
        />
      )}
    </>
  )
}

export default ParameterInput
