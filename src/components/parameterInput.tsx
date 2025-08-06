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
<<<<<<< Updated upstream
    className: 'w-file-upload',
    onChange:
      (name, onChange) =>
      (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
=======
    className: 'w-file-upload-input',
  },
  enum: {
    type: 'select',
    className: 'w-select',
  },
  dynamicEnum: {
    type: 'select',
    className: 'w-select',
  },
  number: {
    type: 'number',
    className: 'w-input',
  },
}

type ParameterInputProps = {
  name: string
  value?: string | DynamicEnumValue
  onChange: (name: string, value: any) => void
  placeholder?: string
  inputType: string
  options?: Array<string | DynamicEnumValue>
  disabled?: boolean
  strictEnum?: boolean
  isDynamicEnum?: boolean
  dependentOptions?: DependentOptions
  loading?: boolean
}

const ParameterInput: React.FC<ParameterInputProps> = React.memo(
  ({
    name,
    value,
    onChange,
    placeholder,
    inputType,
    options = [],
    disabled = false,
    strictEnum = false,
    isDynamicEnum = false,
    dependentOptions,
    loading = false,
  }) => {
    // Create a ref for the file input
    const fileInputRef = React.useRef<HTMLInputElement>(null)

    // Get the config based on inputType, falling back to text if not found
    const config =
      inputConfig[isDynamicEnum ? 'dynamicEnum' : inputType.toLowerCase()] ||
      inputConfig.text
    const effectivePlaceholder = loading
      ? 'Loading...'
      : placeholder || `Enter ${name}`
    const displayValue = isDynamicEnumValue(value) ? value.id : value || ''

    const handleChange = (
      e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
      if (inputType.toLowerCase() === 'file') {
>>>>>>> Stashed changes
        const input = e.target as HTMLInputElement
        const files = input.files
        if (files && files.length > 0) {
          onChange(name, files[0])
        }
<<<<<<< Updated upstream
      },
=======
        return
      }

      if (inputType === 'enum' || isDynamicEnum) {
        const selectedValue = e.target.value
        const selectedOption = options.find((opt) => {
          if (typeof opt === 'string') return opt === selectedValue
          return opt.id === selectedValue
        })
        onChange(name, selectedOption || selectedValue)
        return
      }

      onChange(name, e.target.value)
    }

    // Handle click on the file upload label/button
    const handleFileUploadClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click()
      }
    }

    // Get the display name for the file
    const getFileDisplayName = () => {
      if (!value) return ''
      if (value instanceof File) return value.name
      if (typeof value === 'string') return value
      if (isDynamicEnumValue(value)) return value.name
      return ''
    }

    if (inputType === 'enum' || isDynamicEnum) {
      return (
        <select
          className={config.className}
          value={displayValue}
          onChange={handleChange}
          disabled={disabled || loading}
        >
          <option value="" disabled>
            {effectivePlaceholder}
          </option>
          {options.map((option, index) => {
            if (typeof option === 'string') {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              )
            }

            if (isDynamicEnumValue(option)) {
              return (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              )
            }

            return null
          })}
        </select>
      )
    }

    // For file inputs, wrap in a div with proper Webflow file upload styling
    if (inputType.toLowerCase() === 'file') {
      const fileName = getFileDisplayName()

      return (
        <div className="w-file-upload">
          <div className="w-file-upload-default">
            <input
              ref={fileInputRef}
              type="file"
              id={`file-${name}`}
              name={name}
              className={config.className}
              onChange={handleChange}
              disabled={disabled}
              accept="*/*"
              style={{ display: 'none' }}
            />
            <button
              type="button"
              className="w-file-upload-button"
              onClick={handleFileUploadClick}
              disabled={disabled}
            >
              {effectivePlaceholder}
            </button>
          </div>
          {fileName && (
            <div className="w-file-upload-info">
              <div className="w-file-upload-file">
                <div className="w-file-upload-file-name">{fileName}</div>
              </div>
            </div>
          )}
        </div>
      )
    }

    return (
      <input
        type={config.type}
        className={config.className}
        value={displayValue}
        onChange={handleChange}
        placeholder={effectivePlaceholder}
        disabled={disabled}
      />
    )
>>>>>>> Stashed changes
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
}

const ParameterInput: React.FC<ParameterInputProps> = ({
  name,
  value,
  onChange,
  placeholder,
  inputType,
  options,
  disabled,
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
          disabled={disabled}
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
          disabled={disabled}
        />
      )}
    </>
  )
}

export default ParameterInput
