import { useState, useEffect } from 'react'
import examples from '../examples/examples'

export const useFunctionCode = (
  selectedFunctionName,
  selectedExampleCategory,
) => {
  const [functionCode, setFunctionCode] = useState('')
  const [parameterNames, setParameterNames] = useState([])
  const [functionParameters, setFunctionParameters] = useState({})

  useEffect(() => {
    // When there's a selected function and an example value
    if (selectedFunctionName && selectedExampleCategory) {
      // Get file for selected example category
      const filePath = `https://main--thriving-zuccutto-5ad917.netlify.app/examples/${selectedExampleCategory.toLowerCase()}.ts`
      fetch(filePath)
        .then((response) => response.text())
        .then((text) => {
          // Regex for finding the selected function within the text
          const functionRegex = new RegExp(
            `(\\s*${selectedFunctionName}:\\s*async\\s*\\(.*?\\)\\s*=>\\s*{[\\s\\S]*?},)`,
            'm',
          )

          // Find the function within the text
          const match = text.match(functionRegex)
          if (match && match[1]) {
            setFunctionCode(match[1]) // Set function code

            // Get function parameters
            const paramsRegex = new RegExp(
              `${selectedFunctionName}:\\s*async\\s*\\(([^)]+)\\)`,
            )
            const paramsMatch = match[1].match(paramsRegex)

            // When there are parameters - set Parameter Names and Function Parameters
            if (paramsMatch && paramsMatch[1]) {
              const params = paramsMatch[1]
                .split(',')
                .map((param) => param.trim())
              setParameterNames(params)
              setFunctionParameters(
                params.reduce((acc, param) => ({ ...acc, [param]: '' }), {}),
              )
            } else {
              // When there are NOT parameters - set Parameter Names and Function Parameters to empty
              setParameterNames([])
              setFunctionParameters({})

              // Get the function to execute
              const funcToExecute =
                examples[selectedExampleCategory][selectedFunctionName]

              // When there's a function, execute it
              if (funcToExecute) {
                const fetchData = async () => {
                  try {
                    const response = funcToExecute()
                    const data = await response
                    // Process your data
                  } catch (error) {
                    console.error('Failed to fetch:', error)
                  }
                }

                fetchData()
              }
            }
            // Where there's no selected function - send error message
          } else {
            // Otherwise set the code to "Not Found"
            setFunctionCode('Function code not found.')
          }
        })
        .catch((error) => {
          console.error('Failed to fetch function source:', error)
          setFunctionCode('')
        })
    } else {
      setFunctionCode('')
    }

  }, [selectedFunctionName, selectedExampleCategory])

  useEffect(() => {

    webflow.setExtensionSize({ height: 600,width : 500 })

  },[selectedFunctionName])

  return {
    functionCode,
    parameterNames,
    functionParameters,
    setFunctionParameters,
  }
}
