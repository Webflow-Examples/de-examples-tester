import WebflowAPI from "@webflow/designer-extension-typings"
import { removeIfPresent } from "typedoc/dist/lib/utils";

export const Elements = {

    getSelectedElement: async () => {

           // Get Selected Element
            const element = await webflow.getSelectedElement();

            // Print element info
            if (element) {
                console.log(element)
                console.log(`Element type: ${element.type}`);

            } else {
                console.log("No element is currently selected.");
            }

    },

    getAllElements: async () => {

        // Retrieve all elements in the current context
        const allElements = await webflow.getAllElements();

        // Print element list
        if (allElements.length > 0) {
            console.log("List of all elements:");

            allElements.forEach((element, index) => {
                console.log(`${index + 1}. Element ID: ${JSON.stringify(element)}, Element Type: ${element.type}`);
            });
        } else {
            console.log("No elements found in the current context.");
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
        const el = await webflow.getSelectedElement();

        // Remove the selected element
        await el?.remove();
    },

    insertElementBefore: async () => {

        // Get Selected Element
        const selectedElement = await webflow.getSelectedElement()

        if (selectedElement) {

            // Insert DIV before selected Element
            const newDiv = await selectedElement.before(webflow.elementPresets.DivBlock)

            // Print element details
            console.log(`${JSON.stringify(newDiv)}`)

        }

    },

    insertElementAfter: async () => {

        // Get Selected Element
        const selectedElement = await webflow.getSelectedElement()

        if (selectedElement) {

            // Insert DIV after selected Element
            const newDiv = await selectedElement.after(webflow.elementPresets.DivBlock)

            // Print element details
            console.log(JSON.stringify(newDiv))

        }
    },

    appendElement: async () => {

        // Get Selected Element
        const el = await webflow.getSelectedElement();

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
        const el = await webflow.getSelectedElement();


        // Check if element supports child elements
        if (el?.children) {

            // Prepend newElement as a child to of the selected element
            const newElement = await el?.prepend(webflow.elementPresets.DivBlock)

            // Print element Details
            console.log(JSON.stringify(newElement))

        }

    },

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
            const newAttribute = await selectedElement.setCustomAttribute(name, value)
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

    getDOMId: async () => {

        // Get selected element
        const selectedElement = await webflow.getSelectedElement()

        if (selectedElement?.domId) {

            // Get and print DOM ID
            const domId = await selectedElement?.getDomId()
            console.log(domId)
        } else {
            console.log('Element does not have a DOMId')
        }
    },

    setDOMId: async (id: string) => {

        // Get selected element
        const selectedElement = await webflow.getSelectedElement()

        if (selectedElement?.domId) {

            // Set and print DOM ID
            await selectedElement?.setDomId(id)
            const domID = await selectedElement?.getDomId()
            console.log(domID)
        }
    },

    getStyles: async () => {

        // Get Selected Element
        const selectedElement = await webflow.getSelectedElement()

        if (selectedElement?.styles) {

            // Get Styles
            const styles = await selectedElement.getStyles()

            // Get Style Details
            const styleDetails = styles.map(async style => {

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
            const newStyle = await webflow.createStyle("MyCustomStyle");

            // Set properties for the style
            newStyle.setProperties({
                'background-color': "blue",
                'font-size': "32px",
                'font-weight': "bold",
            });

            // Set style on selected element
            selectedElement.setStyles([newStyle])

        }

    },

    setTextContent: async (myText: string) => {

        // Get Selected Element
        const selectedElement = await webflow.getSelectedElement()

        if (selectedElement?.textContent) {

            // Set and print text content
            const text = await selectedElement.setTextContent(myText)
            console.log(selectedElement.textContent)

        }


    },

    getChildren: async () => {

        // Get Selected Element
        const selectedElement = await webflow.getSelectedElement();

        if (selectedElement?.children) {

            // Get Children
            const children = await selectedElement.getChildren();

            // Get Children Details
            const childrenDetailsPromises = children.map(async (child) => {


                // Get style details of children (This is the name of the element in the designer)
                let styleDetails = null;
                let childStyles = child.styles ? await child.getStyles() : null;

                if (childStyles) {
                    const styleNamesPromises = childStyles.map(style => style.getName());
                    styleDetails = await Promise.all(styleNamesPromises);
                }

                return {
                    styleDetails,
                };
            });

            // Print details of child elements
            const childrenDetails = await Promise.all(childrenDetailsPromises);
            console.log(childrenDetails); // This will now log the array of child details

        } else {
            console.log(selectedElement.prepend(webflow.elementPresets.DivBlock))
            console.log("This element does not support child elements")
        }

    },

    // DOM Element APIs

    getTag: async () => {

        // Get All Elements and find first DOM Element
        const elements = await webflow.getAllElements()
        const DOMElement = elements.find(element => element.type === "DOM")

        if (DOMElement?.type === "DOM") {

            // Get DOM Element's Tag
            const tag = await DOMElement.getTag()
            console.log(tag)

        } else {
            console.log('No DOM Element Found')
        }

    },

    setTag: async (myTag: string) => {

        // Get Selected Element
        const selectedElement = await webflow.getSelectedElement();

        if (selectedElement?.children) {

            // Create and append DOM Element
            const DOMElement = await selectedElement.append(webflow.elementPresets.DOM);
            console.log(DOMElement)

            // Set Tag
            await DOMElement?.setTag(myTag);
            const tag = await DOMElement.getTag()
        }

    },

    getAllAttributes: async () => {

        // Get Selected Element
        const selectedElement = await webflow.getSelectedElement();

        if (selectedElement?.type === "DOM") {

            const customAttributes = await selectedElement.getAllAttributes()
            console.log(customAttributes)
        }

    },

    getAttribute: async (name: string) => {

        // Get All Elements and find first DOM Element
        const elements = await webflow.getAllElements()
        const DOMElement = elements.find(element => element.type === "DOM")

        if (DOMElement?.type === "DOM") {

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
        const DOMElement = elements.find(element => element.type === "DOM")

        if (DOMElement?.type === "DOM") {

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
        const DOMElement = elements.find(element => element.type === "DOM")

        if (DOMElement?.type === "DOM") {

            // Remove and print DOM Element's Attributes
            await DOMElement.removeAttribute(name)
            const attributes = await DOMElement.getAllAttributes()
            console.log(attributes)

        } else {
            console.log('No DOM Element Found')
        }



    },


    // String Element APIs

    getText: async () => {

        // Get Selected Element
        const selectedElement = await webflow.getSelectedElement();

        if (selectedElement?.textContent && selectedElement?.children) {

            // Get Child Elements
            const children = await selectedElement.getChildren();

            // Filter string elements from children
            const strings = children.filter(child => child.type === "String");

            // Initialize an array to hold text content
            let textContent = [];

            // Loop over string elements to get text
            for (const myString of strings) {
                if (myString.type === "String") {
                    const text = await myString.getText();
                    textContent.push(text);
                }
            }

            // Print text
            console.log(textContent);
        }
    },

    setText: async () => {

        // Get all elements and find the first StringElement
        const allElements = await webflow.getAllElements();
        const foundElement = allElements.find(el => el.type === "String");

        if (foundElement) {
            // Check that element has the method in order to use it
            if ('setText' in foundElement) {
                const elementText = foundElement.setText("Hello Element 🚀"); // Set Text
            }
        } else {
            console.log('Element not found on page');
        }
    },

    // Heading Element APIs

    getHeadingLevel: async () => {

        const selectedElement = await webflow.getSelectedElement()

        if (selectedElement?.type === 'Heading') {

            const headingLevel = await selectedElement.getHeadingLevel()
            console.log(headingLevel)

        } else {
            console.log("Selected Element is not a Heading Element")
        }

    },

    setHeadingLevel: async (level: 2 | 1 | 3 | 4 | 5 | 6) => {

        const selectedElement = await webflow.getSelectedElement()

        if (selectedElement?.type === 'Heading') {

            const headingLevel = await selectedElement.setHeadingLevel(parseInt(level) as 2 | 1 | 3 | 4 | 5 | 6)
            console.log(headingLevel)

        } else {
            console.log("Selected Element is not a Heading Element")
        }

    },

    typeChecking: async () => {
        // Example: Type checking in Webflow API

        // Get a selected element
        let element = await webflow.getSelectedElement();

        // Check the type of the element
        if (element?.type === "String") {

            // It's safe to use methods specific to StringElement
            let text = element.getText();
            console.log('Text content:', text);

        } else if (element?.children) {

            // Check if the element can have children
            let imageUrl = await element.getChildren()
            console.log('Image URL:', imageUrl);

        } else {
            // Handle other types or default case
            console.log("Element is not a StringElement and doesn't have child properties");
        }
    },

}