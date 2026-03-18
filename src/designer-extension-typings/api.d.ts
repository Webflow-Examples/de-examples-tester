/// <reference path="./brand.d.ts" />
/// <reference path="./styles.d.ts" />
/// <reference path="./pages.d.ts" />
/// <reference path="./elements.d.ts" />
/// <reference path="./element-presets.d.ts" />
/// <reference path="./components.d.ts" />
/// <reference path="./builder-element.d.ts" />
/// <reference path="./variables.d.ts" />
/// <reference path="./app-subscription.d.ts" />
/// <reference path="./assets.d.ts" />
/// <reference path="./element-settings-generated.d.ts" />
/// <reference path="./element-settings.d.ts" />
/// <reference path="./instance-props.d.ts" />
/// <reference path="./app-modes-generated.d.ts" />
/// <reference path="./app-connections.d.ts" />

type AppModeName = 'design' | 'build' | 'preview' | 'edit' | 'comment';

interface AppModeChangeEvent {
  mode: AppModeName | null;
  appModes: {[key in AppMode]: boolean};
}

interface SharedApi {
  /**
   * Get metadata about the current Site.
   * @returns A Promise that resolves to a record containing information about the site that is open in the
   * Designer, with the following properties:
   * - siteId: the unique ID of the current Webflow site.
   * - siteName: the name of the current Webflow site.
   * - shortName: a shortened reference to the name of the current Webflow site.
   * - isPasswordProtected: whether the site is password protected.
   * - isPrivateStaging: whether the site has private staging turned on or not.
   * - domains: an array of objects representing the domains associated with the site, each containing the following properties:
   *   - url: the URL of the domain.
   *   - lastPublished: the timestamp of the last time the domain was published.
   *   - default: a boolean indicating whether the domain is the default domain for the site.
   *   - stage: the target of the publish
   * @example
   * ```ts
   * const siteInfo = await webflow.getSiteInfo();
   * console.log('Site ID:', siteInfo.siteId);
   * console.log('Site Name:', siteInfo.siteName);
   * console.log('Shortened Site Name:', siteInfo.shortName);
   * console.log('Domains:', siteInfo.domains);
   * console.log('Workspace ID:', siteInfo.workspaceId);
   * console.log('Workspace Slug:', siteInfo.workspaceSlug);
   * ```
   */
  getSiteInfo(): Promise<{
    siteId: string;
    siteName: string;
    shortName: string;
    isPasswordProtected: boolean;
    isPrivateStaging: boolean;
    workspaceId: string;
    workspaceSlug: string;
    domains: Array<{
      url: string;
      lastPublished: string | null;
      default: boolean;
      stage: 'staging' | 'production';
    }>;
  }>;
  /**
   * Renders the specified element to WHTML format.
   * @param element - The element to render
   * @returns A promise that resolves to an object containing the WHTML string and shortIdMap, or null
   * @example
   * ```ts
   * const selectedElement = await webflow.getSelectedElement();
   * if (selectedElement) {
   *   const result = await webflow.getWHTML(selectedElement);
   *   if (result) {
   *     console.log('WHTML:', result.whtml);
   *     console.log('Short ID Map:', result.shortIdMap);
   *   }
   * }
   * ```
   */
  getWHTML?(
    element: AnyElement
  ): Promise<null | {whtml: string; shortIdMap: Record<string, string[]>}>;

  elementBuilder(elementPreset: ElementPreset<AnyElement>): BuilderElement;

  /**
   * Parse a WHTML string and insert the resulting element as a child of the anchor element.
   * The newly created element will be appended to the end of the anchor's children.
   * @param whtml - The WHTML string to parse into an element
   * @param anchor - The parent element to append the parsed WHTML element to
   * @param position - The position relative to the anchor element where the new element will be inserted.
   *   - 'before': Insert as a sibling before the anchor element
   *   - 'after': Insert as a sibling after the anchor element
   *   - 'append': Insert as the last child of the anchor element (default)
   *   - 'prepend': Insert as the first child of the anchor element
   *   - 'replace': Replace the anchor element with the new element
   * @returns A Promise that resolves to the newly inserted AnyElement
   * @example
   * ```ts
   * const whtml = '<ul><li>Item 1</li><li>Item 2</li></ul>';
   * const body = await allElements.find((el) => el.type === 'Body');
   * // Append as last child (default)
   * const element = await webflow.insertElementFromWHTML(whtml, body);
   * // Or insert before an existing element
   * const existingElement = await webflow.getSelectedElement();
   * const newElement = await webflow.insertElementFromWHTML(whtml, existingElement, 'before');
   * // Or replace an existing element
   * const replacedElement = await webflow.insertElementFromWHTML(whtml, existingElement, 'replace');
   * ```
   */
  insertElementFromWHTML?(
    whtml: string,
    anchor: AnyElement,
    position?: 'before' | 'after' | 'append' | 'prepend' | 'replace'
  ): Promise<AnyElement>;

