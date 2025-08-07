import type { ChangeEvent } from 'react'
import type {
  DynamicEnumValue,
  VariableCollectionInfo,
} from '../types/dynamic-enums'
import {
  isVariableCollectionInfo,
  isVariableInfo,
  isComponentInfo,
  isPageInfo,
  isAssetInfo,
  isStyleInfo,
  isDynamicEnumValue,
} from '../types/dynamic-enums'
import React from 'react'
import SearchableDropdown from './SearchableDropdown'

// Define proper type for inputConfig
interface InputConfigType {
  [key: string]: {
    type: string
    className: string
  }
}

// Interface for dependent parameter options
interface DependentOptions {
  dependsOn?: string // The parameter name this input depends on
  dependentValue?: any // The current value of the parameter this input depends on
  getDependentOptions?: (dependentValue: any) => Promise<any[]> // Function to get options based on dependent value
}

const inputConfig: InputConfigType = {
  text: {
    type: 'text',
    className: 'w-input',
  },
  string: {
    type: 'text',
    className: 'w-input',
  },
  file: {
    type: 'file',
    className: 'w-file-upload-input',
  },
  File: {
    type: 'file',
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
        const input = e.target as HTMLInputElement
        const files = input.files
        if (files && files.length > 0) {
          onChange(name, files[0])
        }
        return
      }

      if (inputType === 'enum' || isDynamicEnum) {
        const selectedValue = e.target.value
        console.log(`ParameterInput ${name}: selectedValue =`, selectedValue)
        console.log(`ParameterInput ${name}: options =`, options)
        
        const selectedOption = options.find((opt) => {
          if (typeof opt === 'string') return opt === selectedValue
          return opt.id === selectedValue
        })

        console.log(`ParameterInput ${name}: selectedOption =`, selectedOption)
        console.log(`ParameterInput ${name}: final value =`, selectedOption || selectedValue)
        
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
      // Use searchable dropdown if there are many options (more than 10)
      const shouldUseSearchable = options.length > 10

      if (shouldUseSearchable) {
        return (
          <SearchableDropdown
            options={options}
            value={value}
            onChange={(selectedValue) => onChange(name, selectedValue)}
            placeholder={effectivePlaceholder}
            disabled={disabled || loading}
            loading={loading}
            className={config.className}
          />
        )
      }

      // Use regular select for fewer options
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
  },
)

ParameterInput.displayName = 'ParameterInput'

export default ParameterInput
