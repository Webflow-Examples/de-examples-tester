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
  getRootElement(): Promise<null | AnyElement>;
}

type ComponentId = string;
