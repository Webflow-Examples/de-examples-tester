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
   * Get the settings (name, group, description) of a component.
   * @returns A Promise resolving to the component's settings.
   * @example
   * ```ts
   * const component = (await webflow.getAllComponents())[0];
   * const settings = await component.getSettings();
   * console.log(settings.name);        // 'Hero Section'
   * console.log(settings.group);       // 'Sections'
   * console.log(settings.description); // 'A reusable hero'
   * ```
   */
  getSettings(): Promise<ComponentSettings>;
  /**
   * Update one or more settings on a component. All fields are optional.
   * Updates happen immediately without requiring an explicit save().
   * @param settings - A partial object of settings to update.
   * @returns A Promise that resolves when the update is complete.
   * @example
   * ```ts
   * await component.setSettings({
   *   name: 'Hero Section v2',
   *   group: 'Sections',
   *   description: 'Updated hero with new CTA layout',
   * });
   * ```
   */
  setSettings(settings: Partial<ComponentSettings>): Promise<null>;
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

interface ComponentSettings {
  /** The name of the component */
  name: string;
  /** The group/folder the component belongs to (empty string if not set) */
  group: string;
  /** The description of the component (empty string if not set) */
  description: string;
}

interface Variant {
  id: string;
  name: string;
  isSelected: boolean;
}

interface SearchComponentsOptions {
  /** Fuzzy search query matching Component panel search behavior */
  q?: string;
}
interface ComponentLibrary {
  name: string;
  id: string;
}
interface ComponentSearchResult {
  id: string;
  name: string;
  group: string;
  description: string;
  instances: number;
  canEdit: boolean;
  library: ComponentLibrary | null;
}
