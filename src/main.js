import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

// Import hooks
import { useFunctionCode } from './hooks/useFunctionCode'

// Import Components
import examples from './examples/examples'
import Dropdown from './components/dropdown' // Importing the Dropdown component
import ParameterInput from './components/parameterInput'

// Import Styling
// import './App.css' // Importing the main CSS for the app
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'

const App = () => {
  // State variables to manage various aspects of the app
  const [selectedExampleCategory, setSelectedExampleCategory] = useState('')
  const [selectedFunctionName, setSelectedFunctionName] = useState('')
  const {
    functionCode,
    parameterNames,
    functionParameters,
    setFunctionParameters,
  } = useFunctionCode(selectedFunctionName, selectedExampleCategory)

  // Creating options for the dropdowns
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

  // Event Handlers
  const handleCategoryChange = (value) => {
    setSelectedExampleCategory(value)
    setSelectedFunctionName('') // Resetting the selected function name
  }

  const handleFunctionChange = (value) => {
    setSelectedFunctionName(value)
  }

  const handleParameterChange = (paramName, value) => {
    setFunctionParameters((prev) => ({ ...prev, [paramName]: value }))
  }

  const handleFunctionExecutionWithParameters = () => {
    const funcToExecute =
      examples[selectedExampleCategory][selectedFunctionName]

    if (funcToExecute) {
      try {
        const paramValues = parameterNames.map(
          (name) => functionParameters[name],
        )
        funcToExecute(...paramValues).then((result) => console.log(result))
      } catch (error) {
        console.error('Error executing function:', error)
      }
    }
  }

  // Load Prism styling
  useEffect(() => {
    Prism.highlightAll()
  }, [functionCode])

  // Set extension size on load
  useEffect(() => {
    // Setting the size for the webflow extension
    webflow.setExtensionSize({ height: 425, width: 500 })
  }, [])

  return (
    <div id="container" className={`container u-pt-1`}>
        <h1 className={`strong h2`}>
          Webflow <br></br>Designer API Playground
        </h1>
        <p>Select an API category</p>
        {/* Dropdown for selecting an example category */}
        <Dropdown
          options={exampleCategories}
          selectedValue={selectedExampleCategory}
          onValueChange={handleCategoryChange}
        />
        <p>Select an API method</p>
        {/* Dropdown for selecting a function to run */}
        <Dropdown
          options={functionSelections}
          selectedValue={selectedFunctionName}
          onValueChange={handleFunctionChange}
        />
        {/* Input and button for functions that require a parameter */}
        <div id="inputs" className={`w-container`}>
          {parameterNames.length > 0 &&
            parameterNames.map((name) => (
              <ParameterInput
                key={name}
                name={name}
                value={functionParameters[name]}
                onChange={(e) => handleParameterChange(name, e.target.value)}
                placeholder={`Enter ${name}`}
              />
            ))}
          {parameterNames.length > 0 && (
            <button onClick={handleFunctionExecutionWithParameters} className={`button cc-primary`}>
              Run Function
            </button>
          )}
        </div>
        {/* Displaying the source code of the selected function */}
        {selectedFunctionName && (
          <div id="code" className={`w-container`}>
            <div className={`u-pt-1`}></div>
            <label>Source Code</label>
            <p><small><i>Open your browser’s console to view the output of the function.</i></small></p>
            <pre className="small-code-block">
              <code className="language-typescript">{functionCode}</code>
            </pre>
          </div>
        )}
    </div>
  )
}

// Rendering the App component into the root element
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
