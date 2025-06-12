import React, { useState, useEffect } from 'react'
import examplesImport from '../examples/examples'
import Dropdown from './dropdown'
import ParameterInput from './parameterInput'
import enumsImport from '../examples/enums'
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript.js'
import 'prismjs/components/prism-jsx.js'
import { useFunctionCode } from '../hooks/useFunctionCode'

// Add index signatures for dynamic access
const examples: { [key: string]: any } = examplesImport as any
const enums: { [key: string]: any } = enumsImport as any

const APIExplorer: React.FC = () => {
  const [selectedExampleCategory, setSelectedExampleCategory] = useState('')
  const [selectedFunctionName, setSelectedFunctionName] = useState('')
  const [functionParameters, setFunctionParametersState] = useState<{
    [key: string]: any
  }>({})
  const [apiOutput, setApiOutput] = useState('')

  // Fetch function code and parameters
  const { functionCode, parameterNames, parameterTypes, setParameterNames } =
    useFunctionCode(selectedFunctionName, selectedExampleCategory)

  // Safe console for API Explorer
  const apiSafeConsole = {
    log: (...args: any[]) =>
      setApiOutput((prev) => prev + args.join(' ') + '\n'),
    error: (...args: any[]) =>
      setApiOutput((prev) => prev + '[Error] ' + args.join(' ') + '\n'),
    warn: (...args: any[]) =>
      setApiOutput((prev) => prev + '[Warn] ' + args.join(' ') + '\n'),
    info: (...args: any[]) =>
      setApiOutput((prev) => prev + '[Info] ' + args.join(' ') + '\n'),
  }

  useEffect(() => {
    Prism.highlightAll()
  }, [functionCode])

  useEffect(() => {
    setApiOutput('')
  }, [selectedFunctionName, selectedExampleCategory])

  const exampleCategories = Object.keys(examples).map((key) => ({
    value: key,
    label: key,
  }))

  const functionSelections = selectedExampleCategory
    ? Object.entries(examples[selectedExampleCategory] || {}).map(
        ([key, value]) => {
          if (
            typeof value === 'object' &&
            value !== null &&
            !('type' in value)
          ) {
            return {
              value: key,
              label: key.replace(/([A-Z])/g, ' $1').trim(),
              subcategories: Object.keys(value || {}).map((subKey) => ({
                value: subKey,
                label: subKey.replace(/([A-Z])/g, ' $1').trim(),
              })),
            }
          }
          return {
            value: key,
            label: key.replace(/([A-Z])/g, ' $1').trim(),
          }
        },
      )
    : []

  const handleCategoryChange = (value: string) => {
    setSelectedExampleCategory(value)
    setSelectedFunctionName('')
    setParameterNames([])
  }

  const handleFunctionChange = (value: string) => {
    setSelectedFunctionName(value)
  }

  const handleParameterChange = (paramName: string, value: any) => {
    setFunctionParametersState((prev) => ({ ...prev, [paramName]: value }))
  }

  const handleFunctionExecution = () => {
    if (selectedExampleCategory && selectedFunctionName) {
      const [category, funcName] = selectedFunctionName.includes('.')
        ? selectedFunctionName.split('.')
        : [null, selectedFunctionName]
      const topCategory = examples[selectedExampleCategory]
      const funcToExecute = category
        ? topCategory[category][funcName]
        : topCategory[selectedFunctionName]
      if (funcToExecute) {
        try {
          setApiOutput('')
          const paramValues =
            parameterNames.length > 0
              ? parameterNames.map((name) => functionParameters[name])
              : []
          // Patch global console for this call
          const originalConsole = { ...console }
          Object.assign(console, apiSafeConsole)
          if (typeof funcToExecute === 'function') {
            const result = funcToExecute(...paramValues)
            if (result && typeof result.then === 'function') {
              result.catch(apiSafeConsole.error)
            }
          }
        } catch (error) {
          apiSafeConsole.error('Error executing function:', error)
        } finally {
          Object.assign(console, console)
        }
      }
    }
  }

  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <Dropdown
          options={exampleCategories}
          selectedValue={selectedExampleCategory}
          onValueChange={handleCategoryChange}
          disabled={false}
        />
      </div>
      <div style={{ marginBottom: 12 }}>
        <Dropdown
          options={functionSelections}
          selectedValue={selectedFunctionName}
          onValueChange={handleFunctionChange}
          disabled={!selectedExampleCategory}
        />
      </div>
      {parameterNames.length > 0 && (
        <div style={{ marginBottom: 12 }}>
          {parameterNames.map((param, idx) => {
            // If the parameter type matches a key in enums, treat as strict enum
            const enumOptions = enums[parameterTypes[idx]]
            const isStrictEnum =
              !!enumOptions && Array.isArray(Object.values(enumOptions))
            return (
              <ParameterInput
                key={param}
                name={param}
                value={functionParameters[param]}
                onChange={handleParameterChange}
                inputType={
                  isStrictEnum ? 'enum' : parameterTypes[idx] || 'string'
                }
                options={
                  isStrictEnum
                    ? Object.values(enumOptions)
                    : parameterTypes[idx] === 'enum'
                      ? enums[param + 'Enum'] || []
                      : undefined
                }
                strictEnum={isStrictEnum}
                disabled={false}
              />
            )
          })}
        </div>
      )}
      <div style={{ marginBottom: 12 }}>
        <button
          onClick={handleFunctionExecution}
          disabled={!selectedFunctionName}
          style={{ padding: '6px 16px', fontWeight: 600 }}
        >
          Run
        </button>
        <button
          onClick={() => setApiOutput('')}
          style={{ marginLeft: 8, padding: '6px 16px' }}
        >
          Clear Output
        </button>
      </div>
      {functionCode && (
        <div style={{ marginBottom: 24 }}>
          <label style={{ fontWeight: 600 }}>Source Code:</label>
          <pre
            className="small-code-block"
            style={{
              background: '#181818',
              color: '#8ac2ff',
              padding: 12,
              borderRadius: 4,
              marginTop: 4,
              fontSize: 13,
              overflowX: 'auto',
            }}
          >
            <code className="language-typescript">{functionCode}</code>
          </pre>
        </div>
      )}
      <div style={{ marginTop: 24 }}>
        <label style={{ fontWeight: 600 }}>Output:</label>
        <pre
          style={{
            background: '#222',
            color: '#8ac2ff',
            padding: 12,
            minHeight: 80,
            borderRadius: 4,
            marginTop: 4,
            fontSize: 13,
            overflowX: 'auto',
          }}
        >
          {apiOutput}
        </pre>
      </div>
    </div>
  )
}

export default APIExplorer
