import type {
  StyleInfo,
  DynamicEnumProvider,
  ObjectSelector,
} from '../types/dynamic-enums'
import {
  createDynamicEnumMap,
  createObjectSelector,
} from '../types/dynamic-enums'

// Types for style collections
export type StylesEnum = {
  [key: string]: StyleInfo
}

// NEW: Object selector for actual Style objects (lazy initialization)
let _stylesObjectSelector: ObjectSelector<any> | null = null
let _stylesObjectSelectorPromise: Promise<ObjectSelector<any>> | null = null

export const getStylesObjectSelector = async (): Promise<
  ObjectSelector<any>
> => {
  // If we already have a promise in progress, return it to avoid multiple simultaneous calls
  if (_stylesObjectSelectorPromise) {
    return _stylesObjectSelectorPromise
  }

  // If we already have the selector, return it
  if (_stylesObjectSelector) {
    return _stylesObjectSelector
  }

  // Create a new promise for the selector creation
  _stylesObjectSelectorPromise = (async () => {
    const styles = await webflow.getAllStyles()
    _stylesObjectSelector = await createObjectSelector(
      styles,
      async (style) => ({
        id: style.id,
        name: await style.getName(),
        object: style,
      }),
    )
    _stylesObjectSelectorPromise = null // Clear the promise
    return _stylesObjectSelector
  })()

  return _stylesObjectSelectorPromise
}

// Create the styles provider (keeping for backward compatibility)
export const stylesProvider: DynamicEnumProvider<StyleInfo> = {
  getAll: async () => {
    const styles = await webflow.getAllStyles()
    const styleInfos = await Promise.all(
      styles.map(async (style) => ({
        id: style.id,
        name: await style.getName(),
        data: { style },
      })),
    )
    // Sort alphabetically by name
    return styleInfos.sort((a, b) => a.name.localeCompare(b.name))
  },
  getByName: async (name: string) => {
    const styles = await getStylesEnum()
    return styles[name]
  },
}

// Utility function to get all styles as an enum-like object
export const getStylesEnum = async (): Promise<StylesEnum> => {
  const styles = await webflow.getAllStyles()
  const styleInfos = await Promise.all(
    styles.map(async (style) => ({
      id: style.id,
      name: await style.getName(),
      data: { style },
    })),
  )
  // Sort alphabetically by name
  const sortedStyles = styleInfos.sort((a, b) => a.name.localeCompare(b.name))
  return createDynamicEnumMap(sortedStyles, async (styleInfo) => styleInfo)
}

// Helper function to get a specific style by name
export const getStyleByName = async (
  name: string,
): Promise<StyleInfo | undefined> => {
  const styles = await getStylesEnum()
  return styles[name]
}