  /**
   * Create a component by promoting a Root Element.
   * @param name - The name of the component.
   * @param root - An Element that will become the Root Element of the Component.
   * @returns A Promise resolving to an object containing the newly created Component - with the id property.
   * @deprecated Use `registerComponent(options, root)` instead to provide richer metadata.
   * @example
   * ```ts
   * const element = webflow.createDOM('div')
   * await webflow.registerComponent('Hero-Component', element)
   *
   * // Example Response
   * {id: '204d04de-bf48-5b5b-0ca8-6ec4c5364fd2'}
   * ```
   */
  registerComponent(
    name: string,
    root?: AnyElement | ElementPreset<AnyElement> | Component | ComponentId
  ): Promise<Component>;

  /**
   * Create a component by converting an element into a component or duplicating a component.
   * @param options - The options for the new component.
   * @param root - An Element that will become the Root Element of the Component.
   * @returns A Promise resolving to an object containing the newly created Component - with the id property.
   * @example
   * ```ts
   * // Convert an existing element into a component
   * const selectedElement = await webflow.getSelectedElement()
   * const heroComponent = await webflow.registerComponent(
   *   {
   *     name: 'Hero Section',
   *     group: 'Sections',
   *     description: 'Main hero with heading and CTA'
   *   },
   *   selectedElement
   * )
   * ```
   */
  registerComponent(
    options: ComponentOptions,
    root?: AnyElement | ElementPreset<AnyElement> | Component | ComponentId
  ): Promise<Component>;

