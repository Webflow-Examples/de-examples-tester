interface ColorVariable {
  readonly id: VariableId;
  readonly type: 'Color';
  /**
   * Get the variable's name.
   * @returns A Promise that resolves into a the Variable Name.
   * @example
   * ```ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableName = await variable.getName()
   * ```
   */
  getName(): Promise<string>;
  /**
   * Set variable name.
   * @param newName - The desired name of the variable.
   * @returns A Promise that resolves once a name is successfully set.
   * @example
   * ```ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const colorVariable = await collection.getVariableByName("color");
   * await colorVariable.setName("White");
   * ```
   */
  setName(newName: string): Promise<null>;
  /**
   * Set value of variable. The value must be of the same type as the value of the instantiated variable.
   * @param value - The desired value of the variable.
   * @param options - The configuration options for the variable.
   * @param options.mode - The optional mode object to set the value for.
   * @returns A Promise that resolves into a value, or if the variable is an alias - the original Variable.
   * @example
   * ```ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const newVariable1 = await collection.createColorVariable('myvar4', 'red');
   * await newVariable1.set('yellow');
   * ```
   */
  set(
    value: ColorValue | ColorVariable | CustomValue | null,
    options?: VariableSetOptions
  ): Promise<null>;
  /**
   * Get the variable’s value.
   * @param options - The configuration options for the variable.
   * @param options.mode - The optional mode object to get the value for.
   * @returns A Promise that resolves into a value, or if the variable is an alias - the original Variable.
   * @example
   * ```ts
   * const newVariable1 = await collection.createSizeVariable('myvar1', { unit: 'px', value: 50 });
   * console.log(await newVariable1.get());
   * ```
   */
  get(
    options?: VariableGetOptions
  ): Promise<ColorValue | ColorVariable | CustomValue | null>;
  /**
   * Removes a variable from the default collection.
   * @returns A Promise that resolves into a boolean indicating whether deleting the variable was successful or not.
   * @example
   * ```ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const newVariable1 = await collection.createColorVariable('myvar4', 'red')
   * await newVariable1.remove()
   * ```
   */
  remove(): Promise<boolean>;
  /**
   * Gets a CSS string representing a binding to the variable.
   *
   * This string can be used in custom CSS values to ensure the binding will not break
   * if the variable is renamed.
   *
   * @returns A Promise that resolves into a string representing the variable's name binding. (e.g. `var(--my-color-variable)`)
   * @example
   * ```ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableBinding = await variable.getBinding()
   * ```
   */
  getBinding(): Promise<string>;
  /**
   * Gets a CSS string representing the variable's name.
   *
   * This string can be used in custom CSS with a variable (e.g. binding with a fallback value).
   *
   *
   * @returns A Promise that resolves into a string representing the variable's name. (e.g. `--my-color-variable`)
   * @example
   * ```ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableCSSName = await variable.getCSSName()
   * ```
   */
  getCSSName(): Promise<string>;
}

