import React, { useState, useEffect, useRef } from 'react'
import { useQuery } from '@tanstack/react-query'
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript.js'
import 'prismjs/components/prism-jsx.js'
import 'prismjs/themes/prism-tomorrow.css'

// Internal Components
import Dropdown from './dropdown'
import CodeBlock from './CodeBlock'
import APIExplorerParameter from './APIExplorerParameter'

// Types
import type {
  ParameterMap,
  CategoryOption,
  FunctionSelection,
} from '../types/api-explorer.types'

// Hooks
import { useFunctionCode } from '../hooks/useFunctionCode'
import { useEnumQueries } from '../hooks/useEnumQueries'
import {
  useVariableCollections,
  useVariables,
} from '../hooks/useVariableCollections'

// Utils and Constants
import { createAPIConsole } from '../utils/console-utils'
import { METHOD_DESCRIPTIONS } from '../constants/api-explorer.constants'
import { isVariableCollectionInfo } from '../types/dynamic-enums'

// Data
import examplesImport from '../examples/examples'
import designerExtensionTypings from '@/designer-extension-typings/index.d.ts?raw'

const examples: { [key: string]: any } = examplesImport as any

const APIExplorer: React.FC = () => {
  const [selectedExampleCategory, setSelectedExampleCategory] = useState('')
  const [selectedFunctionName, setSelectedFunctionName] = useState('')
  const [functionParameters, setFunctionParameters] = useState<ParameterMap>({})
  const [apiOutput, setApiOutput] = useState('')
  const hasAutoExecutedRef = useRef(false)
  const hasInitializedRef = useRef(false)

  // Fetch function code and parameters
  const { functionCode, parameterNames, parameterTypes, setParameterNames } =
    useFunctionCode(selectedFunctionName, selectedExampleCategory)

  // Fetch variable collections
  const { loading: collectionsLoading } = useVariableCollections()

  // Get the selected collection for variables
  const selectedCollection = functionParameters['collection']

  // Fetch variables for the selected collection
  const {
    data: variables,
    isLoading: variablesLoading,
    error: variablesError,
  } = useQuery({
    queryKey: ['variables', selectedCollection?.id],
    queryFn: async () => {
      if (!isVariableCollectionInfo(selectedCollection)) return null
      try {
        const collection = await webflow.getVariableCollectionById(
          selectedCollection.id,
        )
        if (!collection) {
          throw new Error(
            `Collection with ID ${selectedCollection.id} not found`,
          )
        }
        const variables = await collection.getAllVariables()
        return Promise.all(
          variables.map(async (variable) => ({
            id: variable.id,
            name: await variable.getName(),
            type: variable.type,
            data: { variable },
            collectionId: selectedCollection.id,
          })),
        )
      } catch (err) {
        console.error('Error fetching variables:', err)
        throw err
      }
    },
    enabled: !!selectedCollection?.id,
    staleTime: 5 * 60 * 1000,
  })

  // Fetch enum values
  const enumQueries = useEnumQueries(
    parameterTypes,
    parameterNames,
    functionParameters,
  )

  useEffect(() => {
    Prism.highlightAll()
  }, [functionCode])

  useEffect(() => {
    setApiOutput('')
  }, [selectedFunctionName, selectedExampleCategory])

  // Auto-initialize first example and function
  useEffect(() => {
    if (!hasInitializedRef.current) {
      hasInitializedRef.current = true
      const firstCategory = Object.keys(examples)[0]
      setSelectedExampleCategory(firstCategory)

      const categoryContent = examples[firstCategory] || {}
      const firstSubcategory = Object.keys(categoryContent)[0]

      if (
        typeof categoryContent[firstSubcategory] === 'object' &&
        !('type' in (categoryContent[firstSubcategory] || {}))
      ) {
        const firstFunction = Object.keys(categoryContent[firstSubcategory])[0]
        setSelectedFunctionName(`${firstSubcategory}.${firstFunction}`)
      } else {
        setSelectedFunctionName(firstSubcategory)
      }
    }
  }, [])

  // Auto-run function if no parameters needed
  useEffect(() => {
    if (
      selectedFunctionName &&
      parameterNames.length === 0 &&
      selectedExampleCategory &&
      !hasAutoExecutedRef.current
    ) {
      hasAutoExecutedRef.current = true
      handleFunctionExecution()
    }
  }, [selectedFunctionName, selectedExampleCategory, parameterNames])

  const exampleCategories: CategoryOption[] = Object.keys(examples).map(
    (key) => ({
      value: key,
      label: key,
    }),
  )

  const functionSelections: FunctionSelection[] = selectedExampleCategory
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
    hasAutoExecutedRef.current = false
  }

  const handleParameterChange = (name: string, value: any) => {
    setFunctionParameters((prev) => ({
      ...prev,
      [name]: value,
    }))
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
        // Save original console before try block so it's accessible in finally
        const originalConsole = { ...console }
        try {
          setApiOutput('')

          const paramValues =
            parameterNames.length > 0
              ? parameterNames.map((name: string, index: number) => {
                  const paramType = parameterTypes[index]
                  const value = functionParameters[name]

                  // Extract actual object for ObjectSelector types
                  if (
                    paramType === 'Style' ||
                    paramType === 'Asset' ||
                    paramType === 'VariableCollection' ||
                    paramType === 'Variable' ||
                    paramType === 'VariableMode'
                  ) {
                    // For ObjectSelector types, extract the actual object from data.object
                    if (
                      value &&
                      typeof value === 'object' &&
                      value.data &&
                      value.data.object
                    ) {
                      return value.data.object
                    }
                  }

                  return value
                })
              : []

          const apiConsole = createAPIConsole(setApiOutput)
          ;(window as any).ogConsole = (window as any).ogConsole || {
            ...console,
          }
          Object.assign(console, apiConsole)

          if (typeof funcToExecute === 'function') {
            const result = funcToExecute(...paramValues)
            if (result && typeof result.then === 'function') {
              result.catch(apiConsole.error)
            }
          }
        } catch (error) {
          console.error('Error executing function:', error)
        } finally {
          Object.assign(console, originalConsole)
        }
      }
    }
  }

  const renderParameter = (name: string, index: number) => {
    const paramType = parameterTypes[index]
    const queryResult = enumQueries[index] || {}
    const options =
      paramType === 'VariableInfo' ? variables || [] : queryResult.data || []
    const isLoading =
      paramType === 'VariableInfo' ? variablesLoading : queryResult.isLoading
    const error =
      paramType === 'VariableInfo' ? variablesError : queryResult.error

    // Check if this is a dynamic enum (ends with "Info") or an ObjectSelector type
    const isDynamicEnum =
      paramType.endsWith('Info') ||
      paramType === 'Style' ||
      paramType === 'Asset' ||
      paramType === 'VariableCollection' ||
      paramType === 'Variable' ||
      paramType === 'VariableMode'

    // For clean API examples, we want to pass the actual objects, not wrappers
    // So we'll use custom parameter types that show the real API
    const cleanParamType =
      paramType === 'StyleInfo'
        ? 'Style'
        : paramType === 'AssetInfo'
          ? 'Asset'
          : paramType

    return (
      <APIExplorerParameter
        key={name}
        name={name}
        index={index}
        paramType={cleanParamType}
        value={functionParameters[name]}
        onChange={handleParameterChange}
        options={options}
        isLoading={isLoading}
        error={error as Error}
        isDynamicEnum={isDynamicEnum}
      />
    )
  }

  return (
    <div className="api-explorer">
      <div className="flex-row gap-2 mb-2">
        <div className="flex-1">
          <Dropdown
            options={exampleCategories}
            selectedValue={selectedExampleCategory}
            onValueChange={handleCategoryChange}
            disabled={false}
            placeholder="Select API category"
          />
        </div>
        <div className="flex-1">
          <Dropdown
            options={functionSelections}
            selectedValue={selectedFunctionName}
            onValueChange={handleFunctionChange}
            disabled={!selectedExampleCategory}
            placeholder="Select API method"
          />
        </div>
      </div>
      {selectedFunctionName &&
        METHOD_DESCRIPTIONS[selectedExampleCategory]?.[
          selectedFunctionName
        ] && (
          <div className="text-sm text-gray-400 mb-4">
            {METHOD_DESCRIPTIONS[selectedExampleCategory][selectedFunctionName]}
          </div>
        )}
      {parameterNames.length > 0 && (
        <div className="flex-row items-end gap-2">
          <div className="flex-1">
            {parameterNames.map((name: string, index: number) =>
              renderParameter(name, index),
            )}
          </div>
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
        <div className="mb-3">
          <label className="w-form-label">Example</label>
          <CodeBlock code={functionCode} language="typescript" />
        </div>
      )}
      {selectedFunctionName && (
        <div style={{ marginTop: 16 }}>
          <div className="flex items-center justify-between mb-1">
            <label className="w-form-label">Output</label>
          </div>
          <CodeBlock
            onClear={() => setApiOutput('')}
            code={apiOutput || '// Run the method to see output'}
            language="javascript"
          />
        </div>
      )}
    </div>
  )
}

export default APIExplorer