  /**
   * Create a blank component.
   * @param options - Options for creating the blank component.
   * @returns A Promise resolving to an object containing the newly created Component - with the id property.
   * @example
   * ```ts
   * const component = await webflow.registerComponent({name: 'Hero Section'})
   *
   * // With optional group and description
   * const grouped = await webflow.registerComponent({
   *   name: 'Hero Section',
   *   group: 'Sections',
   *   description: 'A hero section component',
   * })
   * ```
   */
  registerComponent(options: ComponentOptions): Promise<Component>;
  /**
   * Duplicate an existing component.
   * @param options - Options for the new component, including a required name.
   * @param source - The existing Component to duplicate.
   * @returns A Promise resolving to the newly created Component.
   * @example
   * ```ts
   * const [original] = await webflow.getAllComponents()
   * const copy = await webflow.registerComponent({name: 'Hero Copy'}, original)
   * ```
   */
  registerComponent(
    options: ComponentOptions,
    source: Component
  ): Promise<Component>;
  /**
   * Convert an element or element preset into a component. Equivalent to the
   * "Convert selection" action in the Designer's "New component" menu.
   * Elements do not need to be on the page. You can build the tree with
   * `createDOM` first and pass it directly.
   *
   * When `root` is a canvas `AnyElement`, the source element is replaced
   * in-place by a new component instance by default. Pass `replace: false`
   * in `options` to skip this substitution and keep the original element.
   * @param options - Options for the new component. `name` is required;
   *   `group`, `description`, and `replace` are optional.
   * @param root - The element, element preset, or builder element that becomes the component root.
   * @returns A Promise resolving to the newly created Component.
   * @example
   * ```ts
   * // Convert a canvas element and replace it with a component instance (default)
   * const el = await webflow.getSelectedElement()
   * const card = await webflow.registerComponent({name: 'Card', group: 'UI'}, el)
   *
   * // Convert without replacing the original element in the canvas
   * const card2 = await webflow.registerComponent(
   *   {name: 'Card 2', replace: false},
   *   el
   * )
   */
  registerComponent(
    options: ComponentOptions,
    root: AnyElement | ElementPreset<AnyElement> | BuilderElement
  ): Promise<Component>;
  /**
   * Delete a component from the Designer. If there are any instances of the Component within the site, they will
   * be converted to regular Elements.
   * @param component -  The component object you wish to delete.
   * @returns A Promise resolving that resolves when the Component is deleted.
   * @example
   * ```ts
   * const element = webflow.createDOM('div')
   * const heroComponent = await webflow.registerComponent('Hero-Component', element)
   * await webflow.unregisterComponent(heroComponent)
   * ```
   */
  unregisterComponent(component: Component): Promise<null>;
  /**
   * Fetch all Site-scoped components definitions. In order to edit a component, you’ll need to get a specific
   * Component instance.
   * @returns A Promise resolving to an array containing all Components from the currently open site in the
   * Designer - with the id property.
   * @example
   * ```ts
   *  const fetchedComponents = await webflow.getAllComponents();
   *
   * // Example Response
   * [
   * {id: "4a669354-353a-97eb-795c-4471b406e043"}
   * {id: 'd6e076e2-19a2-c4ae-9da3-ce3b0493b503'}
   * ]
   * ```
   */
  getAllComponents(): Promise<Array<Component>>;
  /**
   * Search site components with optional fuzzy filtering.
   * Returns a flat array of {@link ComponentSearchResult} objects in the same order as the
   * Components panel (insertion order). When `options.q` is provided, results are filtered
   * using FlexSearch (`tokenize: 'full'`) — the same algorithm used by the Components panel.
   *
   * @param options - Optional search options.
   * @param options.q - Search query string. Omit or leave empty to return all components.
   * @returns A Promise resolving to an array of {@link ComponentSearchResult} objects.
   *
   * @example
   * ```ts
   * // Get all components
   * const all = await webflow.searchComponents();
   *
   * // Filter by name
   * const heroes = await webflow.searchComponents({ q: 'Hero' });
   * heroes.forEach(c => {
   *   console.log(c.name, c.instances, c.canEdit, c.library);
   * });
   * ```
   */
  searchComponents(
    options?: SearchComponentsOptions
  ): Promise<ComponentSearchResult[]>;
  /**
   * Returns a component reference when the user is editing in-context or on the component canvas, or null if no component is being edited.
   * @returns A Promise that resolves to a Component reference or null.
   * @example
   * ```ts
   * const component = await webflow.getCurrentComponent();
   * if (component) {
   *   const name = await component.getName();
   *   console.log(`Currently editing: ${name}`);
   * }
   * ```
   */
  getCurrentComponent(): Promise<Component | null>;
  /**
   * Get a Component by its unique identifier.
   * @param id - The unique identifier of the component.
   * @returns A Promise that resolves to the Component with the given id.
   * @example
   * ```ts
   * const componentId = '4a669354-353a-97eb-795c-4471b406e043';
   * const component = await webflow.getComponent(componentId);
   * ```
   */
  getComponent(id: ComponentId): Promise<Component>;
  /**
   * Get a Component by its display name. Only returns native site components.
   * Throws if the matching component is a code component.
   * @param name - The display name of the component.
   * @example
   * ```ts
   * const component = await webflow.getComponentByName('Hero');
   * ```
   */
  getComponentByName(name: string): Promise<Component>;
  /**
   * Get a Component by its group and display name. Only returns native site components.
   * Throws if the matching component is a code component.
   * @param group - The group name the component belongs to.
   * @param name - The display name of the component.
   * @example
   * ```ts
   * const component = await webflow.getComponentByName('Marketing', 'Hero');
   * ```
   */
  getComponentByName(group: string, name: string): Promise<Component>;
  /**
   * Focus the designer on a Component. When a component is in focus, all Globals pertain specifically to that
   * Component, not the entire Site.
   * @param instance - A Component Instance that is present on the page. If there’s no current instance, you’ll
   * need to create one first.
   * @returns A Promise that resolves when the page switch is successful.
   * @example
   * ```ts
   * await webflow.enterComponent(heroComponentInstance);
   * ```
   */
  enterComponent(instance: ComponentElement): Promise<null>;
  /**
   * Return to the broader context of the entire site or page.
   * @returns A Promise that resolves when the page switch is successful.
   * @example
   * ```ts
   * await webflow.exitComponent();
   * ```
   */
  exitComponent(): Promise<null>;
  /**
   * Navigate the Designer to a component canvas or page.
   * @param options - An object with either pageId or componentId.
   * @returns A Promise that resolves when the navigation is complete.
   * @example
   * ```ts
   * // Open a component canvas by component id
   * await webflow.openCanvas({componentId: '4a669354-353a-97eb-795c-4471b406e043'});
   *
   * // Open a component canvas by page id
   * await webflow.openCanvas({pageId: '123'});
   * ```
   */
  openCanvas(
    options: OpenCanvasByComponentId | OpenCanvasByPageId
  ): Promise<void>;
  /**
   * Navigate the Designer to a component canvas or page using a reference.
   * @param reference - A Component, ComponentElement, or Page reference.
   * @returns A Promise that resolves when the navigation is complete.
   * @example
   * ```ts
   * // Open a component canvas by component
   * const heroComponent = await webflow.getComponent('4a669354-353a-97eb-795c-4471b406e043');
   * await webflow.openCanvas(heroComponent);
   *
   * // Open a component canvas by page
   * const myPage = await webflow.getPage('123');
   * await webflow.openCanvas(myPage);
   * ```
   */
  openCanvas(reference: Component | ComponentElement | Page): Promise<void>;
  /**
   * Get Root element. When the designer is focused or "entered" into a Component, this method will get the
   * outermost element in the Component.
   * @returns The outermost element of the Page or Component.
   * @example
   * ```ts
   * // 🎉 Enter into  Component 🎉
   * await webflow.enterComponent(heroComponentInstance)
   * const root = await webflow.getRootElement()
   *
   * // Example Response
   * {id: '204d04de-bf48-5b5b-0ca8-6ec4c5364fd2'}
   * ```
   */
  getRootElement(): Promise<null | AnyElement>;
  /**
   * Fetch an array of all elements present on the current page of the Designer. If the Designer is editing a
   * component, the elements returned are those present in that Component.
   * @returns A Promise that resolves to an array of AnyElement objects. AnyElement represents various element
   * types available in a Webflow project. Each element type corresponds to different types of HTML elements or
   * components that can be used within the designer. You can see a full list of supported elements in our
   * designer extensions typing file.
   * @example
   * ```ts
   * const allElements = await webflow.getAllElements()
   * const paragraphs = allElements.flatMap(el => el.type === 'Paragraph' ? [el] : [])
   * paragraphs.forEach(el => {
   *   el.setTextContent('Hello')
   *   el.save()
   * })
   * ```
   */
  getAllElements(): Promise<Array<AnyElement>>;

