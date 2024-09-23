export const Components = {
  getAllComponents: async () => {
    // Get all components
    const components = await webflow.getAllComponents()

    // Print Component Details
    if (components.length > 0) {
      console.log('List of registered components:')

      for (let component in components) {
        const currentComponentName = await components[component].getName()
        console.log(
          `${component + 1}. Component Name: ${currentComponentName}, Component ID: ${components[component].id}`,
        )
      }
    } else {
      console.log('No components are currently registered.')
    }
  },

  createComponent: async () => {
    // Get selected element
    const rootElement = await webflow.getSelectedElement()

    if (rootElement) {
      // Create a component from the Root Element
      const component = await webflow.registerComponent(
        'MyCustomComponent',
        rootElement,
      )
      console.log(`Component registered with ID: ${component.id}`)
    } else {
      console.log(
        'No element is currently selected. Please select a root element first.',
      )
    }
  },

  deleteComponent: async () => {
    // Get selected element
    const selectedElement = await webflow.getSelectedElement()

    if (selectedElement) {
      // Create component from selected element
      const myNewComponent = await webflow.registerComponent(
        'Hero Component',
        selectedElement,
      )

      // Delete Component
      await webflow.unregisterComponent(myNewComponent)
    } else {
      console.log(
        'No element is currently selected. Please select a root element first.',
      )
    }
  },

  enterComponent: async () => {
    // Step 1: Fetch the currently selected element
    const selectedElement = await webflow.getSelectedElement()

    if (selectedElement && selectedElement.type === 'ComponentInstance') {
      //  Step 2: Enter the context of the selected ComponentElement
      await webflow.enterComponent(selectedElement as ComponentElement)
      console.log('Successfully entered the component context.')

      // Step 3: After entering the component's context, fetch the root element
      const rootElement = await webflow.getRootElement()
      if (rootElement) {
        console.log('Root element of the component:', rootElement)
      } else {
        console.log('No root element found in this component context.')
      }
    } else {
      console.log('The selected element is not a ComponentElement.')
    }
  },

  editComponent: async () => {
    // Get Component
    const all = await webflow.getAllComponents()
    const firstComponent = all[0]

    // Get Root Element on the Component
    const root = (await firstComponent?.getRootElement()) as AnyElement

    if (root.children) {
      // Append DIV block to Root element
      await root?.append(webflow.elementPresets.DivBlock)
    }
  },

  createComponentInstance: async () => {
    // Get Selected Element
    const selectedElement = await webflow.getSelectedElement()

    // Get Component
    const allComponents = await webflow.getAllComponents()
    const firstComponent = allComponents[0]

    // Add Component instance onto a page
    await selectedElement?.before(firstComponent)
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
    console.log(root)
  },

  getName: async (name: string) => {
    const components = await webflow.getAllComponents()

    // Check if component exists
    for (const c in components) {
      const currentComponentName = await components[c].getName()
      if (name === currentComponentName) {
        console.log(`Found ${name} Component`)
      }
    }
  },

  setName: async () => {
    // Get Component
    const components = await webflow.getAllComponents()
    const myComponent = components[0]

    // Set Component Name
    await myComponent.setName('My New Component Name')
  },

  getComponent: async () => {
    // Select Component Element on Page
    const elements = await webflow.getAllElements()
    const componentInstance = elements?.find(
      (el) => el.type === 'ComponentInstance',
    )

    if (componentInstance?.type === 'ComponentInstance') {
      // Get Component object from instance
      const component = await componentInstance?.getComponent()
      const componentName = await component?.getName()
      console.log(componentName)
    } else {
      console.log('No component element found')
    }
  },
}
