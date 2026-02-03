/// <reference path="./styles-generated.d.ts" />

interface Style {
  readonly id: StyleId;

  /**
   * Retrieve the name of the Style.
   * @example
   * ```ts
   * let styleName = await myStyle.getName();
   * console.log("Style Name:", styleName);
   * ```
   */
  getName(): Promise<string>;
  /**
   * Retrieve the properties of the style.
   * @param options - Options to filter properties based on breakpoints and pseudo classes / states.
   * @returns CSS properties and their values for the given breakpoint and pseudo-state.
   * @example
   * ```ts
   * let styleProperties = myStyle.getProperties();
   * console.log("Style Properties:", styleProperties);
   * ```
   */
  getProperties(options?: BreakpointAndPseudo): Promise<PropertyMap>;
  /**
   * Sets CSS properties for the Style at the given breakpoint and pseudo-state.
   * @param props - The new properties to set for the style. You can use variables here as well.
   * @param options - Options to filter properties based on breakpoints and pseudo classes / states.
   * @example
   * ```ts
   * myStyle.setProperties({ color: 'red', 'font-size': '16px' }, { breakpoint: 'main', pseudo: 'hover' });
   * ```
   */
  setProperties(
    props: PropertyMap,
    options?: BreakpointAndPseudo
  ): Promise<null>;
  removeProperties(
    props: Array<StyleProperty>,
    options?: BreakpointAndPseudo
  ): Promise<null>;
  /**
   * Retrieve the value of a specific property of the style.
   * @param prop - The name of the property to retrieve.
   * @param options - Options to get property based on breakpoints and pseudo classes / states.
   * @returns Returns the value of a specific CSS property for the given breakpoint and pseudo-state, or null if the property does not exist.
   * @example
   * ```ts
   * let color = myStyle.getProperty('color', { breakpoint: 'main', pseudo: 'hover' });
   * let fontSize = myStyle.getProperty("fontSize");
   * console.log("Font Size:", fontSize);
   * ```
   */
  getProperty<p extends StyleProperty>(
    prop: p,
    options?: BreakpointAndPseudo
  ): Promise<null | PropertyMap[p]>;
  /**
   * Sets a specific CSS property for the Style at the given breakpoint and pseudo-state.
   * @param prop - The name of the property to set.
   * @param value - The new value to set for the property.
   * @param options - Options to set property based on breakpoints and pseudo classes / states.
   * @example
   * ```ts
   * myStyle.setProperty('color', 'blue', { breakpoint: 'main', pseudo: 'hover' });
   * ```
   */
  setProperty<p extends StyleProperty>(
    prop: p,
    value: NonNullable<PropertyMap[p]>,
    options?: BreakpointAndPseudo
  ): Promise<null>;
  removeProperty(
    prop: StyleProperty,
    options?: BreakpointAndPseudo
  ): Promise<null>;
  /**
   * Removes all CSS properties from the Style.
   * @example
   * ```ts
   * await myStyle.removeAllProperties();
   * ```
   */
  removeAllProperties(): Promise<null>;
  /**
   * Returns true if the style is a combo class.
   * @example
   * ```ts
   * const isComboClass = await myStyle.isComboClass();
   * console.log("Is Combo Class:", isComboClass);
   * ```
   */
  isComboClass(): boolean;
  /**
   * Retrieve a variable mode from the style.
   * @param collection - The collection from which to get the currently applied mode.
   * @param options - Options to get variable mode based on breakpoints and pseudo classes / states.
   * @example
   * ```ts
   * const collection = await webflow.getVariableCollectionById('collection-id');
   * let variableMode = await myStyle.getVariableMode(collection);
   * ```
   */
  getVariableMode(
    collection: VariableCollection,
    options?: BreakpointAndPseudo
  ): Promise<null | VariableMode>;
  /**
   * Sets a variable mode for the style.
   * @param collection - The collection that the mode being set belongs to.
   * @param mode - The variable mode to set.
   * @param options - Options to set variable mode based on breakpoints and pseudo classes / states.
   * @example
   * ```ts
   * const collection = await webflow.getVariableCollectionById('collection-id');
   * const mode = await collection.getVariableModeByName('Dark');
   * await myStyle.setVariableMode(collection, mode);
   * ```
   */
  setVariableMode(
    collection: VariableCollection,
    mode: VariableMode,
    options?: BreakpointAndPseudo
  ): Promise<null>;
  /**
   * Removes a variable mode from the style.
   * @param collection - The collection that the mode being removed belongs to.
   * @param options - Options to remove variable mode based on breakpoints and pseudo classes / states.
   * @example
   * ```ts
   * const collection = await webflow.getVariableCollectionById('collection-id');
   * await myStyle.removeVariableMode(collection)
   * ```
   */
  removeVariableMode(
    collection: VariableCollection,
    options?: BreakpointAndPseudo
  ): Promise<null>;
  /**
   * Retrieve all variable modes applied on the style.
   * @param options - Options to get variable modes based on breakpoints and pseudo classes / states.
   * @example
   * ```ts
   * const modes = await myStyle.getVariableModes();
   * ```
   */
  getVariableModes(
    options?: BreakpointAndPseudo
  ): Promise<VariableModeStylePropertyMap>;
  /**
   * Sets variable modes for the style.
   * @param props - The variable modes to set.
   * @param options - Options to set variable modes based on breakpoints and pseudo classes / states.
   * @example
   * ```ts
   * await myStyle.setVariableModes({
   *   'collection-id-1': 'mode-id-1',
   *   'collection-id-2': 'mode-id-2',
   * });
   * ```
   */
  setVariableModes(
    props: VariableModeStylePropertyMap,
    options?: BreakpointAndPseudo
  ): Promise<null>;
  /**
   * Removes variable modes from the style.
   * @param modes - The variable modes to remove from the style.
   * @param options - Options to remove variable modes based on breakpoints and pseudo classes / states.
   * @example
   * ```ts
   * const collection = await webflow.getVariableCollectionById('collection-id');
   * const mode = await collection.getVariableModeByName('Dark');
   * const modeTwo = await collection.getVariableModeByName('Light');
   * await myStyle.removeVariableModes([mode, modeTwo]);
   * ```
   */
  removeVariableModes(
    modes: Array<VariableMode>,
    options?: BreakpointAndPseudo
  ): Promise<null>;
  /**
   * Removes all variable modes from the style.
   * @param options - Options to remove all variable modes based on breakpoints and pseudo classes / states.
   * @example
   * ```ts
   * await myStyle.removeAllVariableModes();
   * ```
   */
  removeAllVariableModes(options?: BreakpointAndPseudo): Promise<null>;
  /**
   * Retrieves the parent style for a combo class and otherwise returns null.
   * @example
   * ```ts
   * const parentStyle = await myStyle.getParent();
   * ```
   */
  getParent(): Promise<Style | null>;
}

type StyleId = string;

type BreakpointAndPseudo = {
  breakpoint?: BreakpointId;
  pseudo?: PseudoStateKey;
};

type BreakpointId =
  | 'xxl'
  | 'xl'
  | 'large'
  | 'main'
  | 'medium'
  | 'small'
  | 'tiny';

type VariableModeStylePropertyMap = {
  [collectionId: VariableCollectionId]: VariableModeId;
};