  /**
   * Creates a new style with the provided name.
   * @param name - The name for the new style
   * @param options - Options for the new style. An object containing the following properties:
   * - parent: A Style object representing the parent style block. Used for creating a combo class.
   * @returns a Promise that resolves to the Style object representing the newly created style.
   * @example
   * ```ts
   * const newStyle = await webflow.createStyle('myNewStyle');
   * console.log('New style created:', newStyle.id);
   *
   * const comboClass = await webflow.createStyle('myNewStyle', {parent: newStyle});
   * console.log('New combo class created: ', comboClass.id);
   * ```
   */
  createStyle(name: string, options?: {parent?: Style}): Promise<Style>;
  /**
   * Fetch a style by its name or path.
   * @param nameOrPath - The name or path of the style to retrieve.
   * @returns A Promise that resolves to one of the following:
   * - null if no style with the given name is found.
   * - Style object representing the style with the specified name.
   * @example
   * ```ts
   * // Get a style by name
   * const styleName = 'myStyle';
   * const style = await webflow.getStyleByName(styleName);
   * if (style) {
   *   // Style found, handle it
   * } else {
   *   // Style not found
   * }
   *
   * // Get a nested style by path
   * const stylePath = ['parent', 'child'];
   * const style = await webflow.getStyleByName(stylePath);
   * if (style) {
   *   // Style found, handle it
   * } else {
   *   // Style not found
   * }
   *```
   */
  getStyleByName(nameOrPath: string | string[]): Promise<null | Style>;
  /**
   * Fetch an array of all styles available in the Webflow project.
   * @returns A Promise that resolves to an array of Style objects representing all the styles present on the
   * site that is open in the Designer.
   * @example
   * ```ts
   * const allStyles = await webflow.getAllStyles();
   * allStyles.forEach((style) => {
   *   // Process each style
   * });
   * ```
   */
  getAllStyles(): Promise<Array<Style>>;
  /**
   * Fetch an array of all pages and folders in the Webflow project.
   * @returns A Promise that resolves to an array of Page and Folder objects representing all the pages
   * and folders of the site that is open in the Designer.
   * @example
   * ```ts
   * const items = await webflow.getAllPagesAndFolders();
   * items.forEach((item) => {
   *   // Process each page or folder
   * });
   * ```
   */
  getAllPagesAndFolders(): Promise<Array<Page | Folder>>;
  /**
   * Create a new page folder within the current Webflow project.
   * @returns A Promise that resolves to a Folder object representing a newly created folder for the site open in
   * the Designer.
   * @example
   * ```ts
   * const newFolder = await webflow.createPageFolder();
   * // Handle the new folder
   * ```
   */
  createPageFolder(): Promise<Folder>;
  /**
   * Create a new Page within the current Webflow project.
   * @returns A Promise that resolves to a Page object representing a newly created page for the site open in the Designer.
   * @example
   * ```ts
   * const newPage = await webflow.createPage();
   * // Handle the new page
   * ```
   */
  createPage(): Promise<Page>;
  /**
   * Access the default variable collection.
   * @returns A Promise that resolves into a Collection.
   * @example
   * ```ts
   * const collection = webflow.getDefaultVariableCollection();
   * // This collection object can now be used to create variables or access variables within it
   * const variable = collection.getVariableByName('Space Cadet');
   * ```
   */
  getDefaultVariableCollection(): Promise<null | VariableCollection>;
  /**
   * Creates a new variable collection.
   * @param name - The name of the new variable collection.
   * @returns A Promise that resolves into a newly created Collection.
   * @example
   * ```ts
   * const collection = await webflow.createVariableCollection('My New Collection');
   * ```
   */
  createVariableCollection(name: string): Promise<VariableCollection>;

