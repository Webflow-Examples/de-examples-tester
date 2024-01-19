import WebflowAPI from "@webflow/designer-extension-typings"

export const Elements = {

    getSelectedElement: async () => {

        // Get Element
        const element = await webflow.getSelectedElement();

        // Print element info
        if (element) {
            console.log(`Selected element ID: ${element.id}`);
            console.log(`Element type: ${element.type}`);
            // Perform some action with the selected element
        } else {
            console.log("No element is currently selected.");
        }

    },

    getAllElements: async () => {

        // 🚀 Retrieve all elements in the current context 🚀
        const allElements = await webflow.getAllElements();

        // Print element list
        if (allElements.length > 0) {
            console.log("List of all elements:");
            allElements.forEach((element, index) => {
                console.log(`${index + 1}. Element ID: ${element.id}, Element Type: ${element.type}`);
            });
        } else {
            console.log("No elements found in the current context.");
        }
    },

    
    removeElement: async () => {
        // Get Selected Element
        const el = await webflow.getSelectedElement();
        // remove the selected element
        await el?.remove();
    },
    
    getRootElement: async () => {
        
        const rootElement = await webflow.getRootElement()
        console.log(`Type: ${rootElement?.type} \n ID: ${rootElement?.id}`)
        
    },
    
    insertElementBefore: async () => {
        
        // Get Selected Element
        const selectedElement = await webflow.getSelectedElement()
        
        if (selectedElement){
            
            const newDiv = webflow.elementPresets.DivBlock
            
            // Insert DIV before selected Element
            await selectedElement.before(newDiv)
            
        }
        
    },
    
    insertElementAfter: async () => {
        // Get Selected Element
        const selectedElement = await webflow.getSelectedElement()
        
        if (selectedElement){
            
            const newDiv = webflow.elementPresets.DivBlock
            
            // Insert DIV before selected Element
            await selectedElement.after(newDiv)
            
        }
    },
    
    appendElement: async () => {
    
        const el = await webflow.getSelectedElement();
    
        if (el?.children) {
    
            try {
                const newElement = webflow.elementPresets.LinkBlock
                await el?.append(newElement)
            } catch (error) {
                await webflow.notify({
                    type: "Error",
                    message: "Element can not have children"
                })
            }
    
        }
    
    },

    prependElement: async () => {
    
        const el = await webflow.getSelectedElement();
    
        if (el?.children) {
    
            try {
                const newElement = webflow.elementPresets.LinkBlock
                await el?.prepend(newElement)
            } catch (error) {
                await webflow.notify({
                    type: "Error",
                    message: "Element can not have children"
                })
            }
    
        }
    
    },

    getCustomAttributes: async () => {

        const selectedElement = await webflow.getSelectedElement()

        if (selectedElement?.customAttributes){
            const  customAttributes = await selectedElement.getAllCustomAttributes()
            console.log(customAttributes)
        }

    },

    getCustomAttribute: async (name: string) => {

        const selectedElement = await webflow.getSelectedElement()

        if (selectedElement?.customAttributes){
            const  customAttributes = await selectedElement.getCustomAttribute(name)
            console.log(customAttributes)
        }

    },


}