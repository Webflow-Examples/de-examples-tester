import { ValidFileTypesEnum } from './assets'
import { ExtensionSizeEnum } from './utilities'
import type {
  DynamicEnumProvider,
  DynamicEnumValue,
  ObjectSelector,
} from '../types/dynamic-enums'
import { assetsProvider, getAssetsObjectSelector } from './assets'
import {
  collectionsProvider,
  variablesProvider,
  getVariableCollectionsObjectSelector,
  getVariablesObjectSelector,
} from './variables'
import { stylesProvider, getStylesObjectSelector } from './styles'

// Convert static enum to DynamicEnumValue array
function createStaticEnumProvider<T extends { [key: string]: string }>(
  enumObj: T,
): DynamicEnumProvider<DynamicEnumValue> {
  return {
    getAll: async () =>
      Object.entries(enumObj).map(([key, value]) => ({
        id: value,
        name: key.replace(/([A-Z])/g, ' $1').trim(), // Format enum key for display
        data: { value },
      })),
  }
}

// NEW: Convert static enum to ObjectSelector array
function createStaticObjectSelector<T extends { [key: string]: string }>(
  enumObj: T,
): ObjectSelector<string> {
  return {
    getAll: async () =>
      Object.entries(enumObj).map(([key, value]) => ({
        id: value,
        name: key.replace(/([A-Z])/g, ' $1').trim(), // Format enum key for display
        object: value,
      })),
    getByName: async (name: string) => {
      const entry = Object.entries(enumObj).find(
        ([key]) => key.replace(/([A-Z])/g, ' $1').trim() === name,
      )
      return entry ? entry[1] : undefined
    },
    getById: async (id: string) => {
      return Object.values(enumObj).includes(id) ? id : undefined
    },
  }
}

// Registry of all enum providers
export const enumProviders = {
  // Static enums
  ValidFileTypesEnum: createStaticEnumProvider(ValidFileTypesEnum),
  ExtensionSizeEnum: createStaticEnumProvider(ExtensionSizeEnum),
  fileTypeEnum: createStaticEnumProvider(ValidFileTypesEnum), // Keep for backward compatibility
  extensionSizeEnum: createStaticEnumProvider(ExtensionSizeEnum), // Keep for backward compatibility

  // Dynamic types (keeping old providers for backward compatibility)
  AssetInfo: assetsProvider,
  VariableCollectionInfo: collectionsProvider,
  VariableInfo: variablesProvider,
  StyleInfo: stylesProvider,
} as const

// NEW: Registry of object selectors for actual objects
// Use function references to avoid creating new objects on every render
export const objectSelectors = {
  // Static enums
  ValidFileTypesEnum: createStaticObjectSelector(ValidFileTypesEnum),
  ExtensionSizeEnum: createStaticObjectSelector(ExtensionSizeEnum),
  fileTypeEnum: createStaticObjectSelector(ValidFileTypesEnum),
  extensionSizeEnum: createStaticObjectSelector(ExtensionSizeEnum),

  // Dynamic types that return actual objects - use function references
  Asset: getAssetsObjectSelector,
  Style: getStylesObjectSelector,
  VariableCollection: getVariableCollectionsObjectSelector,
  Variable: getVariablesObjectSelector,
  // VariableMode is handled specially in useEnumQueries since it requires a collectionId parameter
} as const

// Export the type of the enum providers object
export type EnumProviderType = keyof typeof enumProviders
export type ObjectSelectorType = keyof typeof objectSelectors

// Helper to check if a type has a provider
export function hasEnumProvider(type: string): type is EnumProviderType {
  // Normalize the type name to match our provider keys
  const normalizedType = type.replace(/Enum$/, '')
  return normalizedType in enumProviders || type in enumProviders
}

// NEW: Helper to check if a type has an object selector
export function hasObjectSelector(type: string): type is ObjectSelectorType {
  // Normalize the type name to match our selector keys
  const normalizedType = type.replace(/Enum$/, '')
  return normalizedType in objectSelectors || type in objectSelectors
}

// Helper to get the correct provider key for a type
export function getProviderKey(type: string): EnumProviderType {
  if (type in enumProviders) {
    return type as EnumProviderType
  }
  // Try without the Enum suffix
  const normalizedType = type.replace(/Enum$/, '')
  if (normalizedType in enumProviders) {
    return normalizedType as EnumProviderType
  }
  throw new Error(`No provider found for type: ${type}`)
}

// NEW: Helper to get the correct object selector key for a type
export function getObjectSelectorKey(type: string): ObjectSelectorType {
  if (type in objectSelectors) {
    return type as ObjectSelectorType
  }
  // Try without the Enum suffix
  const normalizedType = type.replace(/Enum$/, '')
  if (normalizedType in objectSelectors) {
    return normalizedType as ObjectSelectorType
  }
  throw new Error(`No object selector found for type: ${type}`)
}

export default enumProviders
