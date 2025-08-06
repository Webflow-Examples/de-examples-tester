import { ValidFileTypesEnum } from './assets'
import { ExtensionSizeEnum } from './utilities'
import type {
  DynamicEnumProvider,
  DynamicEnumValue,
} from '../types/dynamic-enums'
import { assetsProvider } from './assets'
import { collectionsProvider, variablesProvider } from './variables'

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

// Registry of all enum providers
export const enumProviders = {
  // Static enums
  ValidFileTypesEnum: createStaticEnumProvider(ValidFileTypesEnum),
  ExtensionSizeEnum: createStaticEnumProvider(ExtensionSizeEnum),
  fileTypeEnum: createStaticEnumProvider(ValidFileTypesEnum), // Keep for backward compatibility
  extensionSizeEnum: createStaticEnumProvider(ExtensionSizeEnum), // Keep for backward compatibility

  // Dynamic types
  AssetInfo: assetsProvider,
  VariableCollectionInfo: collectionsProvider,
  VariableInfo: variablesProvider,
} as const

// Export the type of the enum providers object
export type EnumProviderType = keyof typeof enumProviders

// Helper to check if a type has a provider
export function hasEnumProvider(type: string): type is EnumProviderType {
  // Normalize the type name to match our provider keys
  const normalizedType = type.replace(/Enum$/, '')
  return normalizedType in enumProviders || type in enumProviders
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

export default enumProviders
