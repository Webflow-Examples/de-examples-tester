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
import utilitiesRaw from '../examples/utilities.ts?raw'

interface RawFilesMap {
  [key: string]: string
}

// Map category names to their raw file contents
const RAW_FILES_MAP: RawFilesMap = {
  assets: assetsRaw,
  components: componentsRaw,
  elements: elementsRaw,
  folders: foldersRaw,
  pages: pagesRaw,
  payments: paymentsRaw,
  styles: stylesRaw,
  variables: variablesRaw,
  utilities: utilitiesRaw,
}

interface FunctionMatch {
  params: string[]
  types: string[]
}

// This hook is responsible for fetching and parsing function code, and extracting parameters.
export const useFunctionCode = (
  selectedFunctionName: string,
  selectedExampleCategory: string,
) => {
  const [functionCode, setFunctionCode] = useState('')
  const [parameterNames, setParameterNames] = useState<string[]>([])
  const [parameterTypes, setParameterTypes] = useState<string[]>([])
  const [functionParameters, setFunctionParameters] = useState<
    Record<string, string>
  >({})

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
  text: string,
  selectedFunctionName: string,
  selectedExampleCategory: string,
): string | null => {
  // First, find the top-level category (Elements, Assets, etc.)
  const findMatchingBrace = (str: string, startIndex: number): number => {
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

  if (category) {
    // For nested functions, first find the category object
    const categoryStart = searchText.indexOf(`${category}: {`)
    if (categoryStart === -1) return null

    const categoryContentStart = categoryStart + `${category}: {`.length
    const categoryContentEnd = findMatchingBrace(
      searchText,
      categoryContentStart,
    )
    searchText = searchText.slice(categoryContentStart, categoryContentEnd)
  }

  // Now find the function definition
  const functionName = category ? funcName : selectedFunctionName
  const functionStart = searchText.indexOf(`${functionName}: `)
  if (functionStart === -1) return null

  const functionContentStart = functionStart + `${functionName}: `.length

  // Detect { displayName, code } object structure
  const afterColon = searchText.slice(functionContentStart).replace(/^\s+/, '')
  if (afterColon.startsWith('{')) {
    // Find 'code: ' within this method's object
    const codeMarker = 'code: '
    const codePropertyIndex = searchText.indexOf(codeMarker, functionContentStart)
    if (codePropertyIndex !== -1) {
      const codeContentStart = codePropertyIndex + codeMarker.length
      // Find the opening { of the code function
      const fnOpenBrace = searchText.indexOf('{', codeContentStart)
      if (fnOpenBrace !== -1) {
        const fnCloseEnd = findMatchingBrace(searchText, fnOpenBrace + 1)
        // Include the function signature (async (...) => ) plus the body
        const fnSignature = searchText.slice(codeContentStart, fnOpenBrace)
        const fnBody = searchText.slice(fnOpenBrace, fnCloseEnd)
        return `${functionName}: ${fnSignature}${fnBody}`
      }
    }
  }

  const functionContentEnd = findMatchingBrace(searchText, functionContentStart)
  return searchText.slice(functionStart, functionContentEnd)
}

// Utility function to strip function wrapper
const stripFunctionWrapper = (code: string): string => {
  // Remove the function name and async/arrow function syntax
  code = code.replace(/^[^{]*{/, '')
  code = code.replace(/}[^}]*$/, '')

  // Dedent: find the minimum indentation of non-empty lines and strip it uniformly
  const lines = code.split('\n')
  const nonEmptyLines = lines.filter((line) => line.trim().length > 0)
  if (nonEmptyLines.length > 0) {
    const minIndent = Math.min(
      ...nonEmptyLines.map((line) => line.match(/^(\s*)/)?.[1].length ?? 0),
    )
    if (minIndent > 0) {
      code = lines
        .map((line) => (line.length >= minIndent ? line.slice(minIndent) : line))
        .join('\n')
    }
  }

  // Remove leading/trailing whitespace
  code = code.trim()

  return code
}

// Utility function to extract parameters
const extractParameters = (functionText: string): FunctionMatch => {
  const params: string[] = []
  const types: string[] = []

  // Extract parameters from the function definition
  // Handle both async and non-async functions
  const paramMatch = functionText.match(/(?:async\s*)?\(\s*([^)]*?)\s*\)/)
  if (paramMatch && paramMatch[1]) {
    const paramList = paramMatch[1].split(',')
    paramList.forEach((param) => {
      const trimmedParam = param.trim()
      if (trimmedParam) {
        const colonIndex = trimmedParam.indexOf(':')
        if (colonIndex > 0) {
          const name = trimmedParam.substring(0, colonIndex).trim()
          const type = trimmedParam.substring(colonIndex + 1).trim()
          params.push(name)
          types.push(type)
        }
      }
    })
  }

  return { params, types }
}