  /**
   * Fetches a variable collection by its id.
   * @param id - The id of the variable collection to fetch.
   * @returns A Promise that resolves into a Collection.
   * @example
   * ```ts
   * const collection = await webflow.getVariableCollectionById('collectionId');
   * ```
   */
  getVariableCollectionById(
    id: VariableCollectionId
  ): Promise<VariableCollection | null>;

  /**
   * Fetches all variable collections.
   * @returns A Promise that resolves to an array of Collection objects.
   * @example
   * ```ts
   * const collections = await webflow.getAllVariableCollections();
   * ```
   */
  getAllVariableCollections(): Promise<Array<VariableCollection>>;

  /**
   * Removes the variable collection.
   * @returns A Promise that resolves into a boolean indicating whether deleting the variable collection was successful.
   * @example
   * ```ts
   * const collection = await webflow.removeVariableCollection('collectionId');
   * ```
   */
  removeVariableCollection(id: VariableCollectionId): Promise<boolean>;

  getIdToken(): Promise<string>;
  getAppSubscriptions(): Promise<Array<AppSubscription>>;
  elementPresets: ElementPresets;
  /**
   * Removes the Style from the site.
   * @example
   * ```ts
   * await webflow.removeStyle(style);
   * ```
   */
  removeStyle(style: Style): Promise<null>;

  /**
   * Create a new asset, associated with the site
   * @example
   * ```ts
   * const fileBlob = new File([blob], 'cat.png', { type: 'image/png' });
   * const asset = await webflow.createAsset(fileBlob);
   * ```
   */
  createAsset(fileBlob: File): Promise<Asset>;

  /**
   * Gets an asset by its id
   * @example
   * ```ts
   * const asset = await webflow.getAssetById('1234');
   * ```
   * @param id
   */
  getAssetById(id: AssetId): Promise<null | Asset>;

  /**
   * Gets all assets for the site
   * @example
   * ```ts
   * const assets = await webflow.getAllAssets();
   * ```
   */
  getAllAssets(): Promise<Array<Asset>>;

