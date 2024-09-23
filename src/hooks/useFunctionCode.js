import { useState, useEffect } from 'react'
import examples from '../examples/examples'

// This hook is responsible for fetching and parsing function code, and extracting parameters.
export const useFunctionCode = (
  selectedFunctionName,
  selectedExampleCategory,
) => {
  const [functionCode, setFunctionCode] = useState('')
  const [parameterNames, setParameterNames] = useState([])
  const [parameterTypes, setParameterTypes] = useState([])
  const [functionParameters, setFunctionParameters] = useState({})

  useEffect(() => {
    if (selectedFunctionName && selectedExampleCategory) {
      const filePath = `https://main--thriving-zuccutto-5ad917.netlify.app/examples/${selectedExampleCategory.toLowerCase()}.ts`

      fetch(filePath)
        .then((response) => response.text())
        .then((text) => {
          // Function to parse the function text and extract details
          const functionMatch = parseFunctionText(text, selectedFunctionName)

          if (functionMatch) {
            let extractedCode = functionMatch
              .replace(`${selectedFunctionName}:`, '')
              .replace(/,\s*$/, '')
            setFunctionCode(extractedCode)

            const { params, types } = extractParameters(functionMatch)
            setParameterNames(params)
            setParameterTypes(types)

            // Initialize function parameters with empty values
            setFunctionParameters(
              params.reduce((acc, param) => ({ ...acc, [param]: '' }), {}),
            )
          } else {
            setFunctionCode('Function code not found.')
            setParameterNames([])
            setParameterTypes([])
            setFunctionParameters({})
          }
        })
        .catch((error) => {
          console.error('Failed to fetch function source:', error)
          setFunctionCode('')
          setParameterNames([])
          setParameterTypes([])
          setFunctionParameters({})
        })
    }
  }, [selectedFunctionName, selectedExampleCategory])

  return {
    functionCode,
    parameterNames,
    parameterTypes,
    functionParameters,
    setParameterNames,
    setFunctionParameters,
  }
}

// Utility function to parse function text
const parseFunctionText = (text, selectedFunctionName) => {
  // Regex to find all async function definitions in the export const object
  const funcRegex = /(\w+):\s+async\s*\(\s*.*?\)\s*=>\s*{(.*?)}/gs

  // Match all function definitions
  const matches = [...text.matchAll(funcRegex)]

  // Find the match for the selected function
  const selectedFunctionMatch = matches.find(
    (match) => match[1] === selectedFunctionName,
  )

  // If the function is not found, throw an error
  if (!selectedFunctionMatch) {
    throw new Error(`Function "${selectedFunctionName}" not found.`)
  }

  // Get the index of the selected function in the matches
  const selectedFunctionIndex = matches.findIndex(
    (match) => match[1] === selectedFunctionName,
  )

  // Get text for the selected function and everything up to the next function
  const functionText = selectedFunctionMatch[0].trim()

  // If there's a next function, extract text up to it; otherwise, use the end of the text
  const nextFunctionText =
    selectedFunctionIndex + 1 < matches.length
      ? matches[selectedFunctionIndex + 1][0]
      : null

  // Determine the end index for extraction
  const endIndex = nextFunctionText
    ? text.indexOf(nextFunctionText)
    : text.length

  // Extract everything from the function text up to the end index
  let extractedText = text.slice(text.indexOf(functionText), endIndex).trim()

  // Remove the trailing "}" if this is the last function in the file
  if (!nextFunctionText) {
    extractedText = extractedText.replace(/\s*}$/, '')
  }

  return extractedText // Return the extracted function text
}

// Utility function to extract parameters and types
const extractParameters = (functionMatch) => {
  const paramsRegex = /\(\s*([^)]*?)\s*\)\s*=>/
  const paramsMatch = paramsRegex.exec(functionMatch)
  const params = []
  const types = []
  if (paramsMatch) {
    const paramString = paramsMatch[1]
    const individualParamRegex = /(\w+)\s*:\s*(\w+)/g
    let paramMatch
    while ((paramMatch = individualParamRegex.exec(paramString))) {
      params.push(paramMatch[1])
      types.push(paramMatch[2])
    }
  }
  return { params, types }
}