interface SizeVariable {
  readonly id: VariableId;
  readonly type: 'Size';
  /**
   * Get the variable's name.
   * @returns A Promise that resolves into a the Variable Name.
   * @example
   * ```ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableName = await variable.getName()
   * ```
   */
  getName(): Promise<string>;
  /**
   * Set variable name.
   * @param newName - The desired name of the variable.
   * @returns A Promise that resolves once a name is successfully set.
   * @example
   * ```ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const colorVariable = await collection.getVariableByName("color");
   * await colorVariable.setName("White");
   * ```
   */
  setName(newName: string): Promise<null>;
  /**
   * Set value of variable. The value must be of the same type as the value of the instantiated variable.
   * @param value - The desired value of the variable.
   * @param options - The configuration options for the variable.
   * @param options.mode - The optional mode object to set the value for.
   * @returns A Promise that resolves into a value, or if the variable is an alias - the original Variable.
   * @example
   * ```ts
   * const newVariable1 = await collection.createSizeVariable('myvar1', { unit: 'px', value: 50 });
   * await newVariable1.set({ unit: 'px', value: 80 });
   * ```
   */
  set(
    value: SizeValue | SizeVariable | CustomValue | null,
    options?: VariableSetOptions
  ): Promise<null>;
  /**
   * Get the variable’s value.
   * @param options - The configuration options for the variable.
   * @param options.mode - The optional mode object to get the value for.
   * @returns A Promise that resolves into a value, or if the variable is an alias - the original Variable.
   * @example
   * ```ts
   * const newVariable1 = await collection.createSizeVariable('myvar1', { unit: 'px', value: 50 });
   * console.log(await newVariable1.get());
   * ```
   */
  get(
    options?: VariableGetOptions
  ): Promise<SizeValue | SizeVariable | CustomValue | null>;
  /**
   * Removes a variable from the default collection.
   * @returns A Promise that resolves into a boolean indicating whether deleting the variable was successful or not.
   * @example
   * ```ts
   * const newVariable1 = await collection.createColorVariable('myvar4', 'red')
   * await newVariable1.remove()
   * ```
   */
  remove(): Promise<boolean>;
  /**
   * Gets a CSS string representing a binding to the variable.
   *
   * This string can be used in custom CSS values to ensure the binding will not break
   * if the variable is renamed.
   *
   * @returns A Promise that resolves into a string representing the variable's name binding. (e.g. `var(--my-size-variable)`)
   * @example
   * ```ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableBinding = await variable.getBinding()
   * ```
   */
  getBinding(): Promise<string>;
  /**
   * Gets a CSS string representing the variable's name.
   *
   * This string can be used in custom CSS with a variable (e.g. binding with a fallback value).
   *
   * @returns A Promise that resolves into a string representing the variable's name. (e.g. `--my-size-variable`)
   * @example
   * ```ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableCSSName = await variable.getCSSName()
   * ```
   */
  getCSSName(): Promise<string>;
}

interface NumberVariable {
  readonly id: VariableId;
  readonly type: 'Number';

  /**
   * Get the variable's name.
   * @returns A Promise that resolves into the Variable Name.
   * @example
   * ```ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableName = await variable.getName()
   * ```
   */
  getName(): Promise<string>;

  /**
   * Set the variable's name.
   * @param newName - The desired name of the variable.
   * @returns A Promise that resolves once the name is successfully set.
   * @example
   * ```ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const numberVariable = await collection.getVariableByName("number");
   * await numberVariable.setName("My Number Variable");
   * ```
   */
  setName(newName: string): Promise<null>;

  /**
   * Set the value of the variable. The value must be of the same type as the value of the instantiated variable.
   * @param value - The desired value of the variable.
   * @param options - The configuration options for the variable.
   * @param options.mode - The optional mode object to set the value for.
   * @returns A Promise that resolves once the value is successfully set.
   * @example
   * ```ts
   * const newVariable = await collection.createNumberVariable('myvar1', 100);
   * await newVariable.set(200);
   * ```
   */
  set(
    value: NumberValue | NumberVariable | CustomValue | null,
    options?: VariableSetOptions
  ): Promise<null>;

  /**
   * Get the variable’s value.
   * @param options - The configuration options for the variable.
   * @param options.mode - The optional mode object to get the value for.
   * @returns A Promise that resolves into the variable's number value, or if the variable is an alias - the original Variable.
   * @example
   * ```ts
   * const newVariable = await collection.createNumberVariable('myvar1', 100);
   * console.log(await newVariable.get());
   * ```
   */
  get(
    options?: VariableGetOptions
  ): Promise<NumberValue | NumberVariable | CustomValue | null>;

