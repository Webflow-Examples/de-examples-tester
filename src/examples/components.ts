import WebflowAPI from "@webflow/designer-extension-typings"

export const Components = {

    getAllComponents: async () => {

        // Get all components
        const components = await webflow.getAllComponents();

        // Print Component Details
        if (components.length > 0) {

            console.log("List of registered components:");

            for (let component in components) {
                const currentComponentName = await components[component].getName();
                console.log(`${component + 1}. Component Name: ${currentComponentName}, Component ID: ${components[component].id}`);
            }
        } else {
            console.log("No components are currently registered.");
        }
    },

    createComponent: async () => {

        // Get selected element 
        const rootElement = await webflow.getSelectedElement();

        if (rootElement) {

            // Create a component from the Root Element
            const component = await webflow.registerComponent('MyCustomComponent', rootElement);
            console.log(`Component registered with ID: ${component.id}`);

            // Now you can work with the registered component or store its reference for later use
        } else {
            console.log("No element is currently selected. Please select a root element first.");
        }

    },

    deleteComponent: async () => {

        // Get selected element 
        const selectedElement = await webflow.getSelectedElement();

        if (selectedElement) {

            // Create component from selected element
            const myNewComponent = await webflow.registerComponent('Hero Component', selectedElement);

            // Delete Component
            await webflow.unregisterComponent(myNewComponent);

        } else {
            console.log("No element is currently selected. Please select a root element first.");
        }

    },

    enterComponent: async () => {

        // Step 1: Fetch the currently selected element
        const selectedElement = await webflow.getSelectedElement();

        if (selectedElement && selectedElement.type === "ComponentInstance") {

            //  Step 2: Enter the context of the selected ComponentElement 
            await webflow.enterComponent(selectedElement as ComponentElement);
            console.log("Successfully entered the component context.");

            // Step 3: After entering the component's context, fetch the root element
            const rootElement = await webflow.getRootElement();
            if (rootElement) {
                console.log("Root element of the component:", rootElement);
            } else {
                console.log("No root element found in this component context.");
            }

        } else {
            console.log("The selected element is not a ComponentElement.");
        }

    },

    editComponent: async () => {

        // Get Component
        const all = await webflow.getAllComponents()
        const firstComponent = all[0]

        const root = await firstComponent?.getRootElement()

        if (root?.children) await root?.append(webflow.elementPresets.DivBlock);

    },

    // ❌ NEEDS WORK ❌
    createComponentInstance: async () => {

        //Specify the name of the component
        const myComponentName = 'Hero-Component';

        //Find component using component name
        const webflowComponentManager = async (componentName: string) => {

            // Get all Components
            const components = await webflow.getAllComponents();

            for (let c in components) {

                const currentComponentName = await components[c].getName();

                if (componentName === currentComponentName) {
                    return components[c];
                }
            }
        }

        //Find component with this component name 
        var componentDefinition = await webflowComponentManager(myComponentName);

        //If the component exists, create an Instance of this component
        if (componentDefinition) {
            const heroComponentInstance = webflow.createInstance(componentDefinition)
            const selectedElement = await webflow.getSelectedElement();

            if (selectedElement?.children) {
                const newInstance = await selectedElement?.append(heroComponentInstance)
                console.log(newInstance)
            }
        } else {
            console.log(`Component with name '${myComponentName}' does not exist.`);
        }

    },

    exitComponent: async () => {

        await webflow.exitComponent()
        const rootElement = await webflow.getRootElement()
        const rootElementType = rootElement?.type

        // Print Root Element Type. If element type is Body, the designer has exited out of the Component context
        console.log(`Element Type: ${rootElementType}`)
    },

    getRootElement: async () => {
        
        // Get Component
        const all = await webflow.getAllComponents()
        const firstComponent = all[0]

        // Get Root Element of Component
        const root = await firstComponent?.getRootElement()

    },

    getName: async () => {

        const myComponentName = "Hero-Component";
        const components = await webflow.getAllComponents();

        // Check if component exists
        for (const c in components) {
            const currentComponentName = await components[c].getName();
            if (myComponentName === currentComponentName) {
                console.log("Found Hero Component");
            }
        }
    },

    setName: async () => {
        // Get Component
        const components = await webflow.getAllComponents()
        const myComponent = components[0]

        // Set Component Name
        await myComponent.setName("My New Component Name")
    },

    getComponent: async () => {

        // Select Component Element on Page
        const elements = await webflow.getAllElements()
        const componentInstance = elements.find(el => el.type === 'ComponentInstance')

        if (componentInstance?.type === "ComponentInstance") {

            // Get Component object from instance
            const component = await componentInstance?.getComponent()
            const componentName = await component.getName()
            console.log(componentName)
        } else {
            console.log("No component element found")
        }
    },

}