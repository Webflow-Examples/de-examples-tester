import { useState, useEffect } from 'react'
import examples from '../examples/examples'

// Import raw TypeScript files using Vite's ?raw suffix
import assetsRaw from '../examples/assets.ts?raw'
import componentsRaw from '../examples/components.ts?raw'
import elementsRaw from '../examples/elements.ts?raw'
import foldersRaw from '../examples/folders.ts?raw'
import pagesRaw from '../examples/pages.ts?raw'
import paymentsRaw from '../examples/payments.ts?raw'
import stylesRaw from '../examples/styles.ts?raw'
import variablesRaw from '../examples/variables.ts?raw'
import webflowRaw from '../examples/utilities.ts?raw'

// Map category names to their raw file contents
const RAW_FILES_MAP = {
  assets: assetsRaw,
  components: componentsRaw,
  elements: elementsRaw,
  folders: foldersRaw,
  pages: pagesRaw,
  payments: paymentsRaw,
  styles: stylesRaw,
  variables: variablesRaw,
  webflow: webflowRaw,
}

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
      // Get the raw file content from the imported files
      const rawFileContent =
        RAW_FILES_MAP[selectedExampleCategory.toLowerCase()]

      if (rawFileContent) {
        try {
          // Function to parse the function text and extract details
          const functionMatch = parseFunctionText(
            rawFileContent,
            selectedFunctionName,
            selectedExampleCategory,
          )

          if (functionMatch) {
            let extractedCode = functionMatch
              .replace(`${selectedFunctionName}:`, '')
              .replace(/,\s*$/, '')

            // Strip the function wrapper to show only the body content
            extractedCode = stripFunctionWrapper(extractedCode)
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
        } catch (error) {
          console.error('Failed to parse function source:', error)
          setFunctionCode('Error parsing function code.')
          setParameterNames([])
          setParameterTypes([])
          setFunctionParameters({})
        }
      } else {
        console.error(
          'Raw file not found for category:',
          selectedExampleCategory,
        )
        setFunctionCode('Example category not found.')
        setParameterNames([])
        setParameterTypes([])
        setFunctionParameters({})
      }
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
  // First, find the top-level category (Elements, Assets, etc.)
  const findMatchingBrace = (str, startIndex) => {
    let braceCount = 1
    let i = startIndex

    while (i < str.length && braceCount > 0) {
      if (str[i] === '{') braceCount++
      if (str[i] === '}') braceCount--
      i++
    }

    return i
  }

  // Find the start of the category
  const categoryStart = text.indexOf(
    `export const ${selectedExampleCategory} = {`,
  )
  if (categoryStart === -1) {
    console.error('Top level category not found:', selectedExampleCategory)
    throw new Error(`Category "${selectedExampleCategory}" not found.`)
  }

  // Find the matching closing brace
  const contentStart =
    categoryStart + `export const ${selectedExampleCategory} = {`.length
  const contentEnd = findMatchingBrace(text, contentStart)

  // Extract everything between the braces
  let searchText = text.slice(contentStart, contentEnd)

  // Handle nested function names (e.g., "elementManagement.setSelectedElement")
  const [category, funcName] = selectedFunctionName.includes('.')
    ? selectedFunctionName.split('.')
    : [null, selectedFunctionName]

  // If we have a subcategory, extract that section
  if (category) {
    // Find the start of the subcategory
    const subcategoryStart = searchText.indexOf(`${category}:`)
    if (subcategoryStart === -1) {
      console.error('Subcategory not found:', category)
      throw new Error(`Subcategory "${category}" not found.`)
    }

    // Find the opening brace
    const braceStart = searchText.indexOf('{', subcategoryStart)
    if (braceStart === -1) {
      throw new Error(`No opening brace found for subcategory "${category}"`)
    }

    // Find the matching closing brace using our existing helper
    const subcategoryEnd = findMatchingBrace(searchText, braceStart + 1)

    // Extract everything between the braces
    searchText = searchText.slice(braceStart + 1, subcategoryEnd - 1)
  }

  // Regex to find all function definitions
  const funcRegex = /(\w+):\s*(async\s*)?\(\s*.*?\)\s*=>\s*{(.*?)}/gs

  // Match all function definitions in the search text
  const matches = [...searchText.matchAll(funcRegex)]

  // Find the match for the selected function
  const selectedFunctionMatch = matches.find(
    (match) => match[1] === (funcName || selectedFunctionName),
  )

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
  return extractedText
}

// Utility function to strip the async function wrapper and show only the body
const stripFunctionWrapper = (code) => {
  // Remove leading whitespace
  let cleanedCode = code.trim()

  // Remove the async function wrapper pattern: async (...params) => {
  // This regex matches: optional 'async', optional whitespace, optional params in parentheses, '=>', '{'
  const functionWrapperRegex = /^\s*async\s*\([^)]*\)\s*=>\s*\{/
  if (functionWrapperRegex.test(cleanedCode)) {
    // Remove the function declaration part
    cleanedCode = cleanedCode.replace(functionWrapperRegex, '')

    // Remove the trailing closing brace and any trailing comma/whitespace
    cleanedCode = cleanedCode.replace(/\s*\}\s*,?\s*$/, '')
  }

  // Clean up any extra leading/trailing whitespace
  cleanedCode = cleanedCode.trim()

  return cleanedCode
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
          result.catch(console.error)
        } else {
          console.log(result)
        }
      } catch (error) {
        console.error('Error executing function:', error)
      }
    }
  }
}
