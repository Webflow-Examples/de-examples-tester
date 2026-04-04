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
  /**
   * Get the number of instances of this component across the site.
   * Returns the same instance count displayed in the Components panel.
   * @returns A Promise resolving to the number of instances.
   * @example
   * ```ts
   * const component = (await webflow.getAllComponents())[0];
   * const count = await component.getInstanceCount();
   * console.log(`This component is used ${count} times`);
   * ```
   */
  getInstanceCount(): Promise<number>;

  /**
   * Get all variants for this component, including the base variant.
   * Variants are returned in display order: base variant first (always `id: 'base'`),
   * followed by style variants in the order they appear in the component's variant field.
   *
   * @returns A Promise resolving to an array of Variant objects. Each variant includes:
   * - `id`: The unique identifier for the variant
   * - `name`: The display name of the variant
   * - `isSelected`: Indicates which variant is currently active in the Designer's editing context.
   *
   * @example
   * ```ts
   * const component = (await webflow.getAllComponents())[0];
   * const variants = await component.getVariants();
   * console.log(variants);
   * // [{ id: 'base', name: 'Primary', isSelected: true }, { id: 'xxxx', name: 'Secondary', isSelected: false }]
   *
   * // Find which variant is currently being edited
   * const activeVariant = variants.find(v => v.isSelected);
   * console.log(`Currently editing: ${activeVariant.name}`);
   * ```
   */
  getVariants(): Promise<Variant[]>;

  /**
   * Create a new variant for this component.
   * @param options - The name for the new variant and optional selection behavior
   * @returns A promise that resolves to the newly created Variant.
   * @example
   * ```ts
   * const variant = await heroComponent.createVariant({ name: "Dark Mode" });
   * console.log(variant.name); // "Dark Mode"
   * ```
   */
  createVariant(options: CreateVariantOptions): Promise<Variant>;

  /**
   * Duplicate an existing variant. Overload: pass sourceVariantId as second argument.
   * @param options - Options for the duplicate (name base, isSelected)
   * @param sourceVariantId - The variant ID to duplicate, or 'base' to duplicate the base variant
   * @returns A promise that resolves to the newly created duplicate Variant.
   * @example
   * ```ts
   * const duplicate = await heroComponent.createVariant({ name: "Copy" }, variants[1].id);
   * const baseCopy = await heroComponent.createVariant({ name: "Base Copy" }, "base");
   * ```
   */
  createVariant(
    options: CreateVariantOptions,
    sourceVariantId: string
  ): Promise<Variant>;

  /**
   * Get the currently selected variant for this component.
   * The selected variant reflects the Designer's current editing
   * context (which variant frame is active in Component Canvas).
   *
   * @returns A promise that resolves to the currently selected Variant.
   * If no variant is explicitly selected, returns the base variant.
   * Note: The returned variant will always have `isSelected: true`
   *
   * @example
   * ```ts
   * const variant = await heroComponent.getSelectedVariant();
   * console.log(variant.name); // "Primary"
   * console.log(variant.isSelected); // always true
   * ```
   */
  getSelectedVariant(): Promise<Variant>;

  /**
   * Set the selected variant for this component in the Designer.
   * Accepts an options object ({ name } or { id }) or a string shorthand for variant ID.
   * Use 'base' or { id: 'base' } to select the base variant.
   * @param options - Variant to select by name, by id, or string shorthand for id
   * @returns A promise that resolves when the variant is selected.
   * @example
   * ```ts
   * await heroComponent.setSelectedVariant('variant-dark');
   * await heroComponent.setSelectedVariant({ name: 'Dark Mode' });
   * await heroComponent.setSelectedVariant({ id: 'base' });
   * ```
   */
  setSelectedVariant(
    options: SetSelectedVariantOptions | string
  ): Promise<null>;

  /**
   * Get the settings (name, group, description) of a component.
   * @returns A Promise resolving to the component's settings.
   * @example
   * ```ts
   * const settings = await component.getSettings();
   * console.log(settings.name);   // 'Hero Section'
   * console.log(settings.group);  // 'Sections'
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
   * await component.setSettings({ group: 'Legacy' }); // Set the group
   * await component.setSettings({ name: 'Hero v2', description: 'Redesigned hero' }); // Set the name and description
   * ```
   */
  setSettings(settings: Partial<ComponentSettings>): Promise<null>;
}

/**
 * Options for creating a new variant or duplicating an existing one.
 */
interface CreateVariantOptions {
  /** The name for the new variant (required for create, optional base for duplicate) */
  name: string;
  /** Whether to select this variant after creation (optional, defaults to false) */
  isSelected?: boolean;
}

/** Select variant by display name. */
interface SetSelectedVariantByName {
  name: string;
}

/** Select variant by ID. */
interface SetSelectedVariantById {
  id: string;
}

/** Options for setSelectedVariant — select by name or by id. */
type SetSelectedVariantOptions =
  | SetSelectedVariantByName
  | SetSelectedVariantById;

interface Variant {
  /** The variant ID. The base variant always has id 'base'. */
  readonly id: string;
  /** The display name of the variant. */
  readonly name: string;
  /**
   * Indicates which variant is currently active in the Designer's editing context.
   * This reflects global Designer state (which variant frame is selected in Component Canvas),
   * not the component definition.
   * The base variant has `isSelected: true` when no variant is active.
   */
  readonly isSelected: boolean;
}

/**
 * Settings for a component, including name, group, and description.
 */
interface ComponentSettings {
  /** The name of the component */
  name: string;
  /** The group/folder the component belongs to (empty string if not set) */
  group: string;
  /** The description of the component (empty string if not set) */
  description: string;
}

type ComponentId = string;

/** Library info for an imported library component. */
interface ComponentLibraryInfo {
  /** The library's display name. */
  name: string | null;
  /** The library's identifier. */
  id: string;
}

/** A single result returned by {@link webflow.searchComponents}. */
interface ComponentSearchResult {
  /** The component's unique identifier. */
  id: ComponentId;
  /** Display name of the component. */
  name: string;
  /** Group/folder the component belongs to. */
  group: string;
  /** Component description. */
  description: string;
  /** Number of instances used across the site. */
  instances: number;
  /**
   * Whether the current user can edit this component.
   * Always `false` for library and code components.
   * For site components, depends on the user's `canModifyComponents` permission.
   */
  canEdit: boolean;
  /** Library info if this is an imported library component, otherwise `null`. */
  library: ComponentLibraryInfo | null;
}

/** Options for {@link webflow.searchComponents}. */
interface SearchComponentsOptions {
  /**
   * Optional search query.
   * Uses the same fuzzy search (FlexSearch, `tokenize: 'full'`) as the Components panel.
   * When omitted, all components are returned in panel order.
   */
  q?: string;
}

/**
 * Options for creating a blank component.
 */
interface ComponentOptions {
  /** The name of the component (required) */
  name: string;
  /** The group/folder to place the component in (optional) */
  group?: string;
  /** A description for the component (optional) */
  description?: string;
  /**
   * Determines if the source element is replaced in the canvas by a
   * new instance of the created component after conversion.
   * Only applies when a canvas element is supplied as the `root` argument.
   * @default true
   */
  replace?: boolean;
}
