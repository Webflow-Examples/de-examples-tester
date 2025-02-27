import { useEffect, useState } from 'react'
import * as acorn from 'acorn'
import * as walk from 'acorn-walk'
import acornTypeScript from 'acorn-typescript'
/// <reference types="@webflow/designer-extension-typings" />

interface MethodCall {
  interfaceType: string
  methodName: string
}

// Get return type from WebflowApi at compile time
type WebflowMethod = keyof WebflowApi
type WebflowMethodReturnType<T extends WebflowMethod> = WebflowApi[T] extends (
  ...args: any[]
) => infer R
  ? R
  : never

// This would give us the actual return types from the Webflow methods
type MethodReturnTypes = {
  [K in WebflowMethod]: WebflowMethodReturnType<K>
}

export const useMethodAnalysis = (functionCode: string) => {
  const [methodCalls, setMethodCalls] = useState<MethodCall[]>([])

  useEffect(() => {
    if (functionCode) {
      try {
        const foundMethods: MethodCall[] = []
        const variableTypes: Record<string, string> = {}

        const parser = acorn.Parser.extend(acornTypeScript())
        const ast = parser.parse(functionCode, {
          ecmaVersion: 2020,
          sourceType: 'module',
          allowAwaitOutsideFunction: true,
        })

        walk.simple(ast, {
          VariableDeclarator(node: any) {
            if (
              node.init?.type === 'AwaitExpression' &&
              node.init.argument?.callee?.type === 'MemberExpression' &&
              node.init.argument.callee.object?.name === 'webflow'
            ) {
              const methodName = node.init.argument.callee.property
                .name as WebflowMethod
              const varName = node.id.name

              // Store the type name from the return type
              type ReturnType = WebflowMethodReturnType<typeof methodName>
              variableTypes[varName] = ReturnType.name
            }
          },

          CallExpression(node: any) {
            if (node.callee?.type === 'MemberExpression') {
              const object = node.callee.object
              const method = node.callee.property.name

              if (object.name === 'webflow') {
                foundMethods.push({
                  interfaceType: 'webflow',
                  methodName: method,
                })
              } else if (object.name && variableTypes[object.name]) {
                foundMethods.push({
                  interfaceType: variableTypes[object.name],
                  methodName: method,
                })
              }
            }
          },
        })

        setMethodCalls(foundMethods)
      } catch (error) {
        console.error('Error parsing function:', error)
        setMethodCalls([])
      }
    }
  }, [functionCode])

  return { methodCalls }
}
