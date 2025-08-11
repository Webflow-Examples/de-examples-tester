// Types for variable collections
export interface VariableCollectionInfo {
  id: string
  name: string
  collection: any // Replace 'any' with proper Webflow type if available
}

export interface DynamicEnumValue {
  id: string
  name: string
  [key: string]: any
}

// Type guard to check if a value is a VariableCollectionInfo
export function isVariableCollectionInfo(
  value: any,
): value is VariableCollectionInfo {
  return (
    value &&
    typeof value === 'object' &&
    'id' in value &&
    'name' in value &&
    'collection' in value
  )
}