  /**
   * Gets all asset folders for the site
   * @example
   * ```ts
   * const assetFolders = await webflow.getAssetFolders();
   * console.log('Asset folders:', assetFolders);
   * ```
   * @returns A Promise that resolves to an array of AssetFolder objects
   */
  getAllAssetFolders(): Promise<Array<AssetFolder>>;

  /**
   * Creates a new asset folder within a given site
   * @param name - The name of the new asset folder.
   * @param parentFolderId - Optional. The ID of the parent folder. If not provided, the folder will be created at the root level.
   * @returns A Promise that resolves to the newly created AssetFolder object.
   * @example
   * ```ts
   * const newFolder = await webflow.createAssetFolder('My New Folder');
   * console.log('New folder created:', newFolder.id);
   * ```
   */
  createAssetFolder(
    name: string,
    parentFolderId?: string
  ): Promise<AssetFolder>;
}

interface DesignerOnlyApi {
  /**
   * Get the currently selected element in the Webflow Designer.
   * @returns A promise that resolves to one of the following:
   * - null: If no element is currently selected in the Designer
   * - AnyElement: an object representing the selected element, which can be of any type.
   * @example
   * ```ts
   * const selectedElement = await webflow.getSelectedElement();
   * if (selectedElement) {
   *   // Handle the selected element
   * } else {
   *   // No element is currently selected
   * }
   * ```
   */
  getSelectedElement(): Promise<null | AnyElement>;
  /**
   * Sets the currently selected element in the Webflow Designer.
   * @returns A promise that resolves to one of the following:
   * - null: If no element is able to be currently selected in the Designer
   * - AnyElement: an object representing the selected element, which can be of any type.
   * @example
   * ```ts
   * await webflow.setSelectedElement(element);
   * ```
   */
  setSelectedElement(element: AnyElement): Promise<null | AnyElement>;
  /**
   * Captures a screenshot of the specified element.
   * @returns A promise that resolves to a base64 string representing the screenshot of the element.
   * @example
   * ```ts
   * const selectedElement = await webflow.getSelectedElement();
   * if (selectedElement) {
   *   const screenshot = await webflow.getElementSnapshot(selectedElement);
   *   console.log('Screenshot:', screenshot);
   * }else{
   *   console.log('No element selected');
   * }
   * ```
   */
  getElementSnapshot(element: AnyElement): Promise<null | string>;
  /**
   * Get the current media query breakpoint ID.
   * @returns A Promise that resolves to a BreakpointId which is a string representing the current media query
   * breakpoint. A BreakpointId is one of 'tiny', 'small', 'medium', 'main', 'large', 'xl', 'xxl'.
   * @example
   * ```ts
   * const breakpoint = await webflow.getMediaQuery();
   * console.log('Current Media Query:', breakpoint);
   * ```
   */
  getMediaQuery(): Promise<BreakpointId>;
  /**
   * Get the current pseudo mode.
   * @returns A Promise that resolves to a PseudoStateKey which is a string representing the current pseudo mode.
   * @example
   * ```ts
   * const pseudoMode = await webflow.getPseudoMode();
   * console.log('Current Pseudo Mode:', pseudoMode);
   * ```
   */
  getPseudoMode(): Promise<null | PseudoStateKey>;
  /**
   * Fetch the currently active page in the Webflow designer.
   * @returns A Promise that resolves to a Page object representing the current page open in the Designer.
   * @example
   * ```ts
   * const currentPage = await webflow.getCurrentPage();
   * console.log('Current Page:', currentPage);
   * ```
   */
  getCurrentPage(): Promise<Page>;
  /**
   * @param page - The Page object representing the target page to switch to.
   * @returns A Promise that resolves when the page switch is successful.
   * @example
   * ```ts
   * const targetPage = <Get the target page>;
   * await webflow.switchPage(targetPage);
   * // Page switched successfully
   * ```
   */
  switchPage(page: Page): Promise<null>;
  /**
   * Sets the extension size to one of predefined sizes or a custom size. If the specified custom size is larger than
   * the user's viewport size, the extension will default to the width/height of the browser's viewport.
   * @param size - The size to set the extension window to. One of 'default', 'comfortable', 'large', or an object
   * containing width and height keys.
   * @example
   * ```ts
   * await webflow.setExtensionSize("large") ;
   * // Perform actions for large window
   *
   * await webflow.setExtensionSize({width: 1000, height: 700}) ;
   * //Perform actions for this window size
   * ```
   */
  setExtensionSize(
    size:
      | 'default'
      | 'compact'
      | 'comfortable'
      | 'large'
      | {width: number; height: number}
  ): Promise<null>;
  /**
   * Notifies the user with a message using a specific style. Error messages provide user's with the opportunity to
   * close the Designer Extension.
   * @param opts - An object containing the following notification options:
   * - type: The type of notification to display. One of 'Error', 'Info', 'Success', 'Warning'.
   * - message: The message to display in the notification.
   * - dismissAfter: (optional) Number of milliseconds after which the notification will be auto-dismissed. If not provided, uses default 4000ms.
   * @returns A Promise that resolves when the notification is displayed to the user.
   * @example
   * ```ts
   * webflow.notify({ type: 'Info', message: 'Great work!' }); // General notification
   * webflow.notify({ type: 'Error', message: 'Something went wrong, try again!' }); // Error notification
   * webflow.notify({ type: 'Success', message: 'Successfully did something!' }); // Success notification
   * webflow.notify({ type: 'Warning', message: 'Something is not right, please check again!' }); // Warning notification
   * webflow.notify({ type: 'Error', message: 'Something went wrong!', dismissAfter: 5000 }); // Error notification with custom dismiss
   * ```
   */
  notify(opts: {
    type: 'Error' | 'Info' | 'Success' | 'Warning';
    message: string;
    dismissAfter?: number;
  }): Promise<void>;
  /**
   * Allows you to register your custom functions (callbacks) to be executed when certain events happen. This event
   * includes detecting a new Selected Element: You can subscribe to the 'selectedelement' event to be notified whenever a
   * different element is selected in the Webflow designer. This is useful if you want to perform specific actions or
   * updates based on the currently selected element. A null element signifies that no element is selected.
   * @param event - The name of the event to subscribe to, specifically 'selectedelement'.
   * @param callback - A callback function that will be invoked when the subscribed event is triggered. The specific
   * parameters passed to the callback depend on the event.
   * @returns An Unsubscribe function that can be used to unsubscribe from the event and stop receiving notifications.
   * @example
   * ```ts
   * // Subscribe to changes in the selected element
   * const selectedElementCallback = (element) => {
   *   if (element) {
   *     console.log('Selected Element:', element);
   *   } else {
   *     console.log('No element is currently selected.');
   *   }
   * };
   *
   * const unsubscribeSelectedElement = webflow.subscribe('selectedelement', selectedElementCallback);
   * ```
   */
  subscribe(
    event: 'selectedelement',
    callback: (element: null | AnyElement) => void
  ): Unsubscribe;
  /**
   * Allows you to register your custom functions (callbacks) to be executed when certain events happen. This event
   * includes detecting a Breakpoint Change: Use the ‘mediaquery’ event to stay informed as the designer switches between
   * breakpoints for desktops, tablets, or smartphones.
   * @param event - The name of the event to subscribe to, specifically 'mediaquery'.
   * @param callback - A callback function that will be invoked when the subscribed event is triggered. The specific
   * parameters passed to the callback depend on the event.
   * @returns An Unsubscribe function that can be used to unsubscribe from the event and stop receiving notifications.
   * @example
   * ```ts
   * // Subscribe to changes in the media query breakpoint
   * const mediaQueryCallback = (breakpoint) => {
   *   console.log('Media Query Breakpoint:', breakpoint);
   * };
   *
   * const unsubscribeMediaQuery = webflow.subscribe('mediaquery', mediaQueryCallback);
   * ```
   */
  subscribe(
    event: 'mediaquery',
    callback: (breakpoint: BreakpointId) => void
  ): Unsubscribe;
  /**
   * Allows you to register your custom functions (callbacks) to be executed when certain events happen. This event
   * includes detecting a Page Change: The 'currentpage' event allows you to respond when the user switches to a different
   * page in the Webflow designer. This can be handy if you want to load additional data or perform actions
   * specific to the selected page.
   * @param event - The name of the event to subscribe to, specifically 'currentpage'.
   * @param callback - A callback function that will be invoked when the subscribed event is triggered. The specific
   * parameters passed to the callback depend on the event.
   * @returns An Unsubscribe function that can be used to unsubscribe from the event and stop receiving notifications.
   * @example
   * ```ts
   * // Subscribe to changes in the currently active page
   * const currentPageCallback = (page) => {
   *   console.log('Current Page:', page);
   * };
   *
   * const unsubscribeCurrentPage = webflow.subscribe('currentpage', currentPageCallback);
   * ```
   */
  subscribe(event: 'currentpage', callback: (page: Page) => void): Unsubscribe;
  /**
   * Allows you to register your custom functions (callbacks) to be executed when certain events happen. This event
   * includes detecting a CMS Collection Item page change: The 'currentcmsitem' event allows you to respond when the user switches to a different
   * cms collection item page in the Webflow designer.
   * @param event - The name of the event to subscribe to, specifically 'currentcmsitem'.
   * @param callback - A callback function that will be invoked when the subscribed event is triggered. The current cms item id is passed to the callback.
   * @returns An Unsubscribe function that can be used to unsubscribe from the event and stop receiving notifications.
   * @example
   * ```ts
   * // Subscribe to changes in the currently active page
   * const currentCmsItemCallback = (cmsItemId) => {
   *   console.log('Cms item change', cmsItemId);
   * };
   *
   * const unsubscribeCurrentCmsItem = webflow.subscribe('currentcmsitem', currentCmsItemCallback);
   * ```
   */
  subscribe(
    event: 'currentcmsitem',
    callback: (cmsItemId: null | string) => void
  ): Unsubscribe;
  /**
   * Subscribe to app mode changes. The callback receives the current mode
   * and the full appModes capability map.
   * @param event - The name of the event to subscribe to, specifically 'currentappmode'.
   * @param callback - A callback function receiving the current AppModeChangeEvent.
   */
  subscribe(
    event: 'currentappmode',
    callback: (event: AppModeChangeEvent) => void
  ): Unsubscribe;
  subscribe(
    event: 'pseudomode',
    callback: (pseudoMode: null | PseudoStateKey) => void
  ): Unsubscribe;
  /**
   * Checks if the user has the ability to perform the given App Mode
   * @param appModes
   */
  canForAppMode(appModes: Array<AppMode>): Promise<{[key in AppMode]: boolean}>;
  /**
   * The list of App Modes that are available to be queried
   * ```ts
   * await canForAppMode([webflow.appModes.canDesign, webflow.appModes.canEdit]);
   * ```
   */
  appModes: {[key in AppMode]: AppMode};
  /**
   * Checks if the current Designer mode matches the given mode name.
   * @param mode - The mode name to check against (e.g., 'design', 'build', 'preview')
   * @returns True if the Designer is currently in the specified mode
   */
  isMode(mode: AppModeName): Promise<boolean>;
  /**
   * Gets the current Designer mode name.
   * @returns The current mode name, or null if the mode cannot be determined
   */
  getCurrentMode(): Promise<AppModeName | null>;
  /**
   * Closes the extension
   * ```ts
   * await webflow.closeExtension();
   * ```
   */
  closeExtension(): Promise<null>;
  /**
   * Gets the current App connection
   * ```ts
   * const appConnection = await webflow.getCurrentAppConnection();
   * ```
   */
  getCurrentAppConnection(): Promise<null | string>;
  /**
   * Gets the current App connection resource
   * ```ts
   * const appConnectionResource = await webflow.getCurrentAppConnectionResource();
   * ```
   */
  getCurrentAppConnectionResource(): Promise<null | AppConnectionResource>;
  /**
   * Gets the current App launch context (i.e how the app was launched)
   * ```ts
   * const launchContext = await webflow.getLaunchContext();
   * ```
   */
  getLaunchContext(): Promise<null | LaunchContext>;
}

interface WebflowApi extends SharedApi, DesignerOnlyApi {}

interface WebflowPageApi extends SharedApi {}

/**
 * Thrown when an API call fails because the Designer is in the wrong mode.
 * Use `err.cause.tag` to identify the error programmatically.
 * Use `err.message` for the human-readable description of what went wrong.
 */
interface AppModeForbiddenError extends Error {
  cause: {
    tag: 'ModeForbidden';
  };
}

type Unsubscribe = () => void;

interface OpenCanvasByComponentId {
  componentId: string;
}

interface OpenCanvasByPageId {
  pageId: string;
}
