/// <reference types="@webflow/designer-extension-typings" />

import type {
  VariableCollectionInfo,
  VariableInfo,
  DynamicEnumProvider,
  ObjectSelector,
} from '../types/dynamic-enums'
import {
  createDynamicEnumMap,
  createObjectSelector,
} from '../types/dynamic-enums'

// Types for collections
export type VariableCollections = Record<string, VariableCollectionInfo>
export type Variables = Record<string, VariableInfo>

// NEW: Object selector for actual VariableCollection objects (lazy initialization)
let _variableCollectionsObjectSelector: ObjectSelector<any> | null = null
let _variableCollectionsObjectSelectorPromise: Promise<
  ObjectSelector<any>
> | null = null

export const getVariableCollectionsObjectSelector = async (): Promise<
  ObjectSelector<any>
> => {
  if (_variableCollectionsObjectSelectorPromise) {
    return _variableCollectionsObjectSelectorPromise
  }
  if (_variableCollectionsObjectSelector) {
    return _variableCollectionsObjectSelector
  }
  _variableCollectionsObjectSelectorPromise = (async () => {
    const collections = await webflow.getAllVariableCollections()
    _variableCollectionsObjectSelector = await createObjectSelector(
      collections,
      async (collection) => ({
        id: collection.id,
        name: await collection.getName(),
        object: collection,
      }),
    )
    _variableCollectionsObjectSelectorPromise = null
    return _variableCollectionsObjectSelector
  })()
  return _variableCollectionsObjectSelectorPromise
}

// NEW: Object selector for actual Variable objects (lazy initialization)
let _variablesObjectSelector: ObjectSelector<any> | null = null
let _variablesObjectSelectorPromise: Promise<ObjectSelector<any>> | null = null

export const getVariablesObjectSelector = async (): Promise<
  ObjectSelector<any>
> => {
  if (_variablesObjectSelectorPromise) {
    return _variablesObjectSelectorPromise
  }
  if (_variablesObjectSelector) {
    return _variablesObjectSelector
  }
  _variablesObjectSelectorPromise = (async () => {
    const collections = await webflow.getAllVariableCollections()
    const allVariables = []
    for (const collection of collections) {
      const variables = await collection.getAllVariables()
      for (const variable of variables) {
        allVariables.push({
          ...variable,
          collectionId: collection.id,
          collectionName: await collection.getName(),
        })
      }
    }
    _variablesObjectSelector = await createObjectSelector(
      allVariables,
      async (variable) => ({
        id: variable.id,
        name: `${await variable.getName()} (${variable.collectionName})`,
        object: variable,
      }),
    )
    _variablesObjectSelectorPromise = null
    return _variablesObjectSelector
  })()
  return _variablesObjectSelectorPromise
}

// Create the collections provider
export const collectionsProvider: DynamicEnumProvider<VariableCollectionInfo> =
  {
    getAll: async () => {
      const collections = await webflow.getAllVariableCollections()
      return Promise.all(
        collections.map(async (collection) => ({
          id: collection.id,
          name: await collection.getName(),
          data: { collection },
        })),
      )
    },
    getByName: async (name: string) => {
      const collections = await getVariableCollectionsEnum()
      return collections[name]
    },
    getById: async (id: string) => {
      const collection = await webflow.getVariableCollectionById(id)
      if (!collection) return undefined
      return {
        id: collection.id,
        name: await collection.getName(),
        data: { collection },
      }
    },
  }

// Create the variables provider
export const variablesProvider = (
  collection: VariableCollectionInfo,
): DynamicEnumProvider<VariableInfo> => ({
  getAll: async () => {
    const selCollection = await webflow.getVariableCollectionById(collection.id)
    const variables = await selCollection?.getAllVariables()
    if (!variables) return []
    return Promise.all(
      variables.map(async (variable) => ({
        id: variable.id,
        name: await variable.getName(),
        type: variable.type,
        data: { variable },
        collectionId: collection.id,
      })),
    )
  },
  getByName: async (name: string) => {
    const variables = await getVariablesEnum(collection)
    return variables[name]
  },
})

