export const Styles = {
  getAllStyles: async () => {
    // Get all Styles
    const allStyles = await webflow.getAllStyles()

    // List Styles
    if (allStyles.length > 0) {
      console.log('List of all styles:')

      allStyles.forEach(async (style, index) => {
        // Print style names and ids
        console.log(
          `${index + 1}. Style Name: ${await style.getName()}, Style ID: ${style.id}`,
        )
      })
    } else {
      console.log('No styles found in the current context.')
    }
  },
  getStyleByName: async (styleName: string) => {
    // Retrieve the style by name
    const retrievedStyle = await webflow.getStyleByName(styleName)

    if (retrievedStyle) {
      // Get and print properties of the retrieved style
      const styleProperties = await retrievedStyle.getProperties()
      console.log('Style properties:', styleProperties)
    } else {
      console.log(`Style ${styleName} not found.`)
    }
  },
  createStyle: async (styleName: string) => {
    // Create new style
    const newStyle = await webflow.createStyle(styleName)

    // Set properties for the style
    newStyle.setProperties({
      'background-color': 'blue',
      'font-size': '16px',
      'font-weight': 'bold',
    })

    // Get Selected Element
    const selectedElement = await webflow.getSelectedElement()

    if (selectedElement?.styles) {
      // Apply style to selected element
      await selectedElement.setStyles([newStyle])
    } else {
      console.log('No element selected')
    }
  },
  removeStyle: async (styleName: string) => {

    // Retrieve the style by name
    const retrievedStyle = await webflow.getStyleByName(styleName)

    if (retrievedStyle) {
        
        // Remove Style
        await webflow.removeStyle(retrievedStyle)
        console.log(`Style: ${styleName} was removed`)
        
    } else {
      console.log(`Style ${styleName} not found.`)
    }

  },

  getStyleProperties: async () => {
    // Get selected element
    const element = await webflow.getSelectedElement()

    if (element?.styles) {
      // Get Element Styles
      const styles = await element.getStyles()

      // Initialize an empty object to store all properties
      const allProperties: { [key: string]: any } = {}

      for (let style of styles) {
        // Use string type for styleName
        const styleName: string = await style.getName()
        const breakpoint: BreakpointAndPseudo = { breakpoint: 'xxl' }
        const properties = await style.getProperties(breakpoint)
        allProperties[styleName] = properties
      }

      console.log(allProperties)
    }
  },
  setStyleProperties: async () => {
    // Get Selected Element
    const selectedElement = await webflow.getSelectedElement()

    if (selectedElement?.styles) {
      // Get Element Styles
      const styles = await selectedElement.getStyles()
      const primaryStyle = styles[0]

      if (primaryStyle) {
        const propertyMap = {
          'background-color': 'blue',
          'font-size': '16px',
          'font-weight': 'bold',
        }

        await primaryStyle.setProperties(propertyMap)
      } else {
        console.log('Please choose an element with styles')
      }
    }
  },
  getStyleProperty: async (propertyName: StyleProperty) => {
    // Get Selected Element
    const selectedElement = await webflow.getSelectedElement()

    if (selectedElement?.styles) {
      // Get Element Styles
      const styles = await selectedElement.getStyles()

      // For each style, list values of propertyName
      const selectedPropertyList = await Promise.all(
        styles.map(async (style) => {
          const styleName = await style.getName()
          const property = await style.getProperty(propertyName)
          console.log(`Style Name: ${styleName}, ${propertyName}: ${property}`)
        }),
      )
    }
  },

  setStyleProperty: async (
    styleProperty: StyleProperty,
    propertyValue: string,
  ) => {
    // Get Selected Element
    const selectedElement = await webflow.getSelectedElement()

    if (selectedElement?.styles) {
      // Get Element Styles
      const styles = await selectedElement.getStyles()
      const primaryStyle = styles[0]
      await primaryStyle.setProperty(styleProperty, propertyValue)
    }
  },
  clearAllStyleProperties: async (styleName: string) => {
    // Retrieve the style by name
    const retrievedStyle = await webflow.getStyleByName(styleName)

    // Clear Style Properties
    await retrievedStyle?.removeAllProperties()
  },
  removeSingleStyleProperty: async (property: StyleProperty) => {
    // Get Selected Element
    const selectedElement = await webflow.getSelectedElement()

    if (selectedElement?.styles) {
      // Get Element Styles
      const styles = await selectedElement.getStyles()
      const primaryStyle = styles[0]
      await primaryStyle.removeProperty(property)
    }
  },
  removeMultipleStyles: async () => {
    // Get Selected Element
    const selectedElement = await webflow.getSelectedElement()

    if (selectedElement?.styles) {
      // Get Element Styles
      const styles = await selectedElement.getStyles()
      const primaryStyle = styles[0]
      const properties: StyleProperty[] = [
        'background-color',
        'accent-color',
        'font-family',
      ]
      await primaryStyle.removeProperties(properties)
    }
  },

  createStyleApplySelectedElement: async () => {
    // Get selected element
    const selectedElement = await webflow.getSelectedElement()

    // Create new style
    const newStyle = await webflow.createStyle('My Custom Style')

    // Create a variable
    const collection = await webflow.getDefaultVariableCollection()
    const webflowBlue = await collection?.createColorVariable(
      'Webflow Blue',
      '#146EF5',
    )

    // Create a PropertyMap object
    const propertyMap: PropertyMap = {
      'background-color': webflowBlue as ColorVariable,
      'font-size': '16px',
      'font-weight': 'bold',
    }

    // Set style properties
    await newStyle.setProperties(propertyMap)

    // apply newStyle to element
    if (selectedElement?.styles) await selectedElement.setStyles([newStyle])
  },
}
