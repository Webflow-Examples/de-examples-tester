import React from 'react'
import ParameterInput from './parameterInput'
import enums from '../examples/enums'

// Define the props for the ParameterManager component
interface ParameterManagerProps {
  parameterNames: Array<keyof typeof enums> // Array of parameter names
  parameterTypes: string[] // Array of parameter types
  functionParameters: { [key: string]: any } // Object to store parameter values
  onParameterChange: (paramName: string, value: any) => void // Handler for when a parameter value changes
}

const ParameterManager: React.FC<ParameterManagerProps> = ({
  parameterNames,
  parameterTypes,
  functionParameters,
  onParameterChange,
}) => (
  <>
    {parameterNames.length > 0 &&
      parameterNames.map((name, index) => (
        <ParameterInput
          key={name}
          name={name}
          inputType={
            parameterTypes[index].includes('Enum')
              ? 'enum'
              : parameterTypes[index]
          }
          placeholder={`Enter ${name}`}
          onChange={(value) => onParameterChange(name, value)}
          datalistId={
            parameterTypes[index].includes('Enum') ? `${name}` : undefined
          }
          options={
            parameterTypes[index].includes('Enum')
              ? enumToArray(enums[parameterNames[index]])
              : undefined
          }
        />
      ))}
  </>
)

// Helper function to convert an enum object into an array with a placeholder
const enumToArray = (enumObj: Record<string, string | number>): string[] => {
  // Create an array from the enum object's values
  const valuesArray = Object.values(enumObj).map((value) => String(value))

  // Prepend the placeholder item to the beginning of the array
  return ['Select an option', ...valuesArray]
}

export default ParameterManager