  /**
   * Removes the variable from the default collection.
   * @returns A Promise that resolves into a boolean indicating whether deleting the variable was successful.
   * @example
   * ```ts
   * const newVariable = await collection.createNumberVariable('myvar1', 100);
   * await newVariable.remove();
   * ```
   */
  remove(): Promise<boolean>;
  /**
   * Gets a CSS string representing a binding to the variable.
   *
   * This string can be used in custom CSS values to ensure the binding will not break
   * if the variable is renamed.
   *
   * @returns A Promise that resolves into a string representing the variable's name binding. (e.g. `var(--my-number-variable)`)
   * @example
   * ```ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableBinding = await variable.getBinding()
   * ```
   */
  getBinding(): Promise<string>;
  /**
   * Gets a CSS string representing the variable's name.
   *
   * This string can be used in custom CSS with a variable (e.g. binding with a fallback value).
   *
   * @returns A Promise that resolves into a string representing the variable's CSS name. (e.g. `--my-number-variable`)
   * @example
   * ```ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableCSSName = await variable.getCSSName()
   * ```
   */
  getCSSName(): Promise<string>;
}

interface PercentageVariable {
  readonly id: VariableId;
  readonly type: 'Percentage';
  /**
   * Get the variable's name.
   * @returns A Promise that resolves into the Variable Name.
   * @example
   * ```ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableName = await variable.getName()
   * ```
   */
  getName(): Promise<string>;

  /**
   * Set the variable's name.
   * @param newName - The desired name of the variable.
   * @returns A Promise that resolves once the name is successfully set.
   * @example
   * ```ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const percentageVariable = await collection.getVariableByName("percentage");
   * await percentageVariable.setName("My Percentage Variable");
   * ```
   */
  setName(newName: string): Promise<null>;

  /**
   * Set the value of the variable. The value must be of the same type as the value of the instantiated variable.
   * @param value - The desired value of the variable.
   * @param options - The configuration options for the variable.
   * @param options.mode - The optional mode object to set the value for.
   * @returns A Promise that resolves once the value is successfully set.
   * @example
   * ```ts
   * const newVariable = await collection.createPercentageVariable('myvar1', 100);
   * await newVariable.set(50);
   * ```
   */
  set(
    value: PercentageValue | PercentageVariable | CustomValue | null,
    options?: VariableSetOptions
  ): Promise<null>;

  /**
   * Get the variable’s value.
   * @param options - The configuration options for the variable.
   * @param options.mode - The optional mode object to get the value for.
   * @returns A Promise that resolves into the variable's value, or if the variable is an alias - the original Variable.
   * @example
   * ```ts
   * const newVariable = await collection.createPercentageVariable('myvar1', 100);
   * console.log(await newVariable.get());
   * ```
   */
  get(
    options?: VariableGetOptions
  ): Promise<PercentageValue | PercentageVariable | CustomValue | null>;

  /**
   * Removes the variable from the default collection.
   * @returns A Promise that resolves into a boolean indicating whether deleting the variable was successful.
   * @example
   * ```ts
   * const newVariable = await collection.createPercentageVariable('myvar1', 100);
   * await newVariable.remove();
   * ```
   */
  remove(): Promise<boolean>;
  /**
   * Gets a CSS string representing a binding to the variable.
   *
   * This string can be used in custom CSS values to ensure the binding will not break
   * if the variable is renamed.
   *
   * @returns A Promise that resolves into a string representing the variable's name binding. (e.g. `var(--my-percentage-variable)`)
   * @example
   * ```ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableBinding = await variable.getBinding()
   * ```
   */
  getBinding(): Promise<string>;
  /**
   * Gets a CSS string representing the variable's name.
   *
   * This string can be used in custom CSS with a variable (e.g. binding with a fallback value).
   *
   * @returns A Promise that resolves into a string representing the variable's name. (e.g. `--my-percentage-variable`)
   * @example
   * ```ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableCSSName = await variable.getCSSName()
   * ```
   */
  getCSSName(): Promise<string>;
}

