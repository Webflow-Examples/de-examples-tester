import React, { useState, useEffect, useRef } from 'react'
import { useQuery, useQueries } from '@tanstack/react-query'
import examplesImport from '../examples/examples'
import Dropdown from './dropdown'
import ParameterInput from './parameterInput'
import enumProviders, { hasEnumProvider } from '../examples/enums'
import type { EnumProviderType } from '../examples/enums'
import { useDynamicEnum } from '../hooks/useVariableCollections'
import type {
  DynamicEnumValue,
  DynamicEnumProvider,
} from '../types/dynamic-enums'
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript.js'
import 'prismjs/components/prism-jsx.js'
import 'prismjs/themes/prism-tomorrow.css'
import { useFunctionCode } from '../hooks/useFunctionCode'
// @ts-ignore
import designerExtensionTypings from '@/designer-extension-typings/index.d.ts?raw'
import CodeBlock from './CodeBlock'
import { isVariableCollectionInfo } from '../types/dynamic-enums'
import {
  useVariableCollections,
  useVariables,
} from '../hooks/useVariableCollections'
import { getVariablesEnum } from '../examples/variables'
import type { VariableInfo } from '../types/dynamic-enums'

// Add index signatures for dynamic access
const examples: { [key: string]: any } = examplesImport as any

// Define parameter dependencies
const PARAMETER_DEPENDENCIES: Record<string, { dependsOn: string }> = {
  variableName: {
    dependsOn: 'collection',
  },
  // Add more dependent parameters here as needed
}

interface ParameterMap {
  [key: string]: any // Changed from string | number | boolean to any to support complex objects
}

const getMethodDescription = (
  category: string,
  functionName: string,
): string => {
  const descriptions: { [key: string]: { [key: string]: string } } = {
    elements: {
      'elementManagement.getSelectedElement':
        'Get info about the currently selected element',
      // Add more descriptions as needed
    },
  }
  return descriptions[category]?.[functionName] || ''
}

const APIExplorer: React.FC = () => {
  const [selectedExampleCategory, setSelectedExampleCategory] = useState('')
  const [selectedFunctionName, setSelectedFunctionName] = useState('')
  const [functionParameters, setFunctionParameters] = useState<
    Record<string, any>
  >({})
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

  // Auto-select first example and function on mount
  useEffect(() => {
    if (!hasInitializedRef.current) {
      hasInitializedRef.current = true
      const firstCategory = Object.keys(examples)[0]
      setSelectedExampleCategory(firstCategory)

      // Get first function from the category, handling nested subcategories
      const categoryContent = examples[firstCategory] || {}
      const firstSubcategory = Object.keys(categoryContent)[0]

      // Check if we have nested subcategories
      if (
        typeof categoryContent[firstSubcategory] === 'object' &&
        !('type' in (categoryContent[firstSubcategory] || {}))
      ) {
        // Handle nested structure - use subcategory.function format
        const firstFunction = Object.keys(categoryContent[firstSubcategory])[0]
        setSelectedFunctionName(`${firstSubcategory}.${firstFunction}`)
      } else {
        // Handle flat structure
        setSelectedFunctionName(firstSubcategory)
      }
    }
  }, [])

  // Safe console for API Explorer
  const apiSafeConsole = {
    log: (...args: any[]) =>
      setApiOutput(
        (prev) =>
          prev +
          args
            .map((arg) =>
              arg instanceof Error
                ? `${arg.name}: ${arg.message}\n${arg.stack}`
                : typeof arg === 'object' && arg !== null
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
              arg instanceof Error
                ? `${arg.name}: ${arg.message}\n${arg.stack}`
                : typeof arg === 'object' && arg !== null
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
              arg instanceof Error
                ? `${arg.name}: ${arg.message}\n${arg.stack}`
                : typeof arg === 'object' && arg !== null
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
              arg instanceof Error
                ? `${arg.name}: ${arg.message}\n${arg.stack}`
                : typeof arg === 'object' && arg !== null
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
      selectedExampleCategory &&
      !hasAutoExecutedRef.current
    ) {
      hasAutoExecutedRef.current = true
      handleFunctionExecution()
    }
  }, [selectedFunctionName, selectedExampleCategory, parameterNames])

  // Fetch all non-dependent enum values at once
  const enumQueries = useQueries({
    queries: parameterTypes.map((paramType, index) => {
      const paramName = parameterNames[index]
      const dependency = PARAMETER_DEPENDENCIES[paramName]

      // Skip dependent parameters and VariableInfo - they'll be handled separately
      if (dependency || paramType === 'VariableInfo') {
        return {
          queryKey: ['enumValues', paramType, 'dependent'],
          queryFn: async () => null,
          enabled: false,
        }
      }

      return {
        queryKey: ['enumValues', paramType],
        queryFn: async () => {
          if (!hasEnumProvider(paramType)) return null
          const provider = enumProviders[paramType as EnumProviderType]
          return (provider as DynamicEnumProvider<DynamicEnumValue>).getAll()
        },
        enabled: hasEnumProvider(paramType),
        staleTime: 5 * 60 * 1000,
        cacheTime: 10 * 60 * 1000,
      }
    }),
  })

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
        try {
          setApiOutput('')
          const paramValues =
            parameterNames.length > 0
              ? parameterNames.map((name: string) => functionParameters[name])
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

  const renderParameter = (name: string, index: number) => {
    const paramType = parameterTypes[index]
    const hasProvider = hasEnumProvider(paramType)
    const dependency = PARAMETER_DEPENDENCIES[name]

    let options: any[] = []
    let isLoading = false
    let error: Error | null = null
    let isDynamicEnum = false

    if (paramType === 'VariableInfo') {
      options = variables || []
      isLoading = variablesLoading
      error = variablesError as Error
      isDynamicEnum = true
    } else if (!dependency) {
      // Handle non-dependent parameters
      const queryResult = enumQueries[index]
      const {
        data,
        isLoading: queryLoading,
        error: queryError,
      } = queryResult || {}
      options = data || []
      isLoading = queryLoading
      error = queryError as Error
      isDynamicEnum = hasProvider && data !== null
    }

    return (
      <ParameterInput
        key={name}
        name={name}
        value={functionParameters[name] || ''}
        onChange={handleParameterChange}
        inputType={hasProvider ? 'enum' : 'text'}
        options={options}
        isDynamicEnum={isDynamicEnum}
        placeholder={
          isLoading
            ? 'Loading...'
            : error
              ? `Error: ${error.message}`
              : `Enter ${name}`
        }
        disabled={isDynamicEnum && (isLoading || !!error)}
        loading={isLoading}
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
        getMethodDescription(selectedExampleCategory, selectedFunctionName) && (
          <div className="text-sm text-gray-400 mb-4">
            {getMethodDescription(
              selectedExampleCategory,
              selectedFunctionName,
            )}
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
