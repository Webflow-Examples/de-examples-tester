export const Variables = {
  getCollection: async () => {
    // Get Collection
    const defaultVariableCollection =
      await webflow.getDefaultVariableCollection()

    // Fetch all variables within the default collection
    const variables = await defaultVariableCollection?.getAllVariables()
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
      'Defualt Padding',
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

  setVariable: async (name: string) => {
    // Get Collection
    const collection = await webflow.getDefaultVariableCollection()

    // Get Variable
    const variable = await collection?.getVariableByName(name)

    // Check Variable type and set color
    if (variable?.type === 'Color') await variable.set('#fffcc11')
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
}
