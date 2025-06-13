import React, { ChangeEvent } from 'react'

// Define proper type for inputConfig
interface InputConfigType {
  [key: string]: {
    type: string
    className: string
    onChange: (
      name: string,
      onChange: (name: string, value: any) => void,
    ) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    placeholder?: string
    options?: string[]
  }
}

const inputConfig: InputConfigType = {
  string: {
    type: 'text',
    className: 'w-input',
    onChange:
      (name, onChange) =>
      (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
        onChange(name, e.target.value),
  },
  File: {
    type: 'file',
    className: 'w-file-upload',
    onChange:
      (name, onChange) =>
      (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const input = e.target as HTMLInputElement
        const files = input.files
        if (files && files.length > 0) {
          onChange(name, files[0])
        }
      },
  },
  enum: {
    type: 'select',
    className: 'w-select',
    onChange:
      (name, onChange) =>
      (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
        onChange(name, e.target.value),
    placeholder: 'Select or type a file type',
  },
  number: {
    type: 'number',
    className: 'w-input',
    onChange:
      (name, onChange) =>
      (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
        onChange(name, e.target.value),
  },
}

type ParameterInputProps = {
  name: string
  value?: string
  onChange: (name: string, value: any) => void
  placeholder?: string
  inputType: string
  options?: string[]
  disabled?: boolean
  strictEnum?: boolean
}

const ParameterInput: React.FC<ParameterInputProps> = ({
  name,
  value,
  onChange,
  placeholder,
  inputType,
  options,
  disabled,
  strictEnum = false,
}) => {
  const config = inputConfig[inputType]

  if (!config) {
    // Fallback: render a basic text input if config is undefined
    return (
      <input
        type="text"
        className="w-input"
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
      />
    )
  }

  // Strict enum: render a <select> dropdown
  if (inputType === 'enum' && strictEnum && options?.length) {
    return (
      <select
        className={config.className}
        value={value || ''}
        onChange={config.onChange(name, onChange)}
        disabled={disabled}
      >
        <option value="" disabled>
          {config.placeholder || placeholder || 'Select an option'}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    )
  }

  // Open enum: render <input> with <datalist>
  return (
    <>
      {inputType === 'enum' ? (
        <>
          <input
            type="text"
            className={config.className}
            value={value}
            onChange={config.onChange(name, onChange)}
            placeholder={config.placeholder || placeholder}
            list={`${name}-list`}
            disabled={disabled}
          />
          {options?.length ? (
            <datalist id={`${name}-list`}>
              {options.map((option, index) => (
                <option key={index} value={option} />
              ))}
            </datalist>
          ) : null}
        </>
      ) : (
        <input
          type={config.type}
          className={config.className}
          value={inputType === 'file' ? undefined : value}
          onChange={config.onChange(name, onChange)}
          placeholder={config.placeholder || placeholder}
          disabled={disabled}
        />
      )}
    </>
  )
}

export default ParameterInput
