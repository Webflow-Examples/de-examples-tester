import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { Alert, Box, Typography } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'

// Import hooks
import { useFunctionCode } from './hooks/useFunctionCode'
import CapabilitiesProvider from './context/CapabilitiesContext'

// Import Components
import examples from './examples/examples'
import Dropdown from './components/dropdown'
import ParameterInput from './components/parameterInput'
import enums from './examples/enums'

// Import Styling
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript.js'
import 'prismjs/components/prism-jsx.js'

const App = () => {
  const [selectedExampleCategory, setSelectedExampleCategory] = useState('')
  const [selectedFunctionName, setSelectedFunctionName] = useState('')
  const [launchContext, setLaunchContext] = useState(null)
  const [selectedElement, setSelectedElement] = useState(null)

  // Fetch function code and parameters
  const {
    functionCode,
    parameterNames,
    parameterTypes,
    functionParameters,
    setParameterNames,
    setFunctionParameters,
  } = useFunctionCode(selectedFunctionName, selectedExampleCategory)

  const exampleCategories = Object.keys(examples).map((key) => ({
    value: key,
    label: key,
  }))

  const functionSelections = selectedExampleCategory
    ? Object.entries(examples[selectedExampleCategory]).map(([key, value]) => {
        if (typeof value === 'object' && !('type' in value)) {
          // This is a category
          return {
            value: key,
            label: key.replace(/([A-Z])/g, ' $1').trim(), // Convert camelCase to spaces
            subcategories: Object.keys(value).map((subKey) => ({
              value: subKey,
              label: subKey.replace(/([A-Z])/g, ' $1').trim(),
            })),
          }
        }
        // This is a direct function
        return {
          value: key,
          label: key.replace(/([A-Z])/g, ' $1').trim(),
        }
      })
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

  useEffect(() => {
    async function checkLaunchContext() {
      const context = await webflow.getLaunchContext()
      setLaunchContext(context)

      // Get and store selected element
      const element = await webflow.getSelectedElement()
      setSelectedElement(element)

      if (context?.type === 'AppIntent') {
        // Handle different intent types
        if (context.value?.image === 'manage') {
          setSelectedExampleCategory('Elements')
          setSelectedFunctionName('getAltText')
          if (element?.type === 'Image') {
            await webflow.notify({
              type: 'Info',
              message: 'Managing image element settings',
            })
          }
        } else if (context.value?.form === 'manage') {
          setSelectedExampleCategory('Elements')
          setSelectedFunctionName('getChildren')
          await webflow.notify({
            type: 'Info',
            message: 'Managing form element settings',
          })
        }
      } else if (context?.type === 'AppConnection') {
        // Handle different connection types
        switch (context.value) {
          case 'manageImageElement':
            setSelectedExampleCategory('Elements')
            setSelectedFunctionName('getAltText')
            break
          case 'manageFormElement':
            setSelectedExampleCategory('Elements')
            setSelectedFunctionName('getChildren')
            break
        }
      }
    }

    checkLaunchContext()
  }, [])

  const handleFunctionExecutionWithoutParameters = () => {
    if (selectedExampleCategory && selectedFunctionName) {
      // Handle nested function names (e.g., "elementManagement.setSelectedElement")
      const [category, funcName] = selectedFunctionName.includes('.')
        ? selectedFunctionName.split('.')
        : [null, selectedFunctionName]

      // Get the top-level category
      const topCategory = examples[selectedExampleCategory]

      // Get the function to execute, handling nested categories
      const funcToExecute = category
        ? topCategory[category][funcName] // For nested functions like elementManagement.getSelectedElement
        : topCategory[selectedFunctionName] // For top-level functions

      if (funcToExecute && parameterNames.length === 0) {
        try {
          const result = funcToExecute()
          if (result && typeof result.then === 'function') {
            result.then(console.log).catch(console.error)
          } else {
            console.log(result)
          }
        } catch (error) {
          console.error('Error executing function:', error)
        }
      }
    }
  }

  const handleFunctionExecutionWithParameters = () => {
    if (selectedExampleCategory && selectedFunctionName) {
      // Retrieve the function to execute based on the currently selected category and function name
      const funcToExecute =
        examples[selectedExampleCategory][selectedFunctionName]

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

      {launchContext && (
        <Box sx={{ my: 2 }}>
          <Alert
            severity="info"
            icon={<InfoIcon />}
            sx={{
              backgroundColor: 'rgba(229, 246, 253, 0.5)',
              '& .MuiAlert-icon': {
                color: '#0288d1',
              },
              '& .MuiAlert-message': {
                width: '100%',
              },
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
              Launch Context
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: launchContext.value ? 1 : 0 }}
            >
              Launched via: {launchContext.type}
            </Typography>
            {launchContext.value && (
              <Typography
                variant="body2"
                sx={{
                  backgroundColor: 'rgba(229, 246, 253, 0.8)',
                  p: 1,
                  borderRadius: 1,
                  fontFamily: 'monospace',
                }}
              >
                {JSON.stringify(launchContext.value, null, 2)}
              </Typography>
            )}
          </Alert>
        </Box>
      )}

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
                Open your browser's console to view the output of the function.
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
