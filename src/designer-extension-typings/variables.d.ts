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
    value: ColorValue | ColorVariable,
    options?: VariableOptions
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
  get(options?: VariableOptions): Promise<ColorValue | ColorVariable>;
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
    value: SizeValue | SizeVariable,
    options?: VariableOptions
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
  get(options?: VariableOptions): Promise<SizeValue | SizeVariable>;
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
    value: NumberValue | NumberVariable,
    options?: VariableOptions
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
  get(options?: VariableOptions): Promise<NumberValue | NumberVariable>;

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
    value: PercentageValue | PercentageVariable,
    options?: VariableOptions
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
  get(options?: VariableOptions): Promise<PercentageValue | PercentageVariable>;

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
    value: FontFamilyValue | FontFamilyVariable,
    options?: VariableOptions
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
  get(options?: VariableOptions): Promise<FontFamilyValue | FontFamilyVariable>;
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
    value: string | ColorVariable
  ): Promise<ColorVariable>;
  createSizeVariable(
    name: string,
    value: SizeValue | SizeVariable
  ): Promise<SizeVariable>;
  createNumberVariable(
    name: string,
    value: number | NumberVariable
  ): Promise<NumberVariable>;
  createPercentageVariable(
    name: string,
    value: number | PercentageVariable
  ): Promise<PercentageVariable>;
  createFontFamilyVariable(
    name: string,
    value: string | FontFamilyVariable
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
type VariableOptions = {
  /** The mode to get/set the variable value for. */
  mode?: VariableMode;
};
