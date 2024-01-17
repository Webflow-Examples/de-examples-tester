import WebflowAPI from "@webflow/designer-extension-typings"

export const Components = {

    getAllComponents: async () => {

        const components = await webflow.getAllComponents();

        if (length > 0) {
            console.log("List of registered components:");
            for (var c in components) {
                const currentComponentName = await components[c].getName();
                console.log(`${c + 1}. Component Name: ${currentComponentName}, Component ID: ${components[c].id}`);
            }
        } else {
            console.log("No components are currently registered.");
        }
    },

    createComponent: async () => {

        const rootElement = await webflow.getSelectedElement();

        if (rootElement) {
            const component = await webflow.registerComponent('MyCustomComponent', rootElement);
            console.log(`Component registered with ID: ${component.id}`);
            // Now you can work with the registered component or store its reference for later use
        } else {
            console.log("No element is currently selected. Please select a root element first.");
        }

    },

    deleteComponent: async () => {
        const selectedElement = await webflow.getSelectedElement();
        const myNewComponent = await webflow.registerComponent('Hero Component', selectedElement);
        await webflow.unregisterComponent(myNewComponent);
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

    createComponentInstance: async () => {

        //Specify the name of the component
        const myComponentName = 'Hero-Component-1';

        //Find component using component name
        const webflowComponentManager = async (componentName: string) => {
            const components = await webflow.getAllComponents();
            for (var c in components) {
                const currentComponentName = await components[c].getName();
                console.log(currentComponentName);
                if (componentName === currentComponentName) {
                    return components[c];
                }
            }
        }

        //Find component with this component name 
        var componentDefinition = await webflowComponentManager(myComponentName);

        //If the component exists, create an Instance of this component
        if (componentDefinition) {
            const heroComponentInstance = webflow.createInstance(componentDefinition);
        } else {
            console.log(`Component with name '${myComponentName}' does not exist.`);
        }

    },

    exitComponent: async () => {

        // Step 1: Fetch the currently selected element
        const selectedElement = await webflow.getSelectedElement();

        if (selectedElement && selectedElement.type === "ComponentInstance") {
            // Step 2: Enter the context of the selected ComponentElement
            await webflow.enterComponent(selectedElement as ComponentElement);
            console.log("Successfully entered the component context.");

            // Step 3: After entering the component's context, fetch and log the root element
            const rootElementInside = await webflow.getRootElement();
            if (rootElementInside) {
                console.log("Root element inside the component context:", rootElementInside.type);

                //  Step 4: Exit the component's context 
                await webflow.exitComponent();
                console.log("Exited the component context.");

                // Step 5: Fetch the root element outside the component context
                const rootElementOutside = await webflow.getRootElement();
                console.log("Root element outside the component context (always 'body'):", rootElementOutside.type);

            } else {
                console.log("No root element found inside this component context.");
            }
        } else {
            console.log("The selected element is not a ComponentInstance.");
        }

    },

    getRootElement: async () => {
        //  Fetch the root element 
        const rootElement = await webflow.getRootElement();

        if (rootElement) {
            console.log("Root element:", rootElement);
        } else {
            console.log("No root element found in the current context.");
        }
    },

    getName: async () => {
        const myComponentName = "Hero-Component";
        const components = await webflow.getAllComponents();

        // Check if component exists
        for (const c in components) {
            const currentComponentName = await components[c].getName();
            if (componentName === currentComponentName) {
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

        //Get User Selected Element from the Designer
        const parent = await webflow.getSelectedElement();

        // Check if this selected element is a Component Instance
        if (parent && !parent.configurable && parent.type === 'ComponentInstance') {
            console.log(await parent.getComponent().getName());
        }
    },

}