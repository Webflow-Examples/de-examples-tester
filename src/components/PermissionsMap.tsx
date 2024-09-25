// permissionsMap.ts
export type Permission =
  | 'canAccessAssets'
  | 'canManageAssets'
  | 'canAccessCanvas'
  | 'canModifyComponents'
  | 'canDesign'
  | 'canModifyImageElements'
  | 'canCreateComponents'
  | 'canCreateStyles'
  | 'canModifyStyles'
  | 'canEdit'
  | 'canReadPageSettings'
  | 'canManagePageSettings'
  | 'canCreatePage'
  | 'canReadVariables'
  | 'canModifyVariables'

export interface Permissions {
  [key: string]: boolean // This maps each Permission to a boolean
}

interface MethodPermissions {
  permissions: Permission[]
}

interface PermissionsMap {
  [objectType: string]: {
    [methodName: string]: MethodPermissions
  }
}

export const permissionsMap: PermissionsMap = {
  // Assets
  Asset: {
    getUrl: { permissions: ['canAccessAssets'] },
    getAltText: { permissions: ['canAccessAssets'] },
    setAltText: { permissions: ['canManageAssets'] },
    getName: { permissions: ['canAccessAssets'] },
    getMimeType: { permissions: ['canAccessAssets'] },
    getAssetById: { permissions: ['canAccessAssets'] },
    createAsset: { permissions: ['canManageAssets'] },
    getAllAssets: { permissions: ['canAccessAssets'] },
  },

  // Components
  Component: {
    getName: { permissions: ['canAccessCanvas'] },
    setName: { permissions: ['canModifyComponents'] },
    getRootElement: { permissions: ['canAccessCanvas'] },
    registerComponent: { permissions: ['canCreateComponents'] },
    unregisterComponent: { permissions: ['canCreateComponents'] },
    getAllComponents: { permissions: ['canAccessCanvas'] },
    enterComponent: { permissions: ['canModifyComponents'] },
    exitComponent: { permissions: ['canAccessCanvas'] },
  },

  // Elements
  Element: {
    append: { permissions: ['canDesign'] },
    prepend: { permissions: ['canDesign'] },
    before: { permissions: ['canDesign'] },
    after: { permissions: ['canDesign'] },
    getCustomAttribute: { permissions: ['canAccessCanvas'] },
    getAllCustomAttributes: { permissions: ['canAccessCanvas'] },
    setCustomAttribute: { permissions: ['canDesign'] },
    removeCustomAttribute: { permissions: ['canDesign'] },
    getElementChildren: { permissions: ['canAccessCanvas'] },
    getDomId: { permissions: ['canAccessCanvas'] },
    setDomId: { permissions: ['canDesign'] },
    setTextContent: { permissions: ['canEdit'] },
    getStyles: { permissions: ['canAccessCanvas'] },
    setStyles: { permissions: ['canDesign'] },
    getTag: { permissions: ['canAccessCanvas'] },
    setTag: { permissions: ['canDesign'] },
    getAttribute: { permissions: ['canAccessCanvas'] },
    setAttribute: { permissions: ['canDesign'] },
    getAllAttributes: { permissions: ['canAccessCanvas'] },
    removeAttribute: { permissions: ['canDesign'] },
    getText: { permissions: ['canAccessCanvas'] },
    setText: { permissions: ['canEdit'] },
    getHeadingLevel: { permissions: ['canAccessCanvas'] },
    setHeadingLevel: { permissions: ['canEdit'] },
    elementBuilder: { permissions: ['canDesign'] },
    getSelectedElement: { permissions: ['canAccessCanvas'] },
    setSelectedElement: { permissions: ['canAccessCanvas'] },
    getAllElements: { permissions: ['canAccessCanvas'] },
    getRootElement: { permissions: ['canAccessCanvas'] },
    remove: { permissions: ['canDesign'] },
  },

  // Image Elements
  ImageElement: {
    getAltText: { permissions: ['canAccessCanvas'] },
    setAltText: { permissions: ['canModifyImageElements'] },
    getAsset: { permissions: ['canAccessCanvas'] },
    setAsset: { permissions: ['canModifyImageElements'] },
  },

  // Component Elements
  ComponentElement: {
    getComponent: { permissions: ['canAccessCanvas'] },
  },

  // Styles
  Style: {
    getName: { permissions: ['canAccessCanvas'] },
    getProperties: { permissions: ['canAccessCanvas'] },
    getProperty: { permissions: ['canAccessCanvas'] },
    setProperties: { permissions: ['canModifyStyles'] },
    setProperty: { permissions: ['canModifyStyles'] },
    removeAllProperties: { permissions: ['canModifyStyles'] },
    removeProperty: { permissions: ['canModifyStyles'] },
    removeProperties: { permissions: ['canModifyStyles'] },
    createStyle: { permissions: ['canCreateStyles'] },
    removeStyle: { permissions: ['canModifyStyles'] },
    getStyleByName: { permissions: ['canAccessCanvas'] },
    getAllStyles: { permissions: ['canAccessCanvas'] },
  },

  // Pages
  Page: {
    getKind: { permissions: ['canReadPageSettings'] },
    getName: { permissions: ['canReadPageSettings'] },
    setName: { permissions: ['canManagePageSettings'] },
    getSlug: { permissions: ['canReadPageSettings'] },
    setSlug: { permissions: ['canManagePageSettings'] },
    getPublishPath: { permissions: ['canReadPageSettings'] },
    getTitle: { permissions: ['canReadPageSettings'] },
    setTitle: { permissions: ['canManagePageSettings'] },
    getDescription: { permissions: ['canReadPageSettings'] },
    setDescription: { permissions: ['canManagePageSettings'] },
    getCollectionId: { permissions: ['canReadPageSettings'] },
    getCollectionName: { permissions: ['canReadPageSettings'] },
    isDraft: { permissions: ['canReadPageSettings'] },
    setDraft: { permissions: ['canManagePageSettings'] },
    isPasswordProtected: { permissions: ['canReadPageSettings'] },
    getUtilityPageKey: { permissions: ['canReadPageSettings'] },
    isHomepage: { permissions: ['canReadPageSettings'] },
    usesTitleAsOpenGraphTitle: { permissions: ['canReadPageSettings'] },
    setOpenGraphTitle: { permissions: ['canManagePageSettings'] },
    usesDescriptionAsOpenGraphDescription: {
      permissions: ['canReadPageSettings'],
    },
    setOpenGraphDescription: { permissions: ['canManagePageSettings'] },
    getOpenGraphImage: { permissions: ['canReadPageSettings'] },
    setOpenGraphImage: { permissions: ['canManagePageSettings'] },
    isExcludedFromSearch: { permissions: ['canManagePageSettings'] },
    excludeFromSearch: { permissions: ['canManagePageSettings'] },
    usesTitleAsSearchTitle: { permissions: ['canManagePageSettings'] },
    setSearchTitle: { permissions: ['canManagePageSettings'] },
    usesDescriptionAsSearchDescription: {
      permissions: ['canManagePageSettings'],
    },
    setSearchDescription: { permissions: ['canManagePageSettings'] },
    usesOpenGraphImageAsSearchImage: {
      permissions: ['canManagePageSettings'],
    },
    setSearchImage: { permissions: ['canManagePageSettings'] },
    createPage: { permissions: ['canCreatePage'] },
    createPageFolder: { permissions: ['canCreatePage'] },
    getCurrentPage: { permissions: ['canReadPageSettings'] },
    getAllPagesAndFolders: { permissions: ['canReadPageSettings'] },
    switchPage: { permissions: ['canAccessCanvas'] },
  },

  // Variables
  Variable: {
    remove: { permissions: ['canModifyVariables'] },
    set: { permissions: ['canModifyVariables'] },
    get: { permissions: ['canReadVariables'] },
    setName: { permissions: ['canModifyVariables'] },
    getName: { permissions: ['canReadVariables'] },
    getAllVariables: { permissions: ['canReadVariables'] },
    getVariable: { permissions: ['canReadVariables'] },
    getVariableByName: { permissions: ['canReadVariables'] },
    createColorVariable: { permissions: ['canModifyVariables'] },
    createSizeVariable: { permissions: ['canModifyVariables'] },
    createFontFamilyVariable: { permissions: ['canModifyVariables'] },
  },

  Collection: {
    getName: { permissions: ['canReadVariables'] },
    getDefaultVariableCollection: { permissions: ['canReadVariables'] },
  },

  // Webflow-specific actions
  webflow: {},
}
