// import { removeIfPresent } from 'typedoc/dist/lib/utils'

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
      console.log(
        `Type: ${rootElement?.type} \n ID: ${JSON.stringify(rootElement?.id)}`,
      )
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
      // Get the selected element as the container
      const selectedElement = await webflow.getSelectedElement()

      // Create a nav container
      const navMenu = webflow.elementBuilder(webflow.elementPresets.DOM)
      navMenu.setTag('nav')

      // Menu items to add
      const menuItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact']

      // Create all menu items at once and store references for later
      const menuItemRefs = []
      menuItems.forEach((itemText) => {
        const item = navMenu.append(webflow.elementPresets.DOM)
        item.setTag('a')
        item.setAttribute('href', '#')
        // Store reference to set text later
        menuItemRefs.push(item)
      })

      // Add the entire menu to the canvas in one operation
      if (selectedElement?.children) {
        await selectedElement.append(navMenu)
        console.log(
          'Navigation structure with 5 items created in one operation',
        )

        // Text content must be set after elements are added to the canvas
        const elements = await webflow.getAllElements()

        // Set text content for each menu item
        for (let i = 0; i < menuItemRefs.length; i++) {
          const menuItemElement = elements.find(
            (el) => el.id.element === menuItemRefs[i].id,
          )
          if (menuItemElement) {
            await menuItemElement.setTextContent(menuItems[i])
          }
        }

        // Style application would also come after the elements are added
        // (Styling example shown below for completeness)

        // Example of applying styles after elements are on the canvas
        // First, create the styles
        const navStyle = await webflow.createStyle('navContainer')
        await navStyle.setProperties({
          display: 'flex',
          'row-gap': '20px',
          'padding-left': '15px',
          'padding-right': '15px',
          'padding-top': '15px',
          'padding-bottom': '15px',
          'background-color': '#f5f5f5',
          'border-radius': '8px',
        })

        const navItemStyle = await webflow.createStyle('navItem')
        await navItemStyle.setProperties({
          color: '#333',
          'text-decoration': 'none',
          'padding-left': '12px',
          'padding-right': '12px',
          'padding-top': '8px',
          'padding-bottom': '8px',
          'border-radius': '4px',
          'font-weight': '500',
        })

        // Then find and apply styles to the elements
        const navElement = elements.find((el) => el.id.element === navMenu.id)
        if (navElement) {
          await navElement.setStyles([navStyle])

          // Apply styles to all menu items
          for (const menuItemRef of menuItemRefs) {
            const menuItem = elements.find(
              (el) => el.id.element === menuItemRef.id,
            )
            if (menuItem) {
              await menuItem.setStyles([navItemStyle])
            }
          }
        }
      }
    },

    BulkAddElementSVG: async () => {
      // Get the selected element as the container
      const selectedElement = await webflow.getSelectedElement()

      // Create an SVG builder element
      const svgBuilder = webflow.elementBuilder(webflow.elementPresets.DOM)
      svgBuilder.setTag('svg')
      svgBuilder.setAttribute('viewBox', '0 0 100 100')
      svgBuilder.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
      svgBuilder.setAttribute('width', '200')
      svgBuilder.setAttribute('height', '200')

      // Create rainbow circular background with multiple circles
      const backgroundElements = []
      const rainbowColors = [
        'hsl(0, 90%, 55%)', // Red
        'hsl(30, 90%, 55%)', // Orange
        'hsl(60, 90%, 55%)', // Yellow
        'hsl(120, 90%, 55%)', // Green
        'hsl(240, 90%, 55%)', // Blue
        'hsl(270, 90%, 55%)', // Indigo
        'hsl(300, 90%, 55%)', // Violet
      ]

      for (let i = 0; i < 7; i++) {
        const circle = svgBuilder.append(webflow.elementPresets.DOM)
        circle.setTag('circle')
        circle.setAttribute('cx', '50')
        circle.setAttribute('cy', '50')
        circle.setAttribute('r', `${46 - i * 3}`)
        circle.setAttribute('fill', 'none')
        circle.setAttribute('stroke', rainbowColors[i])
        circle.setAttribute('stroke-width', '2.5')
        circle.setAttribute('opacity', '0.9')
        backgroundElements.push(circle)
      }

      // Create the central background circle
      const centralCircle = svgBuilder.append(webflow.elementPresets.DOM)
      centralCircle.setTag('circle')
      centralCircle.setAttribute('cx', '50')
      centralCircle.setAttribute('cy', '50')
      centralCircle.setAttribute('r', '32')
      centralCircle.setAttribute('fill', 'white')

      // Create the "Webflow" logo
      const logoPath = svgBuilder.append(webflow.elementPresets.DOM)
      logoPath.setTag('path')
      logoPath.setAttribute(
        'd',
        'M61.3811 14L43.0716 49.7933H25.8737L33.5362 34.959H33.1924C26.8709 43.1653 17.439 48.5674 4 49.7933V35.1643C4 35.1643 12.5972 34.6565 17.6513 29.3429H4V14.0003H19.3426V26.6194L19.687 26.6179L25.9565 14.0003H37.5597V26.5393L37.9041 26.5388L44.4089 14H61.3811Z',
      )
      logoPath.setAttribute('fill', '#146EF5')
      logoPath.setAttribute('fill-rule', 'evenodd')
      logoPath.setAttribute('clip-rule', 'evenodd')
      logoPath.setAttribute('transform', 'translate(30.5, 30.5) scale(0.7)')

      // Add the entire SVG structure to the canvas in one operation
      if (selectedElement?.children) {
        await selectedElement.append(svgBuilder)
        console.log('webflow logo created successfully')
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

  formOperations: {
    getFormName: async () => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (
        selectedElement?.type === 'FormForm' ||
        selectedElement?.type === 'FormWrapper'
      ) {
        const formName = await selectedElement?.getName()
        console.log(formName)
      } else {
        console.log('Selected Element is not a Form')
      }
    },

    setFormName: async (name: string) => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (
        selectedElement?.type === 'FormForm' ||
        selectedElement?.type === 'FormWrapper'
      ) {
        await selectedElement?.setName(name)
      }
    },
  },
}
