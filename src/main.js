import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

// Import hooks
import { useFunctionCode } from './hooks/useFunctionCode'

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
  const {
    functionCode,
    parameterNames,
    parameterTypes,
    functionParameters,
    setFunctionParameters,
    setParameterNames,
  } = useFunctionCode(selectedFunctionName, selectedExampleCategory)

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
    if (selectedExampleCategory && selectedFunctionName) {
      const category = examples[selectedExampleCategory]
      const funcToExecute = category
        ? category[selectedFunctionName]
        : undefined

      if (funcToExecute && parameterNames.length === 0) {
        try {
          const result = funcToExecute() // Execute if no parameters are needed
          if (result && typeof result.then === 'function') {
            // result.then(console.log).catch(console.error)
          } else {
            console.log(result)
          }
        } catch (error) {
          console.error('Error executing function:', error)
        }
      }
    }
  }, [selectedFunctionName, selectedExampleCategory])

  const handleFunctionExecutionWithParameters = () => {
    // Retrieve the function to execute based on the currently selected category and function name
    const funcToExecute =
      examples[selectedExampleCategory][selectedFunctionName]

    if (funcToExecute) {
      // Check if the function exists
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
            result
              // .then(console.log) // Log the result of the Promise when it resolves
              .catch(console.error) // Catch and log any errors that occur during Promise execution
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
    const valuesArray = Object.values(enumObj);
  
    // Prepend the placeholder item to the beginning of the array
    return ["Select an option", ...valuesArray];
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
            ></ParameterInput>
          ))}
        {parameterNames.length > 0 && (
          <button
            onClick={handleFunctionExecutionWithParameters}
            className="button cc-primary"
          >
            Run Function
          </button>
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
root.render(<App />)
