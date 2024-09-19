import { useState, useEffect } from 'react'
import * as acorn from 'acorn'
import * as walk from 'acorn-walk'
import acornTs from 'acorn-typescript'

import examples from '../examples/examples'
import { permissionsMap } from '../components/PermissionsMap'
import { useCapabilities } from '../context/CapabilitiesContext'

export const useFunctionCode = (
  selectedFunctionName,
  selectedExampleCategory,
) => {
  const [functionCode, setFunctionCode] = useState('')
  const [parameterNames, setParameterNames] = useState([])
  const [parameterTypes, setParameterTypes] = useState([])
  const [functionParameters, setFunctionParameters] = useState({})
  const [hasPermission, setHasPermission] = useState(true)
  const capabilities = useCapabilities()

  // Helper function to track variable assignments and method calls
  const extractMethodCallsAndVariableTypes = (code) => {
    // Remove leading variable assignments from the code
    const cleanedCode = code.replace(/^\s*\w+:\s*/, '')

    // Remove trailing commas from the end of object definitions
    const finalCode = cleanedCode.replace(/},\s*$/, '}')

    // Parse the cleaned code into an abstract syntax tree (AST) using Acorn
    const ast = acorn.Parser.extend(acornTs()).parse(finalCode, {
      ecmaVersion: 2020,
      allowAwaitOutsideFunction: true,
      sourceType: 'module', // Enable module-level parsing
    })

    // Initialize arrays and objects to store method calls and variable types
    const methodCalls = []
    const variableTypes = {}

    // Extend `acorn-walk` to handle missing visitors for TypeScript-specific nodes and async/await
    walk.base.AwaitExpression = (node, state, c) => {
      c(node.argument, state) // Continue walking the argument of AwaitExpression
    }

    walk.base.NewExpression = (node, state, c) => {
      c(node.callee, state) // Walk the callee of NewExpression
      for (const arg of node.arguments) {
        c(arg, state) // Walk each argument of NewExpression
      }
    }

    walk.base.CallExpression = (node, state, c) => {
      // Skip console calls to avoid tracking console.log and similar
      if (
        node.callee.type === 'MemberExpression' &&
        node.callee.object.name === 'console'
      ) {
        return
      }

      c(node.callee, state) // Walk the callee of CallExpression
      for (const arg of node.arguments) {
        c(arg, state) // Walk each argument of CallExpression
      }
    }

    // For TypeScript-specific type assertions
    walk.base.TSAsExpression = (node, state, c) => {
      c(node.expression, state) // Walk the expression in TSAsExpression
    }

    // Traverse the AST and collect method calls and variable types
    walk.simple(ast, {
      // Track method calls in the AST
      CallExpression(node) {
        if (
          node.callee &&
          node.callee.type === 'MemberExpression' &&
          node.callee.object.name !== 'console' // Exclude console calls
        ) {
          const objectName = node.callee.object.name // Get the object name
          const methodName = node.callee.property.name // Get the method name

          // Use the known type of object from early assignments, if available
          const objectType = variableTypes[objectName]

          methodCalls.push({
            objectName,
            methodName,
            objectType,
          }) // Add the method call information to the list
        }
      },
      // Track variable declarations and assignments
      VariableDeclarator(node) {
        if (node.id && node.init && node.init.type === 'AwaitExpression') {
          const variableName = node.id.name // Get the variable name

          // Handle optional chaining in CallExpression
          const callee = node.init.argument?.callee
          const methodName = callee?.property?.name // Get the method name from AwaitExpression

          if (methodName) {
            // Infer the object type based on the method called
            Object.keys(permissionsMap).forEach((objectType) => {
              if (permissionsMap[objectType]?.[methodName]) {
                variableTypes[variableName] = objectType // Assign the object type to the variable
              }
            })
          }
        }
      },
      // Track assignments to variables
      AssignmentExpression(node) {
        if (
          node.right.type === 'AwaitExpression' &&
          node.right.argument.type === 'CallExpression'
        ) {
          const methodName = node.right.argument.callee.property.name // Get the method name from the assignment
          const variableName = node.left.name // Get the variable name being assigned to

          // Infer the object type based on the method called
          Object.keys(permissionsMap).forEach((objectType) => {
            if (permissionsMap[objectType]?.[methodName]) {
              variableTypes[variableName] = objectType // Assign the object type to the variable
            }
          })
        }
      },
    })

    // Return the collected method calls and inferred variable types
    return { methodCalls, variableTypes }
  }

  useEffect(() => {
    // Check if both selectedFunctionName and selectedExampleCategory are defined
    if (selectedFunctionName && selectedExampleCategory) {
      // Construct the file path to fetch the example TypeScript file
      const filePath = `https://main--thriving-zuccutto-5ad917.netlify.app/examples/${selectedExampleCategory.toLowerCase()}.ts`

      // Fetch the TypeScript file from the constructed URL
      fetch(filePath)
        .then((response) => response.text()) // Get the response text
        .then((text) => {
          // Function to parse the function text and extract details
          function parseFunctionText(text, selectedFunctionName) {
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
            let extractedText = text
              .slice(text.indexOf(functionText), endIndex)
              .trim()

            // Remove the trailing "}" if this is the last function in the file
            if (!nextFunctionText) {
              extractedText = extractedText.replace(/\s*}$/, '')
            }

            return extractedText // Return the extracted function text
          }

          // Parse the function text for the selected function
          const functionMatch = parseFunctionText(text, selectedFunctionName)

          if (functionMatch) {
            let extractedCode = functionMatch

            // Clean up the extracted code by removing the function name and trailing comma
            extractedCode = extractedCode
              .replace(`${selectedFunctionName}:`, '')
              .replace(/,\s*$/, '')

            // Update the state with the cleaned function code
            setFunctionCode(extractedCode)

            // Extract method calls and variable types from the function code
            const { methodCalls, variableTypes } =
              extractMethodCallsAndVariableTypes(extractedCode)
            // Uncomment for debugging purposes
            // console.log('Extracted Methods:', methodCalls);
            // console.log('Extracted Variable Types:', variableTypes);

            // Regex to match the parameter list in the function signature
            const paramsRegex = /\(\s*([^)]*?)\s*\)\s*=>/
            const paramsMatch = paramsRegex.exec(functionMatch)
            const params = [] // Array to hold parameter names
            const types = [] // Array to hold parameter types

            if (paramsMatch) {
              const paramString = paramsMatch[1] // Get the matched parameters

              // Regex to match individual parameters and their types
              const individualParamRegex = /(\w+)\s*:\s*(\w+)/g
              let paramMatch

              // Loop through and extract parameters and their types
              while ((paramMatch = individualParamRegex.exec(paramString))) {
                params.push(paramMatch[1]) // Parameter name
                types.push(paramMatch[2]) // Parameter type
              }
            }

            // Update the state with extracted parameter names and types
            setParameterNames(params)
            setParameterTypes(types)

            // Initialize function parameters with empty string values
            setFunctionParameters(
              params.reduce((acc, param) => ({ ...acc, [param]: '' }), {}),
            )
          } else {
            // If function match is not found, reset state
            setFunctionCode('Function code not found.')
            setParameterNames([])
            setParameterTypes([])
            setFunctionParameters({})
          }
        })
        .catch((error) => {
          // Handle errors during the fetch operation
          console.error('Failed to fetch function source:', error)
          setFunctionCode('')
          setParameterNames([])
          setParameterTypes([])
          setFunctionParameters({})
        })
    }
  }, [selectedFunctionName, selectedExampleCategory])

  useEffect(() => {
    if (functionCode) {
      // Extract method calls and variable types from the provided function code
      const { methodCalls } = extractMethodCallsAndVariableTypes(functionCode)

      // Determine if the user has all the required permissions for each method call
      const hasAllPermissions = methodCalls.every(
        ({ methodName, objectType }) => {
          // Retrieve the permissions associated with the current method call
          const methodPermissions =
            permissionsMap[objectType]?.[methodName]?.permissions || []

          // Check if the user has each of the required permissions
          return methodPermissions.every(
            (permission) => capabilities[permission],
          )
        },
      )

      // Update the state to indicate whether the user has all necessary permissions
      setHasPermission(hasAllPermissions)
    } else {
      // If functionCode is not defined, set hasPermission to true by default
      setHasPermission(true)
    }
  }, [functionCode, capabilities])

  useEffect(() => {
    webflow.setExtensionSize({ height: 600, width: 500 })
  }, [selectedFunctionName])

  return {
    functionCode,
    parameterNames,
    parameterTypes,
    functionParameters,
    setParameterNames,
    setFunctionParameters,
    hasPermission,
  }
}
