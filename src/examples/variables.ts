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
