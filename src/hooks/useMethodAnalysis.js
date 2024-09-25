import { useEffect, useState } from 'react'
import * as acorn from 'acorn'
import * as walk from 'acorn-walk'
import acornTs from 'acorn-typescript'

import { permissionsMap } from '../components/PermissionsMap'

// This hook is responsible for extracting method calls and variable types from the function code.
export const useMethodAnalysis = (functionCode) => {
  const [methodCalls, setMethodCalls] = useState([])
  const [variableTypes, setVariableTypes] = useState({})

  useEffect(() => {
    if (functionCode) {
      const { methods, variables } =
        extractMethodCallsAndVariableTypes(functionCode)
      setMethodCalls(methods)
      setVariableTypes(variables)
    }
  }, [functionCode])

  return { methodCalls, variableTypes }
}

// Utility function for extracting method calls and variable types
const extractMethodCallsAndVariableTypes = (code) => {
  const cleanedCode = code.replace(/^\s*\w+:\s*/, '').replace(/},\s*$/, '}')
  const ast = acorn.Parser.extend(acornTs()).parse(cleanedCode, {
    ecmaVersion: 2020,
    allowAwaitOutsideFunction: true,
    sourceType: 'module',
  })

  const methodCalls = []
  const variableTypes = {}

  walk.simple(ast, {
    CallExpression(node) {
      if (
        node.callee?.type === 'MemberExpression' &&
        node.callee.object.name !== 'console'
      ) {
        const objectName = node.callee.object.name
        const methodName = node.callee.property.name
        const objectType = variableTypes[objectName]
        methodCalls.push({ objectName, methodName, objectType })
      }
    },
    VariableDeclarator(node) {
      if (node.id && node.init && node.init.type === 'AwaitExpression') {
        const variableName = node.id.name
        const methodName = node.init.argument?.callee?.property?.name
        if (methodName) {
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

  return { methods: methodCalls, variables: variableTypes }
}
