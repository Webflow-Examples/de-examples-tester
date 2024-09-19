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
    const cleanedCode = code.replace(/^\s*\w+:\s*/, '')
    const finalCode = cleanedCode.replace(/},\s*$/, '}')

    const ast = acorn.Parser.extend(acornTs()).parse(finalCode, {
      ecmaVersion: 2020,
      allowAwaitOutsideFunction: true,
      sourceType: 'module', // Enable module-level parsing
    })

    const methodCalls = []
    const variableTypes = {}

    // Extend `acorn-walk` to handle missing visitors for TypeScript-specific nodes and async/await
    walk.base.AwaitExpression = (node, state, c) => {
      c(node.argument, state)
    }

    walk.base.NewExpression = (node, state, c) => {
      c(node.callee, state)
      for (const arg of node.arguments) {
        c(arg, state)
      }
    }

    walk.base.CallExpression = (node, state, c) => {
      if (
        node.callee.type === 'MemberExpression' &&
        node.callee.object.name === 'console'
      ) {
        // Skip console calls
        return
      }

      c(node.callee, state)
      for (const arg of node.arguments) {
        c(arg, state)
      }
    }

    // For TypeScript-specific type assertions like `as`
    walk.base.TSAsExpression = (node, state, c) => {
      c(node.expression, state)
    }

    walk.simple(ast, {
      // Track Method Calls
      CallExpression(node) {
        if (
          node.callee &&
          node.callee.type === 'MemberExpression' &&
          node.callee.object.name !== 'console' // Exclude console calls
        ) {
          const objectName = node.callee.object.name
          const methodName = node.callee.property.name

          // If we know the type of object from early assignments, use it
          const objectType = variableTypes[objectName]

          methodCalls.push({
            objectName,
            methodName,
            objectType,
          })
        }
      },
      // Track variable declarations and assignments
      VariableDeclarator(node) {
        if (node.id && node.init && node.init.type === 'AwaitExpression') {
          const variableName = node.id.name

          // Handle optional chaining in CallExpression
          const callee = node.init.argument?.callee
          const methodName = callee?.property?.name

          if (methodName) {
            // Infer the object type based on the method called
            Object.keys(permissionsMap).forEach((objectType) => {
              if (permissionsMap[objectType]?.[methodName]) {
                variableTypes[variableName] = objectType
              }
            })
          }
        }
      },
      AssignmentExpression(node) {
        if (
          node.right.type === 'AwaitExpression' &&
          node.right.argument.type === 'CallExpression'
        ) {
          const methodName = node.right.argument.callee.property.name
          const variableName = node.left.name

          Object.keys(permissionsMap).forEach((objectType) => {
            if (permissionsMap[objectType]?.[methodName]) {
              variableTypes[variableName] = objectType
            }
          })
        }
      },
    })

    return { methodCalls, variableTypes }
  }

  useEffect(() => {
    if (selectedFunctionName && selectedExampleCategory) {
      const filePath = `https://main--thriving-zuccutto-5ad917.netlify.app/examples/${selectedExampleCategory.toLowerCase()}.ts`
      fetch(filePath)
        .then((response) => response.text())
        .then((text) => {
          function parseFunctionText(text, selectedFunctionName) {
            // Regex to find all async function definitions in the export const object
            const funcRegex = /(\w+):\s+async\s*\(\s*.*?\)\s*=>\s*{(.*?)}/gs

            // Match all function definitions
            const matches = [...text.matchAll(funcRegex)]

            // Find the match for the selected function
            const selectedFunctionMatch = matches.find(
              (match) => match[1] === selectedFunctionName,
            )

            if (!selectedFunctionMatch) {
              throw new Error(`Function "${selectedFunctionName}" not found.`)
            }

            // Get the index of the selected function
            const selectedFunctionIndex = matches.findIndex(
              (match) => match[1] === selectedFunctionName,
            )

            // Get text for the selected function and everything up to the next function
            const functionText = selectedFunctionMatch[0].trim()

            // If there's a next function, extract text up to it; otherwise, return all
            const nextFunctionText =
              selectedFunctionIndex + 1 < matches.length
                ? matches[selectedFunctionIndex + 1][0]
                : null

            // Extract everything before the next function name
            const endIndex = nextFunctionText
              ? text.indexOf(nextFunctionText)
              : text.length

            let extractedText = text
              .slice(text.indexOf(functionText), endIndex)
              .trim()

            // Remove the trailing "}" if it's the last function
            if (!nextFunctionText) {
              extractedText = extractedText.replace(/\s*}$/, '')
            }

            return extractedText
          }

          const functionMatch = parseFunctionText(text, selectedFunctionName)

          if (functionMatch) {
            let extractedCode = functionMatch
            extractedCode = extractedCode
              .replace(`${selectedFunctionName}:`, '')
              .replace(/,\s*$/, '')

            setFunctionCode(extractedCode)

            const { methodCalls, variableTypes } =
              extractMethodCallsAndVariableTypes(extractedCode)
            // console.log('Extracted Methods:', methodCalls)
            // console.log('Extracted Variable Types:', variableTypes)

            const paramsRegex = /\(\s*([^)]*?)\s*\)\s*=>/ // Match the parameter list in the function signature
            const paramsMatch = paramsRegex.exec(functionMatch)
            const params = []
            const types = []

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

            setParameterNames(params)
            setParameterTypes(types)
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

  useEffect(() => {
    if (functionCode) {
      const { methodCalls } = extractMethodCallsAndVariableTypes(functionCode)

      const hasAllPermissions = methodCalls.every(
        ({ methodName, objectType }) => {
          const methodPermissions =
            permissionsMap[objectType]?.[methodName]?.permissions || []
          return methodPermissions.every(
            (permission) => capabilities[permission],
          )
        },
      )
      setHasPermission(hasAllPermissions)
    } else {
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
