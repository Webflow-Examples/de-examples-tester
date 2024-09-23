import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'

// Import hooks
import { useFunctionCode } from './hooks/useFunctionCode'
import { useMethodAnalysis } from './hooks/useMethodAnalysis'
import { usePermissionCheck } from './hooks/usePermissionCheck'
import CapabilitiesProvider from './context/CapabilitiesContext'

// Import Components
import examples from './examples/examples'
import Dropdown from './components/dropdown'
import ParameterInput from './components/parameterInput'
import enums from './examples/enums'

// Import Styling
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'

const App = () => {
  const [selectedExampleCategory, setSelectedExampleCategory] = useState('')
  const [selectedFunctionName, setSelectedFunctionName] = useState('')

  // Fetch function code and parameters
  const {
    functionCode,
    parameterNames,
    parameterTypes,
    functionParameters,
    setParameterNames,
    setFunctionParameters,
  } = useFunctionCode(selectedFunctionName, selectedExampleCategory)

  // Analyze method calls and variable types
  const { methodCalls } = useMethodAnalysis(functionCode)

  // Check permissions for the extracted methods
  const hasPermission = usePermissionCheck(methodCalls)

  const exampleCategories = Object.keys(examples).map((key) => ({
    value: key,
    label: key,
  }))

  const functionSelections = selectedExampleCategory
    ? Object.keys(examples[selectedExampleCategory]).map((key) => ({
        value: key,
        label: key,
      }))
    : []

  const handleCategoryChange = (value) => {
    setSelectedExampleCategory(value)
    setSelectedFunctionName('')
    setParameterNames([])
  }

  const handleFunctionChange = (value) => {
    setSelectedFunctionName(value)
  }

  const handleParameterChange = (paramName, value) => {
    setFunctionParameters((prev) => ({ ...prev, [paramName]: value }))
  }

  useEffect(() => {
    Prism.highlightAll()
  }, [functionCode])

  useEffect(() => {
    webflow.setExtensionSize({ height: 425, width: 500 })
  }, [])

  useEffect(() => {
    handleFunctionExecutionWithoutParameters()
  }, [selectedFunctionName, selectedExampleCategory])

  const handleFunctionExecutionWithoutParameters = () => {
    // Check if both a category and function name have been selected
    if (selectedExampleCategory && selectedFunctionName) {
      // Retrieve the category object from the examples using the selected category
      const category = examples[selectedExampleCategory]

      // Retrieve the function to be executed from the category using the selected function name
      const funcToExecute = category
        ? category[selectedFunctionName]
        : undefined

      // Check if a valid function is found and no parameters are required for execution
      if (funcToExecute && parameterNames.length === 0) {
        try {
          // Execute the function if no parameters are needed
          const result = funcToExecute()

          // Check if the result is a promise (i.e., async function) and handle accordingly
          if (result && typeof result.then === 'function') {
            // Handle promise (async function) result here if needed
          } else {
            // If the result is not a promise, log it directly
            console.log(result)
          }
        } catch (error) {
          // Catch and log any errors that occur during function execution
          console.error('Error executing function:', error)
        }
      }
    }
  }

  const handleFunctionExecutionWithParameters = () => {
    // Retrieve the category object from the examples using the selected category
    const category = examples[selectedExampleCategory]

    // Retrieve the function to execute based on the currently selected category and function name
    const funcToExecute = category ? category[selectedFunctionName] : undefined

    if (funcToExecute) {
      try {
        // If there are parameter names defined, map them to their respective values; otherwise, use an empty array
        const paramValues =
          parameterNames.length > 0
            ? parameterNames.map((name) => functionParameters[name])
            : []

        if (typeof funcToExecute === 'function') {
          // Check if the retrieved item is a function

          const result = funcToExecute(...paramValues) // Execute the function with the parameters

          if (result && typeof result.then === 'function') {
            // Check if the result is a Promise (asynchronous function)
            result.catch(console.error) // Catch and log any errors that occur during Promise execution
          } else {
            console.log(result) // Log the result for synchronous functions
          }
        }
      } catch (error) {
        console.error('Error executing function:', error) // Catch and log any errors that occur during the function call
      }
    }
  }

  const enumToArray = (enumObj) => {
    // Create an array from the enum object's values
    const valuesArray = Object.values(enumObj)

    // Prepend the placeholder item to the beginning of the array
    return ['Select an option', ...valuesArray]
  }
  return (
    <div id="container" className="container u-pt-1">
      <h1 className="strong h2">
        Webflow <br />
        Designer API Playground
      </h1>
      <p>Select an API category</p>
      <Dropdown
        options={exampleCategories}
        selectedValue={selectedExampleCategory}
        onValueChange={handleCategoryChange}
      />
      <p>Select an API method</p>
      <Dropdown
        options={functionSelections}
        selectedValue={selectedFunctionName}
        onValueChange={handleFunctionChange}
      />
      <div id="inputs" className="w-container">
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
              onChange={handleParameterChange}
              datalistId={
                parameterTypes[index].includes('Enum') ? `${name}` : undefined
              }
              options={
                parameterTypes[index].includes('Enum')
                  ? enumToArray(enums[parameterNames[index]])
                  : undefined
              }
              disabled={!hasPermission}
            ></ParameterInput>
          ))}
        {parameterNames.length > 0 && (
          <button
            onClick={handleFunctionExecutionWithParameters}
            className={`button cc-primary ${!hasPermission ? 'disabled-class' : ''}`}
            disabled={!hasPermission}
          >
            Run Function
          </button>
        )}
        {!hasPermission && (
          <p className="error-message">
            Please change designer mode to use this method.
          </p>
        )}
      </div>
      {selectedFunctionName && (
        <div id="code" className="w-container">
          <div className="u-pt-1"></div>
          <label>Source Code</label>
          <p>
            <small>
              <i>
                Open your browser’s console to view the output of the function.
              </i>
            </small>
          </p>
          <pre className="small-code-block">
            <code className="language-typescript">{functionCode}</code>
          </pre>
        </div>
      )}
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <CapabilitiesProvider>
    <App />
  </CapabilitiesProvider>,
)
