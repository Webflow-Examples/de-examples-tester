import React from 'react'
import Dropdown from './dropdown'

// Define the type for the options used in the dropdowns
interface Option {
  value: string
  label: string
}

// Define the props for the FunctionSelector component
interface FunctionSelectorProps {
  exampleCategories: Option[] // Array of options for categories
  functionSelections: Option[] // Array of options for functions
  selectedExampleCategory: string // The currently selected category
  selectedFunctionName: string // The currently selected function name
  onCategoryChange: (value: string) => void // Handler for when the category changes
  onFunctionChange: (value: string) => void // Handler for when the function changes
}

const FunctionSelector: React.FC<FunctionSelectorProps> = ({
  exampleCategories,
  functionSelections,
  selectedExampleCategory,
  selectedFunctionName,
  onCategoryChange,
  onFunctionChange,
}) => (
  <>
    <p>Select an API category</p>
    <Dropdown
      options={exampleCategories}
      selectedValue={selectedExampleCategory}
      onValueChange={onCategoryChange}
    />
    <p>Select an API method</p>
    <Dropdown
      options={functionSelections}
      selectedValue={selectedFunctionName}
      onValueChange={onFunctionChange}
    />
  </>
)

export default FunctionSelector
