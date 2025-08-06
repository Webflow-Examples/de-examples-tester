import type {
  DynamicEnumValue,
  DynamicEnumProvider,
  VariableInfo,
} from './dynamic-enums'

export interface ParameterMap {
  [key: string]: any
}

export interface FunctionSelection {
  value: string
  label: string
  subcategories?: Array<{
    value: string
    label: string
  }>
}

export interface CategoryOption {
  value: string
  label: string
}

export interface MethodDescriptions {
  [category: string]: {
    [functionName: string]: string
  }
}

export interface ParameterDependency {
  dependsOn: string
}

export interface ParameterDependencies {
  [key: string]: ParameterDependency
}

export interface APIConsole {
  log: (...args: any[]) => void
  error: (...args: any[]) => void
  warn: (...args: any[]) => void
  info: (...args: any[]) => void
}

export interface EnumQueryResult {
  data: DynamicEnumValue[] | null
  isLoading: boolean
  error: Error | null
}

export interface ParameterInputProps {
  name: string
  value: any
  onChange: (name: string, value: any) => void
  inputType: string
  options: any[]
  isDynamicEnum: boolean
  placeholder: string
  disabled: boolean
  loading: boolean
}
