import { useState, useEffect } from 'react'
import examples from '../examples/examples'

const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'https://deploy-preview-1--thriving-zuccutto-5ad917.netlify.app'
    : 'https://main--thriving-zuccutto-5ad917.netlify.app'

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
      const filePath = `${BASE_URL}/examples/${selectedExampleCategory.toLowerCase()}.ts`
      console.log('filePath', filePath)
      console.log('selectedFunctionName', selectedFunctionName)

      fetch(filePath)
        .then((response) => response.text())
        .then((text) => {
          // Function to parse the function text and extract details
          const functionMatch = parseFunctionText(
            text,
            selectedFunctionName,
            selectedExampleCategory,
          )
          console.log('functionMatch', functionMatch)

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
const parseFunctionText = (
  text,
  selectedFunctionName,
  selectedExampleCategory,
) => {
  console.log('Starting parseFunctionText with:', {
    selectedFunctionName,
    selectedExampleCategory,
    textLength: text.length,
  })

  // First, find the top-level category (Elements, Assets, etc.)
  const topLevelRegex = new RegExp(
    `export const ${selectedExampleCategory}\\s*=\\s*{([^}]*)}`,
    'gs',
  )

  console.log('Looking for top level category:', selectedExampleCategory)

  // Get the content of the top-level category
  const topLevelMatch = topLevelRegex.exec(text)
  if (!topLevelMatch) {
    console.error('Top level category not found:', selectedExampleCategory)
    throw new Error(`Category "${selectedExampleCategory}" not found.`)
  }

  let searchText = topLevelMatch[1]
  console.log('Found top level category, content length:', searchText.length)

  // Handle nested function names (e.g., "elementManagement.setSelectedElement")
  const [category, funcName] = selectedFunctionName.includes('.')
    ? selectedFunctionName.split('.')
    : [null, selectedFunctionName]

  console.log('Parsed function name:', { category, funcName })

  // If we have a subcategory, extract that section
  if (category) {
    const categoryRegex = new RegExp(`${category}:\\s*{([^}]*)}`, 'gs')
    const categoryMatch = categoryRegex.exec(searchText)
    console.log('Subcategory match found:', !!categoryMatch)

    if (!categoryMatch) {
      console.error('Subcategory not found:', category)
      throw new Error(`Subcategory "${category}" not found.`)
    }
    searchText = categoryMatch[1]
  }

  // Regex to find all async function definitions
  const funcRegex = /(\w+):\s+async\s*\(\s*.*?\)\s*=>\s*{(.*?)}/gs

  // Match all function definitions in the search text
  const matches = [...searchText.matchAll(funcRegex)]
  console.log('Found function matches:', matches.length)

  // Find the match for the selected function
  const selectedFunctionMatch = matches.find(
    (match) => match[1] === (funcName || selectedFunctionName),
  )

  console.log('Selected function match:', {
    found: !!selectedFunctionMatch,
    functionName: funcName || selectedFunctionName,
  })

  // If the function is not found, throw an error
  if (!selectedFunctionMatch) {
    throw new Error(`Function "${funcName || selectedFunctionName}" not found.`)
  }

  // Get the index of the selected function in the matches
  const selectedFunctionIndex = matches.findIndex(
    (match) => match[1] === (funcName || selectedFunctionName),
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
    ? searchText.indexOf(nextFunctionText)
    : searchText.length

  // Extract everything from the function text up to the end index
  let extractedText = searchText
    .slice(searchText.indexOf(functionText), endIndex)
    .trim()

  // Remove the trailing "}" if this is the last function in the file
  if (!nextFunctionText) {
    extractedText = extractedText.replace(/\s*}$/, '')
  }
  console.log('extractedText', extractedText)
  return extractedText
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
