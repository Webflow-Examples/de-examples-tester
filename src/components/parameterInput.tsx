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
        const selectedOption = options.find((opt) => {
          if (typeof opt === 'string') return opt === selectedValue
          return opt.id === selectedValue
        })
        onChange(name, selectedOption || selectedValue)
        return
      }

      onChange(name, e.target.value)
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

    // For file inputs, we need to handle the value differently
    const inputValue =
      inputType.toLowerCase() === 'file' ? undefined : displayValue

    return (
      <input
        type={config.type}
        className={config.className}
        value={inputValue}
        onChange={handleChange}
        placeholder={effectivePlaceholder}
        disabled={disabled}
      />
    )
  },
)

ParameterInput.displayName = 'ParameterInput'

export default ParameterInput
