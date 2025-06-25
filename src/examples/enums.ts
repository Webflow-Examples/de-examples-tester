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
        id: key,
        name: key,
        data: { value },
      })),
  }
}

// Registry of all enum providers
export const enumProviders = {
  // Static enums
  fileTypeEnum: createStaticEnumProvider(ValidFileTypesEnum),
  extensionSizeEnum: createStaticEnumProvider(ExtensionSizeEnum),

  // Dynamic types
  AssetInfo: assetsProvider,
  VariableCollectionInfo: collectionsProvider,
  VariableInfo: variablesProvider,
} as const

// Export the type of the enum providers object
export type EnumProviderType = keyof typeof enumProviders

// Helper to check if a type has a provider
export function hasEnumProvider(type: string): type is EnumProviderType {
  return type in enumProviders
}

export default enumProviders
