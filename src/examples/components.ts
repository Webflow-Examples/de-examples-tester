import type { ComponentInfo } from '../types/dynamic-enums'

// Types for component collections
export type ComponentsEnum = {
  [key: string]: ComponentInfo
}

// Utility function to get all components as an enum-like object
export const getComponentsEnum = async (): Promise<ComponentsEnum> => {
  const components = await webflow.getAllComponents()
  const componentsMap: ComponentsEnum = {}

  await Promise.all(
    components.map(async (component) => {
      const name = await component.getName()
      componentsMap[name] = {
        id: component.id,
        name,
        component,
      }
    }),
  )

  return componentsMap
}

// Helper function to get a specific component by name
export const getComponentByName = async (
  name: string,
): Promise<ComponentInfo | undefined> => {
  const components = await getComponentsEnum()
  return components[name]
}

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

  getComponentByName: async () => {
    // Fetch a component by name only
    const heroSection = await webflow.getComponentByName('Hero');
    console.log(heroSection.id);
  },

  getComponentByNameAndGroup: async () => {
    // Fetch a component scoped to a group
    const marketingHero = await webflow.getComponentByName('Marketing', 'Hero');
    console.log(marketingHero.id);
  },

  getCurrentComponent: async () => {
    // Get the component currently being edited
    const component = await webflow.getCurrentComponent();

    if (component) {
      const name = await component.getName();
      console.log(`Currently editing component: ${name}`);

      // Get all elements inside the active component
      const root = await component.getRootElement();
      const children = await root.getChildren();
      console.log(`Root has ${children.length} child element(s)`);
    } else {
      console.log('Not currently editing a component.');
    }
  },

  searchComponents: async () => {
    const heroes = await webflow.searchComponents({ q: 'Hero' });
    console.log(heroes);
  },

  getSettings: async () => {
    // Get the first component's settings
    const component = (await webflow.getAllComponents())[0]
    const settings = await component.getSettings()
    console.log(settings)
    /*
    {
      name: 'Hero Section',
      group: 'Sections',
      description: 'A reusable hero with heading and CTA'
    }
    */
  },

  setSettings: async () => {
    const component = (await webflow.getAllComponents())[0]

    // Update only the description
    await component.setSettings({
      description: 'Updated hero layout with video background',
    })

    // Move to a different group
    await component.setSettings({ group: 'Legacy' })

    // Update everything at once
    await component.setSettings({
      name: 'Hero Section v2',
      group: 'Sections',
      description: 'Redesigned hero component',
    })
  },

  getInstanceCount: async () => {
    // Audit component usage across the site
    const components = await webflow.getAllComponents();
    for (const component of components) {
      const name = await component.getName();
      const count = await component.getInstanceCount();
      console.log(`${name}: ${count} instances`);
    }
    // Guard against removing a component that's still in use
    const hero = components[0];
    const instanceCount = await hero.getInstanceCount();
    if (instanceCount > 0) {
      console.log(`Cannot safely remove — ${instanceCount} instances exist`);
    } else {
      await webflow.unregisterComponent(hero);
    }
  },

  getVariants: async () => {
    const component = (await webflow.getAllComponents())[0]
    const variants = await component.getVariants()
    console.log(variants)
    // [
    //   { id: 'base', name: 'Primary', isSelected: true },
    //   { id: 'xxxx', name: 'Secondary', isSelected: false },
    // ]
    // Find which variant the user is currently editing
    const activeVariant = variants.find(v => v.isSelected)
    console.log(`Currently editing: ${activeVariant?.name}`)
  },

  getSelectedVariant: async () => {
    const heroComponent = webflow.getComponentByName('hero')
    // When no variant is explicitly selected, returns base
    const base = await heroComponent.getSelectedVariant()
    console.log(JSON.stringify(base))
    /*
    {
      id: 'base',
      name: 'Primary',
      isSelected: true,
    }
    */
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

  openComponentCanvas: async () => {
    // Open the canvas for the Component that has an instance selected in the Designer
    const selected = await webflow.getSelectedElement();
    if (selected?.type === 'ComponentInstance') {
      await webflow.openCanvas(selected);
    }
  },

  selectComponent: async () => {
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
      await root?.append('div')
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

  getResolvedProps: async () => {
    // Get the selected component instance
    const instanceEl = await webflow.getSelectedElement();

    if (instanceEl?.type === 'ComponentInstance') {
      // Get what each prop actually renders — bindings resolved to their output values
      const resolvedProps = await instanceEl.getResolvedProps();

      for (const prop of resolvedProps) {
        console.log(`${prop.propId}: ${prop.value}`);
      }

      // Comparison of all three instance prop read APIs:

      // searchProps — full metadata: wrapped value, resolved value, display info, override status
      const search = await instanceEl.searchProps();
      console.log(search[0].value);         // { sourceType: 'static', value: 'My Custom Title' }
      console.log(search[0].resolvedValue); // 'My Custom Title'
      console.log(search[0].display);       // { label: 'Heading', group: 'Content' }
      console.log(search[0].hasOverride);   // true

      // getProps — raw values with override status, no display metadata
      const props = await instanceEl.getProps();
      console.log(props[0].value);          // 'My Custom Title' (bare value)
      console.log(props[0].hasOverride);    // true

      // getResolvedProps — just the final resolved output, no binding metadata
      const resolved = await instanceEl.getResolvedProps();
      console.log(resolved[0].value);       // 'My Custom Title'
    } else {
      console.log('Please select a component instance.');
    }
  },

  setProps: async () => {
    // Get the selected component instance
    const instanceEl = await webflow.getSelectedElement();

    if (instanceEl?.type === 'ComponentInstance') {
      // Read current prop values (round-trip: read, modify, write back)
      const currentProps = await instanceEl.getProps();
      console.log('Current props:', currentProps);

      await instanceEl.setProps([
        // Static value override — set the first prop to a new string value
        { propId: currentProps[0].propId, value: 'New Heading' },

        // Bind to a parent component prop
        { propId: 'prop_2', value: { sourceType: 'prop', propId: 'parent_prop_5' } },

        // Bind to a CMS field
        { propId: 'prop_3', value: { sourceType: 'cms', collectionId: 'col_abc', fieldId: 'field_author' } },

        // Bind to a page field
        { propId: 'prop_4', value: { sourceType: 'page', fieldKey: 'seoTitle' } },

        // Disconnect a binding / reset a prop to its component default
        { propId: 'prop_5', value: null },
      ]);

      // Confirm updated values
      const updatedProps = await instanceEl.getProps();
      console.log('Updated props:', updatedProps);
    } else {
      console.log('Please select a component instance.');
    }
  },

  resetAllProps: async () => {
    // Get the selected component instance
    const instanceEl = await webflow.getSelectedElement();

    if (instanceEl?.type === 'ComponentInstance') {
      // Get the instance's props to find a prop ID to override
      const props = await instanceEl.searchProps();

      if (props.length > 0) {
        const firstProp = props[0];

        // Set an override on the first prop
        await instanceEl.setProps([{ propId: firstProp.propId, value: 'Custom value' }]);

        // Confirm the override is applied
        const before = await instanceEl.getProps();
        console.log('Has override:', before[0].hasOverride); // true

        // Reset all overrides to component defaults in one call
        await instanceEl.resetAllProps();

        // All props now show defaults, no overrides
        const after = await instanceEl.getProps();
        console.log('Has override after reset:', after[0].hasOverride); // false
      } else {
        console.log('This component instance has no props.');
      }
    } else {
      console.log('Please select a component instance.');
    }
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