// Utility function to get all collections as an enum-like object
export const getVariableCollectionsEnum =
  async (): Promise<VariableCollections> => {
    const collections = await webflow.getAllVariableCollections()
    return createDynamicEnumMap(collections, async (collection) => ({
      id: collection.id,
      name: await collection.getName(),
      data: { collection },
    }))
  }

// Utility function to get all variables in a collection as an enum-like object
export const getVariablesEnum = async (
  collectionInfo: VariableCollectionInfo,
): Promise<Variables> => {
  const collection = await webflow.getVariableCollectionById(collectionInfo.id)
  if (!collection) {
    throw new Error(`Collection with ID ${collectionInfo.id} not found`)
  }
  const variables = await collection.getAllVariables()
  return createDynamicEnumMap(variables, async (variable) => ({
    id: variable.id,
    name: await variable.getName(),
    type: variable.type,
    data: { variable },
    collectionId: collectionInfo.id,
  }))
}

// NEW: Helper function to get actual VariableCollection object by name
export const getVariableCollectionObjectByName = async (
  name: string,
): Promise<any | undefined> => {
  const selector = await getVariableCollectionsObjectSelector()
  return await selector.getByName(name)
}

// NEW: Helper function to get actual Variable object by name
export const getVariableObjectByName = async (
  name: string,
): Promise<any | undefined> => {
  const selector = await getVariablesObjectSelector()
  return await selector.getByName(name)
}

// NEW: Function to create VariableMode ObjectSelector for a specific collection
export const createVariableModeObjectSelector = async (
  collectionId: string,
): Promise<ObjectSelector<any>> => {
  const collection = await webflow.getVariableCollectionById(collectionId)
  if (!collection) {
    throw new Error(`Collection with ID ${collectionId} not found`)
  }
  const variableModes = await collection.getAllVariableModes()
  return createObjectSelector(variableModes, async (mode) => ({
    id: mode.id,
    name: await mode.getName(),
    object: mode,
  }))
}

// NEW: Cached VariableMode ObjectSelectors to avoid recreating them
const variableModeSelectorsCache = new Map<string, ObjectSelector<any>>()

// NEW: Function to get VariableMode ObjectSelector for a collection (with caching)
export const getVariableModeObjectSelector = async (
  collectionId: string,
): Promise<ObjectSelector<any>> => {
  if (variableModeSelectorsCache.has(collectionId)) {
    return variableModeSelectorsCache.get(collectionId)!
  }
  const selector = await createVariableModeObjectSelector(collectionId)
  variableModeSelectorsCache.set(collectionId, selector)
  return selector
}

interface WebflowVariable {
  id: string
  getName: () => Promise<string>
  getType: () => Promise<string>
}

// Helper function to get a specific collection by name
export const getCollectionByName = async (
  name: string,
): Promise<VariableCollectionInfo | undefined> => {
  const collections = await getVariableCollectionsEnum()
  return collections[name]
}

// Helper function to get a variable by name from a collection
export const getVariableByName = async (
  collection: VariableCollectionInfo,
  variableName: string,
): Promise<VariableInfo | undefined> => {
  const variables = await getVariablesEnum(collection)
  return variables[variableName]
}