interface FontFamilyVariable {
  readonly id: VariableId;
  readonly type: 'FontFamily';
  /**
   * Get the variable's name.
   * @returns A Promise that resolves into a the Variable Name.
   * @example
   * ```ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableName = await variable.getName()
   * ```
   */
  getName(): Promise<string>;
  /**
   * Set variable name.
   * @param newName - The desired name of the variable.
   * @returns A Promise that resolves once a name is successfully set.
   * @example
   * ```ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const colorVariable = await collection.getVariableByName("color");
   * await colorVariable.setName("White");
   * ```
   */
  setName(newName: string): Promise<null>;
  /**
   * Set value of variable. The value must be of the same type as the value of the instantiated variable.
   * @param value - The desired value of the variable.
   * @param options - The configuration options for the variable.
   * @param options.mode - The optional mode object to set the value for.
   * @returns A Promise that resolves into a value, or if the variable is an alias - the original Variable.
   * @example
   * ```ts
   * const newVariable1 = await collection.createColorVariable('myvar4', 'red');
   * await newVariable1.set('yellow');
   * ```
   */
  set(
    value: FontFamilyValue | FontFamilyVariable | CustomValue | null,
    options?: VariableSetOptions
  ): Promise<null>;
  /**
   * Get the variable’s value.
   * @param options - The configuration options for the variable.
   * @param options.mode - The optional mode object to get the value for.
   * @returns A Promise that resolves into a value, or if the variable is an alias - the original Variable.
   * @example
   * ```ts
   * const newVariable1 = await collection.createSizeVariable('myvar1', { unit: 'px', value: 50 });
   * console.log(await newVariable1.get());
   * ```
   */
  get(
    options?: VariableGetOptions
  ): Promise<FontFamilyValue | FontFamilyVariable | CustomValue | null>;
  /**
   * Removes a variable from the default collection.
   * @returns A Promise that resolves into a boolean indicating whether deleting the variable was successful or not.
   * @example
   * ```ts
   * const newVariable1 = await collection.createColorVariable('myvar4', 'red')
   * await newVariable1.remove()
   * ```
   */
  remove(): Promise<boolean>;
  /**
   * Gets a CSS string representing a binding to the variable.
   *
   * This string can be used in custom CSS values to ensure the binding will not break
   * if the variable is renamed.
   *
   * @returns A Promise that resolves into a string representing the variable's name binding. (e.g. `var(--my-font-family-variable)`)
   * @example
   * ```ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableBinding = await variable.getBinding()
   * ```
   */
  getBinding(): Promise<string>;
  /**
   * Gets a CSS string representing the variable's name.
   *
   * This string can be used in custom CSS with a variable (e.g. binding with a fallback value).
   *
   * @returns A Promise that resolves into a string representing the variable's name. (e.g. `--my-font-family-variable`)
   * @example
   * ```ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableCSSName = await variable.getCSSName()
   * ```
   */
  getCSSName(): Promise<string>;
}

type Variable =
  | ColorVariable
  | SizeVariable
  | FontFamilyVariable
  | NumberVariable
  | PercentageVariable;

