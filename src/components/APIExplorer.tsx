import React, { useState, useEffect } from 'react'
import examplesImport from '../examples/examples'
import Dropdown from './dropdown'
import ParameterInput from './parameterInput'
import enumsImport from '../examples/enums'
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript.js'
import 'prismjs/components/prism-jsx.js'
import 'prismjs/themes/prism-tomorrow.css'
import { useFunctionCode } from '../hooks/useFunctionCode'
// @ts-ignore
import designerExtensionTypings from '@/designer-extension-typings/index.d.ts?raw'
import CodeBlock from './CodeBlock'

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
      setApiOutput(
        (prev) =>
          prev +
          args
            .map((arg) =>
              typeof arg === 'object' && arg !== null
                ? JSON.stringify(arg, null, 2)
                : String(arg),
            )
            .join(' ') +
          '\n',
      ),
    error: (...args: any[]) =>
      setApiOutput(
        (prev) =>
          prev +
          '[Error] ' +
          args
            .map((arg) =>
              typeof arg === 'object' && arg !== null
                ? JSON.stringify(arg, null, 2)
                : String(arg),
            )
            .join(' ') +
          '\n',
      ),
    warn: (...args: any[]) =>
      setApiOutput(
        (prev) =>
          prev +
          '[Warn] ' +
          args
            .map((arg) =>
              typeof arg === 'object' && arg !== null
                ? JSON.stringify(arg, null, 2)
                : String(arg),
            )
            .join(' ') +
          '\n',
      ),
    info: (...args: any[]) =>
      setApiOutput(
        (prev) =>
          prev +
          '[Info] ' +
          args
            .map((arg) =>
              typeof arg === 'object' && arg !== null
                ? JSON.stringify(arg, null, 2)
                : String(arg),
            )
            .join(' ') +
          '\n',
      ),
  }

  useEffect(() => {
    Prism.highlightAll()
  }, [functionCode])

  useEffect(() => {
    setApiOutput('')
  }, [selectedFunctionName, selectedExampleCategory])

  // Auto-run function if selected and has no parameters
  useEffect(() => {
    if (
      selectedFunctionName &&
      parameterNames.length === 0 &&
      selectedExampleCategory
    ) {
      handleFunctionExecution()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFunctionName, selectedExampleCategory, parameterNames])

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
          {parameterNames.map((name, index) => (
            <ParameterInput
              key={name}
              name={name}
              inputType={
                String(parameterTypes[index]).includes('Enum')
                  ? 'enum'
                  : parameterTypes[index]
              }
              placeholder={`Enter ${name}`}
              onChange={handleParameterChange}
              options={
                String(parameterTypes[index]).includes('Enum')
                  ? Object.values(enums[parameterNames[index]])
                  : undefined
              }
              value={functionParameters[name]}
              disabled={false}
            />
          ))}
        </div>
      )}
      {/* Only show Run button if there are parameters */}
      {parameterNames.length > 0 && (
        <div style={{ marginBottom: 12 }}>
          <button
            className="button cc-primary"
            onClick={handleFunctionExecution}
            disabled={!selectedFunctionName}
          >
            Run
          </button>
        </div>
      )}
      {functionCode && (
        <div style={{ marginBottom: 24 }}>
          <label style={{ fontWeight: 600 }}>Source Code:</label>
          <CodeBlock code={functionCode} language="typescript" />
        </div>
      )}
      {selectedFunctionName && (
        <div style={{ marginTop: 24, position: 'relative' }}>
          <label style={{ fontWeight: 600 }}>Output</label>
          <CodeBlock
            code={apiOutput}
            language="javascript"
            onClear={() => setApiOutput('')}
          />
        </div>
      )}
    </div>
  )
}

export default APIExplorer
