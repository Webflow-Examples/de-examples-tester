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
    console.log(finalCode)

    const ast = acorn.Parser.extend(acornTs()).parse(finalCode, {
      ecmaVersion: 2020,
      allowAwaitOutsideFunction: true,
      sourceType: 'module', // Enable module-level parsing
    })

    const methodCalls = []
    const variableTypes = {}

    walk.simple(ast, {
      // Track Method Calls
      CallExpression(node) {
        if (node.callee && node.callee.type === 'MemberExpression') {
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
          const methodName = node.init.argument.callee.property.name

          // Infer the object type based on the method called
          Object.keys(permissionsMap).forEach((objectType) => {
            if (permissionsMap[objectType]?.[methodName]) {
              variableTypes[variableName] = objectType
            }
          })
        }
      },
      AssignmentExpression(node) {
        if (
          node.right.type === 'AwaitExpression' &&
          node.right.argument.type === 'CallExpression'
        ) {
          const methodName = node.right.argument.callee.property.name
          const variableName = node.left.name

          // Infer the object type based on the method called
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
          const functionRegex = new RegExp(
            `\\s*${selectedFunctionName}:\\s*async\\s*\\((.*?)\\)\\s*=>\\s*{[\\s\\S]*?},`,
            'm',
          )

          const match = text.match(functionRegex)
          if (match) {
            setFunctionCode(match[0])

            // Extract method calls and inferred types from the function code
            const { methodCalls, variableTypes } =
              extractMethodCallsAndVariableTypes(match[0])
            console.log('Extracted Methods:', methodCalls) // 🧪 Testing: DELETE ME FOR PROD 🧪
            console.log('Extracted Variable Types:', variableTypes) // 🧪 Testing: DELETE ME FOR PROD 🧪

            // Modified regex to capture parameter names and types
            const paramsRegex = new RegExp(`\\s*(\\w+)\\s*:\\s*(\\w+)`, 'g')
            const params = []
            const types = []
            let paramMatch

            // Using regex.exec in a loop to find all matches
            while ((paramMatch = paramsRegex.exec(match[1]))) {
              params.push(paramMatch[1])
              types.push(paramMatch[2])
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
      const { methodCalls } = extractMethodCallsAndVariableTypes(functionCode) // Extract methods from the function code

      const hasAllPermissions = methodCalls.every(
        ({ methodName, objectType }) => {
          const methodPermissions =
            permissionsMap[objectType]?.[methodName]?.permissions || []
          console.log('methodPermissions', methodPermissions)
          return methodPermissions.every(
            (permission) => capabilities[permission],
          )
        },
      )

      console.log('capabilities', capabilities)
      console.log('hasAllPermissions', hasAllPermissions)

      setHasPermission(hasAllPermissions)
    } else {
      setHasPermission(true) // Assume permission granted if no function code
    }
  }, [functionCode, capabilities])

  useEffect(() => {
    webflow.setExtensionSize({ height: 600, width: 500 })
  }, [selectedFunctionName])

  return {
    functionCode,
    parameterNames,
    parameterTypes, // Expose parameter types as part of the hook's return value
    functionParameters,
    setParameterNames,
    setFunctionParameters,
    hasPermission,
  }
}
