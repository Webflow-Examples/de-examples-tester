import type {
  VariableCollectionInfo,
  VariableInfo,
  DynamicEnumProvider,
} from '../types/dynamic-enums'
import { createDynamicEnumMap } from '../types/dynamic-enums'

// Types for collections
export type VariableCollections = Record<string, VariableCollectionInfo>
export type Variables = Record<string, VariableInfo>

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
    getAllVariableCollections: async () => {
      // Get All Variable Collections
      const variableCollections = await webflow.getAllVariableCollections()
      console.log('All Variable Collections:')
      console.log(variableCollections)
    },

    createVariableCollection: async (name: string) => {
      // Create a new variable collection
      const newVariableCollection = await webflow.createVariableCollection(name)
      console.log('New Variable Collection:')
      console.log(newVariableCollection)
    },

    getVariableCollectionById: async (id: string) => {
      // Get Variable Collection by ID
      const variableCollection = await webflow.getVariableCollectionById(id)
      console.log('Variable Collection:')
      console.log(variableCollection)
    },

    getDefaultVariableCollection: async () => {
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

    removeVariableCollection: async (id: string) => {
      // Remove Variable Collection
      const removedVariableCollection =
        await webflow.removeVariableCollection(id)
      console.log(removedVariableCollection)
    },

    getCollectionName: async () => {
      // Get Collection
      const defaultVariableCollection =
        await webflow.getDefaultVariableCollection()

      // Get Collection Name
      const collectionName = await defaultVariableCollection?.getName()
      console.log(collectionName)
    },

    getCollectionAndVariables: async () => {
      // Fetch the default variable collection
      const defaultVariableCollection =
        await webflow.getDefaultVariableCollection()

      if (defaultVariableCollection) {
        // Print Collection ID
        console.log(
          'Default Variable Collection ID:',
          defaultVariableCollection.id,
        )

        // Fetch all variables within the default collection
        const variables = await defaultVariableCollection.getAllVariables()

        if (variables.length > 0) {
          console.log('List of Variables in Default Collection:')

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

  // Variable Creation
  variableCreation: {
    createColorVariable: async () => {
      // Get Collection
      const collection = await webflow.getDefaultVariableCollection()

      // Create Color Variable with a HEX Codre
      const myColorVariable = await collection?.createColorVariable(
        'primary',
        '#ffcc11',
      )
      console.log(myColorVariable)
    },

    createCustomColorVariable: async () => {
      // Get Collection
      const collection = await webflow.getDefaultVariableCollection()

      // Create Color Variable
      const webflowBlue = await collection?.createColorVariable(
        'blue-500',
        '#146EF5',
      )

      // Get the binding to the webflowBlue variable
      const webflowBlueBinding = await webflowBlue?.getBinding()

      // Function to create a string that uses the binding and CSS color-mix function
      const colorMix = (binding, color, opacity) =>
        `color-mix(in srgb, ${binding} , ${color} ${opacity}%)`

      // Create a color variable that uses a CSS function
      const webflowBlue400 = await collection?.createColorVariable('blue-400', {
        type: 'custom',
        value: colorMix(webflowBlueBinding, '#fff', 60),
      })
      console.log(webflowBlue400)
    },

    createSizeVariable: async () => {
      // Get Collection
      const collection = await webflow.getDefaultVariableCollection()

      // Create Size Variable with a Size Value
      const mySizeVariable = await collection?.createSizeVariable(
        'Default Padding',
        { unit: 'px', value: 50 },
      )
      console.log(mySizeVariable)
    },

    createCustomSizeVariable: async () => {
      // Get Collection
      const collection = await webflow.getDefaultVariableCollection()
    },

    createFontFamilyVariable: async () => {
      // Get Collection
      const collection = await webflow.getDefaultVariableCollection()

      // Create Font Family Variable with a Font Family Name
      const myFontFamilyVariable = await collection?.createFontFamilyVariable(
        'Default Font',
        'Inter',
      )
      console.log(myFontFamilyVariable)
    },

    createNumberVariable: async (name: string, number: number) => {
      // Get Collection
      const collection = await webflow.getDefaultVariableCollection()

      // Create Number Variable with a Number Value
      const myNumberVariable = await collection?.createNumberVariable(
        name,
        number,
      )
      console.log(myNumberVariable)
    },

    createPercentageVariable: async (percentage: number) => {
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

  // Variable Management
  variableManagement: {
    getVariableById: async (id: string) => {
      // Get Collection
      const collection = await webflow.getDefaultVariableCollection()

      // Get variable by ID
      const variableById = await collection?.getVariable(id)
      console.log(variableById)
    },

    getVariableByName: async (name: string) => {
      // Get Collection
      const collection = await webflow.getDefaultVariableCollection()

      // Get Variable by Name
      const variableByName = (await collection?.getVariableByName(
        name,
      )) as ColorVariable
      console.log(variableByName)
    },

    editVariable: async () => {
      // Get Collection
      const collection = await webflow.getDefaultVariableCollection()

      if (collection) {
        // Get variable and reset name
        const variable = await collection.getVariableByName('Space Cadet')
        await variable?.setName('Our awesome bg color')
      }
    },
    getVariableValue: async (
      collection: VariableCollectionInfo,
      variable: VariableInfo,
    ) => {
      // Get selected collection and variable info
      const selCollection = await webflow.getVariableCollectionById(
        collection.id,
      )
      const selVariable = await selCollection?.getVariable(variable.id)

      // Get variable value. Include option to return custom values
      let value = await selVariable?.get({ customValues: true })

      console.log(`Raw value: ${JSON.stringify(value)}`)
      let type = selVariable?.type

      // If the variable is a custom value, return the value
      if (
        value &&
        typeof value === 'object' &&
        'type' in value &&
        value.type === 'custom'
      ) {
        value = value.value
        type = `Custom ${type}`
      }

      // If the variable is a variable reference, return the referenced variable name
      if (value && typeof value === 'object' && 'id' in value) {
        let referencedVariable = await selCollection?.getVariable(value.id)
        value = await referencedVariable?.getName()
        type = `Referenced ${type}`
      }

      console.log(`Variable Type: ${type}`)
      console.log(`Variable Value: ${value}`)

      return { value, type }
    },

    setVariableValue: async (name: string) => {
      // Get Collection
      const collection = await webflow.getDefaultVariableCollection()

      // Get Variable
      const variable = await collection?.getVariableByName(name)

      // Check Variable type and set color
      if (variable?.type === 'Color') await variable.set('#fffcc11')
    },

    setVariableValueWithMode: async () => {
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

    applyVariableToStyle: async (styleName: string, variableName: string) => {
      // Get collection
      const collection = await webflow.getDefaultVariableCollection()

      // Get Style and desired variable
      const style = await webflow.getStyleByName(styleName)
      const variable = await collection?.getVariable(variableName)

      // Check variable type and set property
      if (variable?.type === 'Size')
        await style?.setProperties({ 'font-size': variable })
    },

    variableAlias: async () => {
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
          'Space Cadet',
          firstVariable,
        )
      }
    },

    removeVariable: async () => {
      // Get collection
      const collection = await webflow.getDefaultVariableCollection()

      // Get variable by name
      const variable = await collection?.getVariable('id-123')

      // Delete variable
      await variable?.remove()
    },
  },
  // Variable Modes
  variableModes: {
    getAllVariableModes: async () => {
      // Get Collection
      const collection = await webflow.getDefaultVariableCollection()

      // Get All Variable Modes
      const variableModes = await collection?.getAllVariableModes()
      console.log(variableModes)
    },

    getVariableModeById: async (modeId: string) => {
      // Get Collection
      const collection = await webflow.getDefaultVariableCollection()

      // Get Variable Mode by ID
      const variableMode = await collection?.getVariableModeById(modeId)
      console.log(variableMode)
    },
    getVariableModeByName: async (modeName: string) => {
      // Get Collection
      const collection = await webflow.getDefaultVariableCollection()

      // Get Variable Mode by Name
      const variableMode = await collection?.getVariableModeByName(modeName)
      console.log(variableMode)
    },

    // Create Variable Mode
    createVariableMode: async (modeName: string) => {
      // Get Collection
      const collection = await webflow.getDefaultVariableCollection()

      // Create Variable Mode
      const variableMode = await collection?.createVariableMode(modeName)
      const newVariableMode = await collection?.getVariableModeByName(modeName)
      console.log(newVariableMode)
    },

    // Remove Variable Mode
    removeVariableMode: async (modeId: string) => {
      // Get Collection
      const collection = await webflow.getDefaultVariableCollection()

      // Get Variable Mode
      const variableMode = await collection?.getVariableModeById(modeId)

      // Remove Variable Mode
      variableMode?.remove()
    },
  },
}