export const Variables = {
  // Collection Management
  collectionManagement: {
    getAllVariableCollections: {
      displayName: 'Get all variable collections',
      code: async () => {
        // Get All Variable Collections
        const variableCollections = await webflow.getAllVariableCollections()
        console.log('All Variable Collections:')
        console.log(variableCollections)
      },
    },

    createVariableCollection: {
      displayName: 'Create variable collection',
      code: async (name: string) => {
        // Create a new variable collection
        const newVariableCollection = await webflow.createVariableCollection(name)
        console.log('New Variable Collection:')
        console.log(newVariableCollection)
      },
    },

    getVariableCollectionById: {
      displayName: 'Get variable collection by ID',
      code: async (id: string) => {
        // Get Variable Collection by ID
        const variableCollection = await webflow.getVariableCollectionById(id)
        console.log('Variable Collection:')
        console.log(variableCollection)
      },
    },

    getDefaultVariableCollection: {
      displayName: 'Get default variable collection',
      code: async () => {
        // Get Collection
        const defaultVariableCollection =
          await webflow.getDefaultVariableCollection()
        console.log('Default Variable Collection:')
        console.log(defaultVariableCollection)

        // Fetch all variables within the default collection
        const variables = await defaultVariableCollection?.getAllVariables()
        console.log('Variables in Default Collection:')
        console.log(variables)
      },
    },

    removeVariableCollection: {
      displayName: 'Remove variable collection',
      code: async (id: string) => {
        // Remove Variable Collection
        const removedVariableCollection =
          await webflow.removeVariableCollection(id)
        console.log(removedVariableCollection)
      },
    },

    getCollectionName: {
      displayName: 'Get collection name',
      code: async () => {
        // Get Collection
        const defaultVariableCollection =
          await webflow.getDefaultVariableCollection()

        // Get Collection Name
        const collectionName = await defaultVariableCollection?.getName()
        console.log(collectionName)
      },
    },

    getCollectionAndVariables: {
      displayName: 'Get collection and variables',
      code: async (
        variableCollection: VariableCollection,
      ) => {
        if (variableCollection) {
          // Print Collection ID
          console.log('Default Variable Collection ID:', variableCollection.id)

          // Fetch all variables within the default collection
          const variables = await variableCollection.getAllVariables()

          if (variables.length > 0) {
            const collectionName = await variableCollection.getName()
            console.log(`List of Variables in ${collectionName}:`)

            // Print variable details
            for (var i in variables) {
              console.log(
                `${i}. Variable Name: ${await variables[i].getName()}, Variable ID: ${variables[i].id}`,
              )
            }
          } else {
            console.log('No variables found in the default collection.')
          }
        } else {
          console.log('Default Variable Collection not found.')
        }
      },
    },
  },

  // Variable Creation
  variableCreation: {
    createColorVariable: {
      displayName: 'Create color variable',
      code: async (
        variableCollection: VariableCollection,
        color: string,
      ) => {
        // Get Collection
        const collection = variableCollection

        // Create Color Variable with a HEX Code
        const myColorVariable = await collection?.createColorVariable(
          'primary',
          color,
        )
        console.log(myColorVariable)
      },
    },

    createCustomColorVariable: {
      displayName: 'Create custom color variable',
      code: async () => {
        // Get Collection
        const collection = await webflow.getDefaultVariableCollection()

        // Create Color Variable
        const webflowBlue = await collection?.createColorVariable(
          'blue-500',
          '#146EF5',
        )

        // Get the binding to the webflowBlue variable
        const webflowBlueBinding = (await webflowBlue?.getBinding()) as string

        // Function to create a string that uses the binding and CSS color-mix function
        const colorMix = (binding: string, color: string, opacity: number) =>
          `color-mix(in srgb, ${binding} , ${color} ${opacity}%)`

        // Create a color variable that uses a CSS function
        const webflowBlue400 = await collection?.createColorVariable('blue-400', {
          type: 'custom',
          value: colorMix(webflowBlueBinding, '#fff', 60),
        })
        console.log(webflowBlue400)
      },
    },

    createSizeVariable: {
      displayName: 'Create size variable',
      code: async () => {
        // Get Collection
        const collection = await webflow.getDefaultVariableCollection()

        // Create Size Variable with a Size Value
        const mySizeVariable = await collection?.createSizeVariable(
          'Default Padding',
          { unit: 'px', value: 50 },
        )
        console.log(mySizeVariable)
      },
    },

    createCustomSizeVariable: {
      displayName: 'Create custom size variable',
      code: async () => {
        // Get Collection
        const collection = await webflow.getDefaultVariableCollection()
      },
    },

    createFontFamilyVariable: {
      displayName: 'Create font family variable',
      code: async () => {
        // Get Collection
        const collection = await webflow.getDefaultVariableCollection()

        // Create Font Family Variable with a Font Family Name
        const myFontFamilyVariable = await collection?.createFontFamilyVariable(
          'Default Font',
          'Inter',
        )
        console.log(myFontFamilyVariable)
      },
    },

    createNumberVariable: {
      displayName: 'Create number variable',
      code: async (name: string, number: number) => {
        // Get Collection
        const collection = await webflow.getDefaultVariableCollection()

        // Create Number Variable with a Number Value
        const myNumberVariable = await collection?.createNumberVariable(
          name,
          number,
        )
        console.log(myNumberVariable)
      },
    },

    createPercentageVariable: {
      displayName: 'Create percentage variable',
      code: async (percentage: number) => {
        // Get Collection
        const collection = await webflow.getDefaultVariableCollection()

        // Create Percentage Variable with a Percentage Value
        const myPercentageVariable = await collection?.createPercentageVariable(
          'My Percentage',
          percentage,
        )
        console.log(myPercentageVariable)
      },
    },
  },

  // Variable Management
  variableManagement: {
    getAllVariables: {
      displayName: 'Get all variables',
      code: async (variableCollection: VariableCollection) => {
        try {
          const variables = await variableCollection?.getAllVariables()
          if (!variables) {
            console.log('No variables in this collection.')
            return
          }

          const variablePromises = variables.map(async (variable) => {
            const name = await variable.getName()
            const value = await variable.get({ customValues: true })
            return {
              id: variable.id,
              name: name,
              type: variable.type,
              value: value,
            }
          })

          const variableArray = await Promise.all(variablePromises)
          console.log('All Variables:', variableArray)
        } catch (error) {
          console.error('Failed to get all variables:', error)
        }
      },
    },

    getVariableById: {
      displayName: 'Get variable by ID',
      code: async (
        variableCollection: VariableCollection,
        id: string,
      ) => {
        // Get Collection
        const collection = variableCollection

        // Get variable by ID
        const variableById = await collection?.getVariable(id)
        console.log(variableById)
      },
    },

    getVariableByName: {
      displayName: 'Get variable by name',
      code: async (
        variableCollection: VariableCollection,
        name: string,
      ) => {
        // Get Collection
        const collection = variableCollection

        // Get Variable by Name
        const variableByName = (await collection?.getVariableByName(
          name,
        )) as ColorVariable
        console.log(variableByName)
      },
    },

    editVariable: {
      displayName: 'Edit variable',
      code: async (
        variableCollection: VariableCollection,
        variableName: string,
        newName: string,
      ) => {
        // Get Collection
        const collection = variableCollection

        if (collection) {
          // Get variable and reset name
          const variable = await collection.getVariableByName(variableName)
          console.log(variable)
          await variable?.setName(newName)
        }
      },
    },

    getVariableValue: {
      displayName: 'Get variable value',
      code: async (
        collection: VariableCollectionInfo,
        variable: VariableInfo,
      ) => {
        // Get selected collection and variable info
        const selCollection = await webflow.getVariableCollectionById(
          collection.id,
        )
        const selVariable = await selCollection?.getVariable(variable.id)

        // Get variable value, add option to return variables with custom values
        let value = await selVariable?.get({ customValues: true })

        // Log the raw value and get the variable's type
        console.log(`Raw value from .get(): ${JSON.stringify(value)}`)
        let type = selVariable?.type

        // A variable reference (alias) is returned as an object with the referenced variable's ID: { id: '...' }
        if (value && typeof value === 'object' && 'id' in value) {
          const referencedVariable = await selCollection?.getVariable(value.id)
          const referencedName = await referencedVariable?.getName()
          value = `Alias to: ${referencedName}`
          type = `Referenced ${type}`
        }

        // A custom value is returned as an object: { type: 'custom', value: '...' }
        if (
          value &&
          typeof value === 'object' &&
          'type' in value &&
          value.type === 'custom'
        ) {
          value = value.value
          type = `Custom ${type}`
        }

        // Output the variable type and value
        console.log(`Variable Type: ${type}`)
        console.log(`Variable Value: ${value}`)

        return { value, type }
      },
    },

    getVariableBinding: {
      displayName: 'Get variable binding',
      code: async (
        variableCollection: VariableCollection,
        variable: string,
      ) => {
        // Get Variable
        const myVariable = await variableCollection?.getVariableByName(variable)
        const binding = await myVariable?.getBinding()

        // Output the binding
        console.log(binding)
      },
    },

    getVariableCSSName: {
      displayName: 'Get variable CSS name',
      code: async (
        variableCollection: VariableCollection,
        variable: string,
      ) => {
        // Get Variable
        const myVariable = await variableCollection?.getVariableByName(variable)
        const cssName = await myVariable?.getCSSName()
        console.log(cssName)
      },
    },

    setVariableValue: {
      displayName: 'Set variable value',
      code: async (name: string) => {
        // Get Collection
        const collection = await webflow.getDefaultVariableCollection()

        // Get Variable
        const variable = await collection?.getVariableByName(name)

        // Check Variable type and set color
        if (variable?.type === 'Color') await variable.set('#fffcc11')
      },
    },

    setVariableValueWithMode: {
      displayName: 'Set variable value with mode',
      code: async () => {
        // Get the default variable collection
        const collection = await webflow.getDefaultVariableCollection()

        // Create variable for the collection with a default value
        const colorVariable = await collection?.createColorVariable(
          'Body Text',
          '#ccc',
        )

        // Create a variable mode
        const variableMode = await collection?.createVariableMode('Dark Mode')

        // Set a mode-specific value on the variables
        await colorVariable?.set('#FFF', { mode: variableMode })
      },
    },

    applyVariableToStyle: {
      displayName: 'Apply variable to style',
      code: async (styleName: string, variableName: string) => {
        // Get collection
        const collection = await webflow.getDefaultVariableCollection()

        // Get Style and desired variable
        const style = await webflow.getStyleByName(styleName)
        const variable = await collection?.getVariable(variableName)

        // Check variable type and set property
        if (variable?.type === 'Size')
          await style?.setProperties({ 'font-size': variable })
      },
    },

    getVariableAlias: {
      displayName: 'Get variable alias',
      code: async () => {
        // Get Collection
        const collection = await webflow.getDefaultVariableCollection()

        // Create first variable
        const firstVariable = await collection?.createColorVariable(
          'Default Color',
          'red',
        )

        if (firstVariable) {
          // Create second variable as an alias of the first
          const secondVariable = await collection?.createColorVariable(
            'Aliased Variable',
            firstVariable,
          )

          const alias = await secondVariable?.get()
          // This will output the ID of the aliased variable
          console.log(alias)
        }
      },
    },

    removeVariable: {
      displayName: 'Remove variable',
      code: async () => {
        // Get collection
        const collection = await webflow.getDefaultVariableCollection()

        // Get variable by name
        const variable = await collection?.getVariable('id-123')

        // Delete variable
        await variable?.remove()
      },
    },
  },

  // Variable Modes
  variableModes: {
    getAllVariableModes: {
      displayName: 'Get all variable modes',
      code: async (variableCollection: VariableCollection) => {
        // Get All Variable Modes
        const variableModes = await variableCollection?.getAllVariableModes()
        console.log(variableModes)
      },
    },

    getVariableModeById: {
      displayName: 'Get variable mode by ID',
      code: async (
        variableCollection: VariableCollection,
        modeId: string,
      ) => {
        // Get Collection
        const collection = variableCollection

        // Get Variable Mode by ID
        const variableMode = await collection?.getVariableModeById(modeId)
        console.log(variableMode)
      },
    },

    getVariableModeByName: {
      displayName: 'Get variable mode by name',
      code: async (
        variableCollection: VariableCollection,
        modeName: string,
      ) => {
        // Get Collection
        const collection = variableCollection

        // Get Variable Mode by Name
        const variableMode = await collection?.getVariableModeByName(modeName)
        console.log(variableMode)
      },
    },

    createVariableMode: {
      displayName: 'Create variable mode',
      code: async (
        variableCollection: VariableCollection,
        modeName: string,
      ) => {
        // Get Collection
        const collection = variableCollection

        // Create Variable Mode
        const variableMode = await collection?.createVariableMode(modeName)
        const newVariableMode = await collection?.getVariableModeByName(modeName)
        console.log(newVariableMode)
      },
    },

    removeVariableMode: {
      displayName: 'Remove variable mode',
      code: async (
        variableCollection: VariableCollection,
        variableMode: VariableMode,
      ) => {
        // Remove Variable Mode
        variableMode?.remove()
      },
    },
  },
}
