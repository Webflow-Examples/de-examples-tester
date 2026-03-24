interface Component {
  readonly [brand]: 'Component';

  readonly id: ComponentId;

  /**
   * Get the name of a specific component.
   * @returns A Promise that resolves to a string representing the name of a component.
   * @example
   * ```ts
   * const myComponentName = "Hero-Component";
   * const components = await webflow.getAllComponents();
   *
   * // Check if component exists
   * for (const c in components) {
   *   const currentComponentName = await components[c].getName();
   *   if (componentName === currentComponentName) {
   *     console.log("Found Hero Component");
   *   }
   * }
   * ```
   */
  getName(): Promise<string>;
  /**
   * Set component name to the provided string. Components can be renamed, and the update happens immediately,
   * without requiring an explicit save() invocation.
   * @returns A Promise that resolves when the name change is successful.
   * @example
   * ```ts
   * await component.setName("She-ro Component")
   * ```
   */
  setName(name: string): Promise<null>;
  /**
   * Retrieve all variants of a component.
   * @returns A Promise resolving to an array containing all variants of the component
   * @example
   * ```ts
   * const component = (await webflow.getAllComponents())[0];
   * const variants = await component.getVariants();
   * console.log(variants);
   * // [
   * //   { id: 'base', name: 'Primary', isSelected: true },
   * //   { id: 'xxxx', name: 'Secondary', isSelected: false },
   * // ]
   * // Find which variant the user is currently editing
   * const activeVariant = variants.find(v => v.isSelected);
   * console.log(`Currently editing: ${activeVariant.name}`);
   * ```
   */
  getVariants(): Promise<Array<Variant>>;
  /**
   * Retrieves the selected variant of a component.
   * @returns A Promise resolving to a variant
   * @example
   * ```ts
   * const selectedVariant = await heroComponent.getSelectedVariant();
   * // {
   * //   id: 'variant-123',
   * //   name: 'Secondary Hero',
   * //   isSelected: true,
   * // }
   * // // When no variant is explicitly selected, returns base
   * // const base = await heroComponent.getSelectedVariant();
   * // {
   * //   id: 'base',
   * //   name: 'Primary',
   * //   isSelected: true,
   * // }
   * ```
   */
  getSelectedVariant(): Promise<Variant>;
  getRootElement(): Promise<null | AnyElement>;
}

type ComponentId = string;

interface Variant {
  id: string;
  name: string;
  isSelected: boolean;
}
