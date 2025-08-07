import React from 'react'
import ParameterInput from './parameterInput'
import { hasEnumProvider, hasObjectSelector } from '../examples/enums'

const APIExplorerParameter: React.FC<{
  name: string
  index: number
  paramType: string
  value: any
  onChange: (name: string, value: any) => void
  options: any[]
  isLoading: boolean
  error: Error | null
  isDynamicEnum: boolean
}> = ({
  name,
  paramType,
  value,
  onChange,
  options,
  isLoading,
  error,
  isDynamicEnum,
}) => {
  // Determine input type:
  // 1. Dynamic enums (VariableInfo) are handled via isDynamicEnum flag
  // 2. Static enums are detected via hasEnumProvider
  // 3. ObjectSelector types (Asset, Style, VariableCollection, Variable) are detected via hasObjectSelector
  // 4. VariableMode is handled specially since it depends on VariableCollection
  // 5. Special types (File, number) have their own input types
  // 6. Everything else is a text input
  const inputType =
    isDynamicEnum ||
    hasEnumProvider(paramType) ||
    hasObjectSelector(paramType) ||
    paramType === 'VariableMode'
      ? 'enum'
      : paramType === 'File'
        ? 'file'
        : paramType === 'number'
          ? 'number'
          : 'text'

  const placeholder = isLoading
    ? 'Loading...'
    : error
      ? `Error: ${error.message}`
      : `Enter ${name}`

  return (
    <ParameterInput
      name={name}
      value={value || ''}
      onChange={onChange}
      inputType={inputType}
      options={options}
      isDynamicEnum={isDynamicEnum}
      placeholder={placeholder}
      disabled={isDynamicEnum && (isLoading || !!error)}
      loading={isLoading}
    />
  )
}

export default APIExplorerParameter
