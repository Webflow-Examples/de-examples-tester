// permissionsMap.ts
export type Permission =
  | 'canAccessAssets'
  | 'canManageAssets'
  | 'canDEAccessCanvas'
  | 'canDEModifyComponents'
  | 'canDEDesign'
  | 'canModifyImageElements'
  | 'canDECreateComponents'
  | 'canDECreateStyleBlocks'
  | 'canDEModifyStyleBlocks'
  | 'canEdit'
  | 'canDEReadPageSettings'
  | 'canDEManagePageSettings'
  | 'canDECreatePage'
  | 'canDEReadVariables'
  | 'canDEModifyVariables'

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
  },

  // Components
  Component: {
    getName: { permissions: ['canDEAccessCanvas'] },
    setName: { permissions: ['canDEModifyComponents'] },
    getRootElement: { permissions: ['canDEAccessCanvas'] },
  },

  // Elements
  Element: {
    append: { permissions: ['canDEDesign'] },
    prepend: { permissions: ['canDEDesign'] },
    before: { permissions: ['canDEDesign'] },
    after: { permissions: ['canDEDesign'] },
    getCustomAttribute: { permissions: ['canDEAccessCanvas'] },
    getAllCustomAttributes: { permissions: ['canDEAccessCanvas'] },
    setCustomAttribute: { permissions: ['canDEDesign'] },
    removeCustomAttribute: { permissions: ['canDEDesign'] },
    getElementChildren: { permissions: ['canDEAccessCanvas'] },
    getDomId: { permissions: ['canDEAccessCanvas'] },
    setDomId: { permissions: ['canDEDesign'] },
    setTextContent: { permissions: ['canEdit'] },
    getStyles: { permissions: ['canDEAccessCanvas'] },
    setStyles: { permissions: ['canDEDesign'] },
    getTag: { permissions: ['canDEAccessCanvas'] },
    setTag: { permissions: ['canDEDesign'] },
    getAttribute: { permissions: ['canDEAccessCanvas'] },
    setAttribute: { permissions: ['canDEDesign'] },
    getAllAttributes: { permissions: ['canDEAccessCanvas'] },
    removeAttribute: { permissions: ['canDEDesign'] },
    getText: { permissions: ['canDEAccessCanvas'] },
    setText: { permissions: ['canEdit'] },
    getHeadingLevel: { permissions: ['canDEAccessCanvas'] },
    setHeadingLevel: { permissions: ['canEdit'] },
  },

  // Image Elements
  ImageElement: {
    getAltText: { permissions: ['canDEAccessCanvas'] },
    setAltText: { permissions: ['canModifyImageElements'] },
    getAsset: { permissions: ['canDEAccessCanvas'] },
    setAsset: { permissions: ['canModifyImageElements'] },
  },

  // Component Elements
  ComponentElement: {
    getComponent: { permissions: ['canDEAccessCanvas'] },
  },

  // Styles
  Style: {
    getName: { permissions: ['canDEAccessCanvas'] },
    getProperties: { permissions: ['canDEAccessCanvas'] },
    getProperty: { permissions: ['canDEAccessCanvas'] },
    setProperties: { permissions: ['canDEModifyStyleBlocks'] },
    setProperty: { permissions: ['canDEModifyStyleBlocks'] },
    removeAllProperties: { permissions: ['canDEModifyStyleBlocks'] },
    removeProperty: { permissions: ['canDEModifyStyleBlocks'] },
    removeProperties: { permissions: ['canDEModifyStyleBlocks'] },
  },

  // Pages
  Page: {
    getKind: { permissions: ['canDEReadPageSettings'] },
    getName: { permissions: ['canDEReadPageSettings'] },
    setName: { permissions: ['canDEManagePageSettings'] },
    getSlug: { permissions: ['canDEReadPageSettings'] },
    setSlug: { permissions: ['canDEManagePageSettings'] },
    getPublishPath: { permissions: ['canDEReadPageSettings'] },
    getTitle: { permissions: ['canDEReadPageSettings'] },
    setTitle: { permissions: ['canDEManagePageSettings'] },
    getDescription: { permissions: ['canDEReadPageSettings'] },
    setDescription: { permissions: ['canDEManagePageSettings'] },
    getCollectionId: { permissions: ['canDEReadPageSettings'] },
    getCollectionName: { permissions: ['canDEReadPageSettings'] },
    isDraft: { permissions: ['canDEReadPageSettings'] },
    setDraft: { permissions: ['canDEManagePageSettings'] },
    isPasswordProtected: { permissions: ['canDEReadPageSettings'] },
    getUtilityPageKey: { permissions: ['canDEReadPageSettings'] },
    isHomepage: { permissions: ['canDEReadPageSettings'] },
    usesTitleAsOpenGraphTitle: { permissions: ['canDEReadPageSettings'] },
    setOpenGraphTitle: { permissions: ['canDEManagePageSettings'] },
    usesDescriptionAsOpenGraphDescription: {
      permissions: ['canDEReadPageSettings'],
    },
    setOpenGraphDescription: { permissions: ['canDEManagePageSettings'] },
    getOpenGraphImage: { permissions: ['canDEReadPageSettings'] },
    setOpenGraphImage: { permissions: ['canDEManagePageSettings'] },
    isExcludedFromSearch: { permissions: ['canDEManagePageSettings'] },
    excludeFromSearch: { permissions: ['canDEManagePageSettings'] },
    usesTitleAsSearchTitle: { permissions: ['canDEManagePageSettings'] },
    setSearchTitle: { permissions: ['canDEManagePageSettings'] },
    usesDescriptionAsSearchDescription: {
      permissions: ['canDEManagePageSettings'],
    },
    setSearchDescription: { permissions: ['canDEManagePageSettings'] },
    usesOpenGraphImageAsSearchImage: {
      permissions: ['canDEManagePageSettings'],
    },
    setSearchImage: { permissions: ['canDEManagePageSettings'] },
  },

  // Variables
  Variable: {
    remove: { permissions: ['canDEModifyVariables'] },
    set: { permissions: ['canDEModifyVariables'] },
    get: { permissions: ['canDEReadVariables'] },
    setName: { permissions: ['canDEModifyVariables'] },
    getName: { permissions: ['canDEReadVariables'] },
  },

  Collection: {
    getName: { permissions: ['canDEReadVariables'] },
    getAllVariables: { permissions: ['canDEReadVariables'] },
    getVariable: { permissions: ['canDEReadVariables'] },
    getVariableByName: { permissions: ['canDEReadVariables'] },
    createColorVariable: { permissions: ['canDEModifyVariables'] },
    createSizeVariable: { permissions: ['canDEModifyVariables'] },
    createFontFamilyVariable: { permissions: ['canDEModifyVariables'] },
  },

  // Webflow-specific actions
  webflow: {
    createAsset: { permissions: ['canManageAssets'] },
    getAllAssets: { permissions: ['canAccessAssets'] },
    registerComponent: { permissions: ['canDECreateComponents'] },
    unregisterComponent: { permissions: ['canDECreateComponents'] },
    getAllComponents: { permissions: ['canDEAccessCanvas'] },
    enterComponent: { permissions: ['canDEModifyComponents'] },
    exitComponent: { permissions: ['canDEAccessCanvas'] },
    elementBuilder: { permissions: ['canDEDesign'] },
    getSelectedElement: { permissions: ['canDEAccessCanvas'] },
    setSelectedElement: { permissions: ['canDEAccessCanvas'] },
    getAllElements: { permissions: ['canDEAccessCanvas'] },
    getRootElement: { permissions: ['canDEAccessCanvas'] },
    remove: { permissions: ['canDEDesign'] },
    createStyle: { permissions: ['canDECreateStyleBlocks'] },
    removeStyle: { permissions: ['canDEModifyStyleBlocks'] },
    getStyleByName: { permissions: ['canDEAccessCanvas'] },
    getAllStyles: { permissions: ['canDEAccessCanvas'] },
    createPage: { permissions: ['canDECreatePage'] },
    createPageFolder: { permissions: ['canDECreatePage'] },
    getCurrentPage: { permissions: ['canDEReadPageSettings'] },
    getAllPagesAndFolders: { permissions: ['canDEReadPageSettings'] },
    switchPage: { permissions: ['canDEAccessCanvas'] },
    getDefaultVariableCollection: { permissions: ['canDEReadVariables'] },
  },
}
