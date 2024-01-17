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
    }

}