// NEW: Helper function to get actual Style object by name
export const getStyleObjectByName = async (
  name: string,
): Promise<any | undefined> => {
  const selector = await getStylesObjectSelector()
  return await selector.getByName(name)
}

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

  getStyleProperties: async (style: Style) => {
    // Now style is the actual Style object, not wrapped
    if (style) {
      const properties = await style.getProperties()
      console.log(properties)
    }
  },
  setStyleProperties: async () => {
    // Get Selected Element
    const selectedElement = await webflow.getSelectedElement()

    if (selectedElement?.styles) {
      // Get Element Styles
      const styles = await selectedElement.getStyles()
      const primaryStyle = styles?.[0]

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
      if (styles) {
        const selectedPropertyList = await Promise.all(
          styles.map(async (style) => {
            if (style) {
              const styleName = await style.getName()
              const property = await style.getProperty(propertyName)
              console.log(
                `Style Name: ${styleName}, ${propertyName}: ${property}`,
              )
            }
          }),
        )
      }
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
      const primaryStyle = styles?.[0]
      if (primaryStyle) {
        await primaryStyle.setProperty(styleProperty, propertyValue)
        console.log(primaryStyle.getProperty(styleProperty))
      }
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
      const primaryStyle = styles?.[0]
      if (primaryStyle) {
        await primaryStyle.removeProperty(property)
      }
    }
  },
  removeMultipleStyleProperties: async () => {
    // Get Selected Element
    const selectedElement = await webflow.getSelectedElement()

    if (selectedElement?.styles) {
      // Get Element Styles
      const styles = await selectedElement.getStyles()
      const primaryStyle = styles?.[0]
      if (primaryStyle) {
        const properties: StyleProperty[] = [
          'background-color',
          'accent-color',
          'font-family',
        ]
        await primaryStyle.removeProperties(properties)
      }
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

  // Variable Modes

  getVariableModes: async () => {
    // Get Variable Mode
    const selectedElement = await webflow.getSelectedElement()

    if (selectedElement?.styles) {
      const styles = await selectedElement.getStyles()
      if (styles) {
        const primaryStyle = styles[0]
        const variableModes = await primaryStyle?.getVariableModes()
        console.log(variableModes)
      }
    }
  },

  getVariableMode: async (variableCollection: VariableCollection) => {
    // Get Selected Element
    const selectedElement = await webflow.getSelectedElement()

    if (selectedElement?.styles) {
      // Get Styles
      const styles = await selectedElement.getStyles()
      const primaryStyle = styles?.[0] // Get the primary style

      // Get Variable Mode
      if (primaryStyle && variableCollection) {
        const variableMode =
          await primaryStyle.getVariableMode(variableCollection)
        const variableName = await variableMode?.getName()
        console.log(variableName)
      }
    }
  },

  setVariableModes: async (selectedStyle: Style) => {
    // This function gets variable modes from the style of the currently selected element, then sets them on the style selected in the explorer

    // Get Selected Element
    const selectedElement = await webflow.getSelectedElement()

    if (selectedElement?.styles) {
      // Get Styles
      const styles = await selectedElement.getStyles()
      const primaryStyle = styles?.[0] // Get the primary style
      const variableModes = await primaryStyle?.getVariableModes()

      // Set Variable Modes on Selected Style
      if (variableModes) {
        await selectedStyle?.setVariableModes(variableModes)
      }
    }
  },

  setVariableMode: async (
    variableCollection: VariableCollection,
    variableMode: VariableMode,
  ) => {
    // Get Selected Element
    const selectedElement = await webflow.getSelectedElement()

    if (selectedElement?.styles) {
      // Get Styles
      const styles = await selectedElement.getStyles()
      const primaryStyle = styles?.[0] // Get the primary style

      // Set Variable Mode
      if (primaryStyle && variableCollection) {
        await primaryStyle.setVariableMode(variableCollection, variableMode)
        console.log('Variable mode set successfully')
      }
    }
  },

  removeVariableMode: async (variableCollection: VariableCollection) => {
    // Get Selected Element
    const selectedElement = await webflow.getSelectedElement()

    if (selectedElement?.styles) {
      // Get Styles
      const styles = await selectedElement.getStyles()
      const primaryStyle = styles?.[0] // Get the primary style

      await primaryStyle?.removeVariableMode(variableCollection)
    }
  },

  removeVariableModes: async (variableCollection: VariableCollection) => {
    // Get Selected Element
    const selectedElement = await webflow.getSelectedElement()

    if (selectedElement?.styles) {
      // Get Styles
      const styles = await selectedElement.getStyles()
      const primaryStyle = styles?.[0] // Get the primary style

      // Get Variable Modes
      const variableModes = await variableCollection?.getAllVariableModes()
      const remove = await primaryStyle?.removeVariableModes(variableModes)
      console.log(remove)
    }
  },

  removeAllVariableModes: async () => {
    // Get Selected Element
    const selectedElement = await webflow.getSelectedElement()

    if (selectedElement?.styles) {
      // Get Styles
      const styles = await selectedElement.getStyles()
      const primaryStyle = styles?.[0] // Get the primary style

      // Get Variable Modes
      const remove = await primaryStyle?.removeAllVariableModes()
      console.log(remove)
    }
  },
}
