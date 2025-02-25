import { removeIfPresent } from 'typedoc/dist/lib/utils'

export enum LinkModeSettings {
  url = 'url',
  page = 'page',
  pageSection = 'pageSection',
  email = 'email',
  phone = 'phone',
  attachment = 'attachment',
}

export const Elements = {
  // Element Management
  elementManagement: {
    getSelectedElement: async () => {
      // Get Selected Element
      const element = await webflow.getSelectedElement()

      // Print element info
      if (element) {
        console.log(element)
        console.log(`Element type: ${element.type}`)
      } else {
        console.log('No element is currently selected.')
      }
    },

    setSelectedElement: async () => {
      // Get the Root Element
      const rootElement = await webflow.getRootElement()

      if (rootElement) {
        // Select the root element
        const selectedElement = await webflow.setSelectedElement(rootElement)

        if (selectedElement?.children) {
          // Start building elements on the selected element
          await selectedElement?.append(webflow.elementPresets.DOM)
        }
      }
    },

    getAllElements: async () => {
      // Retrieve all elements in the current context
      const allElements = await webflow.getAllElements()

      // Print element list
      if (allElements.length > 0) {
        console.log('List of all elements:')

        allElements.forEach((element, index) => {
          console.log(
            index + 1,
            'Element ID:',
            JSON.stringify(element),
            'Element Type:',
            element.type,
          )
        })
      } else {
        console.log('No elements found in the current context.')
      }
    },

    getRootElement: async () => {
      // Get Root Element
      const rootElement = await webflow.getRootElement()

      // Print element details
      console.log(`Type: ${rootElement?.type} \n ID: ${rootElement?.id}`)
    },

    removeElement: async () => {
      // Get Selected Element
      const el = await webflow.getSelectedElement()

      // Remove the selected element
      await el?.remove()
    },
  },

  // Element Creation
  elementCreation: {
    BulkAddElements: async () => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      // Build an element. We only support DOM elements and append for now.
      const rootElement = webflow.elementBuilder(webflow.elementPresets.DOM)

      // Append a DOM element to the element structure.
      const childElement = rootElement.append(webflow.elementPresets.DOM)
      childElement.setTag('svg')

      if (selectedElement?.children) {
        // Add root element to the deisgner by appending to selected Element
        await selectedElement.append(rootElement)
      }
    },

    BulkAddElementSVG: async () => {
      const childElementIds = []

      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      // Build an element. We only support DOM elements and append for now.
      const rootElement = webflow.elementBuilder(webflow.elementPresets.DOM)

      // Append a DOM element to the element structure.
      const svgElement = rootElement.append(webflow.elementPresets.DOM)
      svgElement.setTag('svg')
      childElementIds.push(svgElement)

      // Append a DOM element to the element structure.
      const rectElement = svgElement.append(webflow.elementPresets.DOM)
      const styles = await webflow.getAllStyles()
      rectElement.setTag('rect')
      rectElement.setAttribute('hello', 'world')
      rectElement.setStyles([styles[0]])
      childElementIds.push(rectElement)

      if (selectedElement?.children) {
        // Add root element to the deisgner by appending to selected Element
        const newEl = await selectedElement.append(rootElement)

        // get the children of the newly appended element
        if (newEl.children) {
          const newElChildren = await newEl.getChildren()

          const promises = []

          // loop through child elements that we added to the array during creation
          // and create an array of promises to later await
          for (let i = 0; i < childElementIds.length; i++) {
            const childEl = newElChildren.find(
              (x) => x.id.element === childElementIds[i].id,
            )
            console.log(childEl)
            switch (childEl?.getTag()) {
              case 'svg':
                promises.push(
                  childEl.setAttribute('xmlns', 'http://www.w3.org/2000/svg'),
                )
                break
              case 'rect':
                promises.push(childEl.setAttribute('width', '200'))
                promises.push(childEl.setAttribute('height', '100'))
                promises.push(childEl.setAttribute('x', '10'))
                promises.push(childEl.setAttribute('y', '10'))
                promises.push(childEl.setAttribute('rx', '20'))
                promises.push(childEl.setAttribute('ry', '20'))
                promises.push(childEl.setAttribute('fill', 'blue'))
                break
            }
          }

          await Promise.all(promises)
        }
      }
    },

    insertElementBefore: async () => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement) {
        // Insert DIV before selected Element
        const newDiv = await selectedElement.before(
          webflow.elementPresets.DivBlock,
        )

        // Print element details
        console.log(`${JSON.stringify(newDiv)}`)
      }
    },

    insertElementAfter: async () => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement) {
        // Insert DIV after selected Element
        const newDiv = await selectedElement.after(
          webflow.elementPresets.DivBlock,
        )

        // Print element details
        console.log(JSON.stringify(newDiv))
      }
    },

    appendElement: async () => {
      // Get Selected Element
      const el = await webflow.getSelectedElement()

      // Check if element supports child elements
      if (el?.children) {
        // Append newElement as a child to of the selected element
        const newElement = await el?.append(webflow.elementPresets.DivBlock)

        // Print element Details
        console.log(JSON.stringify(newElement))
      }
    },

    prependElement: async () => {
      // Get Selected Element
      const el = await webflow.getSelectedElement()

      // Check if element supports child elements
      if (el?.children) {
        // Prepend newElement as a child to of the selected element
        const newElement = await el?.prepend(webflow.elementPresets.DivBlock)

        // Print element Details
        console.log(JSON.stringify(newElement))
      }
    },
  },

  // Custom Attributes
  customAttributes: {
    getAllCustomAttributes: async () => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.customAttributes) {
        // Get All Custom Attributes
        const customAttributes = await selectedElement.getAllCustomAttributes()
        console.log(customAttributes)
      }
    },

    getCustomAttribute: async (name: string) => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.customAttributes) {
        // Get Custom Attribute by Name
        const customAttribute = await selectedElement.getCustomAttribute(name)
        console.log(customAttribute)
      }
    },

    setCustomAttribute: async (name: string, value: string) => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.customAttributes) {
        // Set Custom Attribute
        const newAttribute = await selectedElement.setCustomAttribute(
          name,
          value,
        )
      }
    },

    removeCustomAttribute: async (name: string) => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.customAttributes) {
        // Remove Custom Attribute
        await selectedElement.removeCustomAttribute(name)
      }
    },
  },

  // Text Content
  textContent: {
    getTextContent: async () => {
      const selectedElement = await webflow.getSelectedElement()

      // Check if element is a String type
      if (selectedElement?.type === 'String') {
        const text = await selectedElement.getText()
        console.log(text)
      }
      // Otherwise, check if element has child String elements
      else if (selectedElement?.children) {
        const children = await selectedElement.getChildren()
        const stringElements = children.filter(
          (child) => child.type === 'String',
        )

        if (stringElements.length > 0) {
          const textContentPromises = stringElements.map(
            async (stringElement: StringElement) => {
              const text = await stringElement.getText()
              return text
            },
          )
          const textContent = await Promise.all(textContentPromises)
          console.log(textContent)
        } else {
          console.log('Element does not support text content')
        }
      }
    },

    setTextContent: async (myText: string) => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      // Check if element supports text content
      if (selectedElement?.textContent) {
        // Set and print text content
        const text = await selectedElement.setTextContent(myText)
        console.log(selectedElement.textContent)

        // Check if element has child String elements
      } else if (selectedElement?.children) {
        const children = await selectedElement.getChildren()
        const stringElements = children.filter(
          (child) => child.type === 'String',
        )
        if (stringElements.length > 0) {
          // Set text content on child String elements
          const text = await stringElements[0].setText(myText)
          console.log(text)
        }
      } else {
        console.log('Element does not support text content')
      }
    },

    getText: async () => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.textContent && selectedElement?.children) {
        // Get Child Elements
        const children = await selectedElement.getChildren()

        // Filter string elements from children
        const strings = children.filter((child) => child.type === 'String')

        // Initialize an array to hold text content
        let textContent = []

        // Loop over string elements to get text
        for (const myString of strings) {
          if (myString.type === 'String') {
            const text = await myString.getText()
            textContent.push(text)
          }
        }

        // Print text
        console.log(textContent)
      }
    },

    setText: async (myText: string) => {
      // Get all elements and find the first StringElement
      const allElements = await webflow.getAllElements()
      const foundElement = allElements.find((el) => el.type === 'String')

      if (foundElement) {
        // Check that element has the method in order to use it
        if ('setText' in foundElement) {
          const elementText = foundElement.setText(myText) // Set Text
        }
      } else {
        console.log('Element not found on page')
      }
    },
  },

  // Styles
  styles: {
    getStyles: async () => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.styles) {
        // Get Styles
        const styles = await selectedElement.getStyles()

        // Get Style Details
        const styleDetails = styles.map(async (style) => {
          const styleName = await style.getName()
          const styleProperties = await style.getProperties()

          return {
            Name: styleName,
            Properties: styleProperties,
            ID: style.id,
          }
        })

        // Print Style Details
        console.log(await Promise.all(styleDetails))
      }
    },

    setStyles: async (styleName: string) => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.styles) {
        // Get Style by name
        const myStyle = await webflow.getStyleByName(styleName)

        if (myStyle) {
          // Set and print style
          await selectedElement.setStyles([myStyle])
          const styles = await selectedElement.getStyles()
          console.log(`Styles: ${JSON.stringify(styles)}`)
        }
      }
    },

    createAndSetStyle: async () => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.styles) {
        // Create a new style
        const newStyle = await webflow.createStyle('MyCustomStyle')

        // Set properties for the style
        newStyle.setProperties({
          'background-color': 'blue',
          'font-size': '32px',
          'font-weight': 'bold',
        })

        // Set style on selected element
        selectedElement.setStyles([newStyle])
      }
    },
  },

  // DOM Operations
  domOperations: {
    getTag: async () => {
      // Get All Elements and find first DOM Element
      const elements = await webflow.getAllElements()
      const DOMElement = elements.find((element) => element.type === 'DOM')

      if (DOMElement?.type === 'DOM') {
        // Get DOM Element's Tag
        const tag = await DOMElement.getTag()
        console.log(tag)
      } else {
        console.log('No DOM Element Found')
      }
    },

    setTag: async (myTag: string) => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.children) {
        // Create and append DOM Element
        const DOMElement = await selectedElement.append(
          webflow.elementPresets.DOM,
        )
        console.log(DOMElement)

        // Set Tag
        await DOMElement?.setTag(myTag)
        const tag = await DOMElement.getTag()
      }
    },

    getAllAttributes: async () => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.type === 'DOM') {
        const customAttributes = await selectedElement.getAllAttributes()
        console.log(customAttributes)
      }
    },

    getAttribute: async (name: string) => {
      // Get All Elements and find first DOM Element
      const elements = await webflow.getAllElements()
      const DOMElement = elements.find((element) => element.type === 'DOM')

      if (DOMElement?.type === 'DOM') {
        // Get DOM Element's Attribute by Name
        const attribute = await DOMElement.getAttribute(name)
        console.log(attribute)
      } else {
        console.log('No DOM Element Found')
      }
    },

    setAttribute: async (name: string, value: string) => {
      // Get All Elements and find first DOM Element
      const elements = await webflow.getAllElements()
      const DOMElement = elements.find((element) => element.type === 'DOM')

      if (DOMElement?.type === 'DOM') {
        // Set and print DOM Element's Attributes
        await DOMElement.setAttribute(name, value)
        const attributes = await DOMElement.getAllAttributes()
        console.log(attributes)
      } else {
        console.log('No DOM Element Found')
      }
    },

    removeAttribute: async (name: string) => {
      // Get All Elements and find first DOM Element
      const elements = await webflow.getAllElements()
      const DOMElement = elements.find((element) => element.type === 'DOM')

      if (DOMElement?.type === 'DOM') {
        // Get Attributes
        const customAttributes = await DOMElement.getAllAttributes()
        console.log(customAttributes)

        // Remove and print DOM Element's Attributes
        await DOMElement.removeAttribute(name)
        const attributes = await DOMElement.getAllAttributes()
        console.log(attributes)
      } else {
        console.log('No DOM Element Found')
      }
    },
  },

  // Heading Operations
  headingOperations: {
    getHeadingLevel: async () => {
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.type === 'Heading') {
        const headingLevel = await selectedElement.getHeadingLevel()
        console.log(headingLevel)
      } else {
        console.log('Selected Element is not a Heading Element')
      }
    },

    setHeadingLevel: async (level: 2 | 1 | 3 | 4 | 5 | 6) => {
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.type === 'Heading') {
        const headingLevel = await selectedElement.setHeadingLevel(
          parseInt(level) as 2 | 1 | 3 | 4 | 5 | 6,
        )
        console.log(headingLevel)
      } else {
        console.log('Selected Element is not a Heading Element')
      }
    },
  },

  // Image Operations
  imageOperations: {
    getAsset: async () => {
      // Get Selected Element
      const el = await webflow.getSelectedElement()

      // Check if element can have children
      if (el?.children) {
        // Create a new Image Element using Element Presets
        const imgEl = await el.append(webflow.elementPresets.Image)

        // Check element type
        if (imgEl.type === 'Image') {
          // Get asset from Image element
          const myAsset = await imgEl.getAsset()
          console.log(myAsset)
        }
      }
    },

    setAsset: async (assetId: string) => {
      // Get Selected Element
      const el = await webflow.getSelectedElement()

      // Check if element can have children
      if (el?.children) {
        // Create a new Image Element using Element Presets
        const imgEl = await el.append(webflow.elementPresets.Image)

        // Get asset by ID
        const asset = await webflow.getAssetById(assetId)

        // Check element type
        if (imgEl.type === 'Image') {
          // Set asset as the "src" of the Image Element
          await imgEl.setAsset(asset)
        }
      }
    },

    getAltText: async () => {
      // Get Selected Element
      const el = await webflow.getSelectedElement()
      if (el?.type === 'Image') {
        // Get alt text
        const alt = await el.getAltText()
        console.log(alt)
      } else {
        console.error('Please select an image element')
        await webflow.notify({
          type: 'Error',
          message: 'Please select an Image Element',
        })
      }
    },

    setAltText: async (altText: string) => {
      // Get Selected Element
      const el = await webflow.getSelectedElement()

      // Check element type
      if (el?.type === 'Image') {
        // Set alt text. If a null is passed, the API will set the alt text as "decorative"
        await el.setAltText(altText)
        // Get alt text
        const alt = await el.getAltText()
        console.log(alt) // true
      } else {
        console.error('Please select an Image Element')
        await webflow.notify({
          type: 'Error',
          message: 'Please select an Image Element',
        })
      }
    },
  },

  // Link Operations
  linkOperations: {
    setLinkBlockSettings: async (mode: LinkModeSettings, target: string) => {
      // Get Selected Element
      const element = await webflow.getSelectedElement()

      if (element) {
        const newLink = await element.after(webflow.elementPresets.LinkBlock) // Create new link element
        const metadata = { openInNewTab: true }
        await newLink.setSettings(mode, target, metadata) // Set link element settings
        const targetValue = await newLink.getTarget() // Get target value
        console.log(targetValue)
      }
    },

    getLinkTarget: async () => {
      const elements = await webflow.getAllElements() // Get All Elements
      const links = elements.filter((element) => element.type === 'Link') // Filter for Link elements

      // Print target value of each link element
      for (const link of links) {
        const targetValue = await link.getTarget()
        console.log(`ID: ${link.id.element}, Target Value: ${targetValue}`)
      }
    },

    typeChecking: async () => {
      // Example: Type checking in Webflow API

      // Get a selected element
      let element = await webflow.getSelectedElement()

      // Check the type of the element
      if (element?.type === 'String') {
        // It's safe to use methods specific to StringElement
        let text = element.getText()
        console.log('Text content:', text)
      } else if (element?.children) {
        // Check if the element can have children
        let imageUrl = await element.getChildren()
        console.log('Image URL:', imageUrl)
      } else {
        // Handle other types or default case
        console.log(
          "Element is not a StringElement and doesn't have child properties",
        )
      }
    },
  },
}
