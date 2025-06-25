// Base interface for all dynamic enum values
export interface DynamicEnumValue {
  id: string
  name: string
  type?: string
  data: any // The actual data object (collection, variable, asset, etc.)
}

// Interface for dynamic enum providers
export interface DynamicEnumProvider<T extends DynamicEnumValue> {
  getAll: () => Promise<T[]>
  getByName?: (name: string) => Promise<T | undefined>
  getById?: (id: string) => Promise<T | undefined>
}

// Generic function to create a dynamic enum map
export async function createDynamicEnumMap<T extends DynamicEnumValue>(
  items: any[],
  transform: (item: any) => Promise<T>,
): Promise<Record<string, T>> {
  const enumMap: Record<string, T> = {}
  await Promise.all(
    items.map(async (item) => {
      const enumValue = await transform(item)
      enumMap[enumValue.name] = enumValue
    }),
  )
  return enumMap
}

// Type guards
export function isDynamicEnumValue(value: any): value is DynamicEnumValue {
  return (
    value &&
    typeof value === 'object' &&
    'id' in value &&
    'name' in value &&
    'data' in value
  )
}

// Specific interfaces for different enum types
export interface VariableCollectionInfo extends DynamicEnumValue {
  data: any // Replace with proper Webflow collection type
}

export interface VariableInfo extends DynamicEnumValue {
  data: any // Replace with proper Webflow variable type
  collectionId: string
}

export interface ComponentInfo extends DynamicEnumValue {
  data: any // Replace with proper Webflow component type
}

export interface PageInfo extends DynamicEnumValue {
  data: any // Replace with proper Webflow page type
}

export interface AssetInfo extends DynamicEnumValue {
  data: any // Replace with proper Webflow asset type
}

export interface StyleInfo extends DynamicEnumValue {
  data: any // Replace with proper Webflow style type
}

// Type guards for specific types
export function isVariableCollectionInfo(
  value: any,
): value is VariableCollectionInfo {
  return isDynamicEnumValue(value) && value.data && 'collection' in value.data
}

export function isVariableInfo(value: any): value is VariableInfo {
  return (
    isDynamicEnumValue(value) &&
    value.data &&
    'variable' in value.data &&
    'collectionId' in value
  )
}

export function isComponentInfo(value: any): value is ComponentInfo {
  return isDynamicEnumValue(value) && value.data && 'component' in value.data
}

export function isPageInfo(value: any): value is PageInfo {
  return isDynamicEnumValue(value) && value.data && 'page' in value.data
}

export function isAssetInfo(value: any): value is AssetInfo {
  return isDynamicEnumValue(value) && value.data && 'asset' in value.data
}

export function isStyleInfo(value: any): value is StyleInfo {
  return isDynamicEnumValue(value) && value.data && 'style' in value.data
}
