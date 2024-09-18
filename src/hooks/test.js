import * as acorn from 'acorn'
import * as walk from 'acorn-walk'
import acornTs from 'acorn-typescript'
import { permissionsMap } from '../components/PermissionsMap.js'

const test = `async () => {
    try {
        // Select Component Element on Page
        const elements = await webflow.getAllElements();
        const componentInstances = elements?.filter((el) => el.type === 'ComponentInstance');
        const componentInstance = componentInstances?.[0]
        
        if (componentInstance?.type === 'ComponentInstance') {
            // Get Component object from instance
            const component = await componentInstance?.getComponent();
            const componentName = await component?.getName();
            console.log(componentName);
        } else {
            console.log('No component element found');
        }
    } catch (error) {
        console.error('Error occurred:', error);
    }
}`

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

extractMethodCallsAndVariableTypes(test)