interface VariableCollection {
  readonly id: VariableCollectionId;
  getName(): Promise<string>;
  getVariable(id: VariableId): Promise<null | Variable>;
  getVariableByName(name: string): Promise<null | Variable>;
  getAllVariables(): Promise<Array<Variable>>;
  createColorVariable(
    name: string,
    value: string | ColorVariable | CustomValue,
    modes?: {[key: VariableModeId]: string | ColorVariable | CustomValue}
  ): Promise<ColorVariable>;
  createSizeVariable(
    name: string,
    value: SizeValue | SizeVariable | CustomValue,
    modes?: {[key: VariableModeId]: SizeValue | SizeVariable | CustomValue}
  ): Promise<SizeVariable>;
  createNumberVariable(
    name: string,
    value: number | NumberVariable | CustomValue,
    modes?: {[key: VariableModeId]: number | NumberVariable | CustomValue}
  ): Promise<NumberVariable>;
  createPercentageVariable(
    name: string,
    value: number | PercentageVariable | CustomValue,
    modes?: {[key: VariableModeId]: number | PercentageVariable | CustomValue}
  ): Promise<PercentageVariable>;
  createFontFamilyVariable(
    name: string,
    value: string | FontFamilyVariable | CustomValue,
    modes?: {[key: VariableModeId]: string | FontFamilyVariable | CustomValue}
  ): Promise<FontFamilyVariable>;
  /**
   * Sets the name of the variable collection.
   * @param newName - The desired name of the variable collection.
   * @returns A Promise that resolves once the name is successfully set.
   * @example
   * ```ts
   * const collection = await webflow.createVariableCollection('My Collection');
   * await collection.setName('My New Collection');
   * ```
   */
  setName(newName: string): Promise<null>;
  /**
   * Creates a new variable mode.
   * @param name - The desired name of the variable mode.
   * @returns A Promise that resolves into the new variable mode.
   * @example
   * ```ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const mode = await collection.createVariableMode('My Mode');
   * ```
   */
  createVariableMode(name: string): Promise<VariableMode>;
  /**
   * Gets a variable mode by id.
   * @param id - The id of the variable mode.
   * @returns A Promise that resolves into the variable mode.
   * @example
   * ```ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const mode = await collection.getVariableModeById('modeId');
   * ```
   */
  getVariableModeById(id: VariableModeId): Promise<null | VariableMode>;
  /**
   * Gets a variable mode by name.
   * @param name - The name of the variable mode.
   * @returns A Promise that resolves into the variable mode.
   * @example
   * ```ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const mode = await collection.getVariableModeByName('modeName');
   * ```
   */
  getVariableModeByName(name: string): Promise<null | VariableMode>;
  /**
   * Gets all variable modes.
   * @returns A Promise that resolves into an array of variable modes.
   * @example
   * ```ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const modes = await collection.getAllVariableModes();
   * ```
   */
  getAllVariableModes(): Promise<Array<VariableMode>>;
}

interface VariableMode {
  readonly id: VariableModeId;
  /**
   * Gets the name of the variable mode.
   * @returns A Promise that resolves into the variable mode's name.
   * @example
   * ```ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const mode = await collection.createVariableMode('My Mode')
   * const modeName = await mode.getName();
   * ```
   */
  getName(): Promise<string>;
  /**
   * Removes the variable mode from the collection.
   * @returns A Promise that resolves into a boolean indicating whether deleting the variable was successful.
   * @example
   * ```ts
   * const mode = await collection.createVariableMode('My Mode')
   * await mode.remove();
   * ```
   */
  remove(): Promise<boolean>;
  /**
   * Sets the name of the variable mode.
   * @param name - The desired name of the variable mode.
   * @returns A Promise that resolves once the name is successfully set.
   * @example
   * ```ts
   * const mode = await collection.createVariableMode('My Mode')
   * await mode.setName('My New Mode');
   * ```
   */
  setName(name: string): Promise<null>;
}

type VariableModeId = string;
type VariableCollectionId = string;
type VariableId = string;
type ColorValue = string;
type SizeValue = {value: number; unit: SizeUnit};
type FontFamilyValue = string;
type NumberValue = number;
type PercentageValue = number;
type SizeUnit =
  | 'px'
  | 'em'
  | 'rem'
  | 'vh'
  | 'vw'
  | 'dvh'
  | 'dvw'
  | 'lvh'
  | 'lvw'
  | 'svh'
  | 'svw'
  | 'vmax'
  | 'vmin'
  | 'ch';
type VariableSetOptions = {
  /** The mode to get/set the variable value for. */
  mode?: VariableMode;
  /** Whether to return custom values. */
  customValues?: boolean;
};
type VariableGetOptions = {
  /** The mode to get/set the variable value for. */
  mode?: VariableMode;
  /** Whether to return custom values. */
  customValues?: boolean;
  /** Whether to not return the base value and instead return null. */
  doNotInheritFromBase?: boolean;
};
type CustomValue = {
  type: 'custom';
  value: string;
};
