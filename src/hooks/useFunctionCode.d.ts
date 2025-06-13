export interface UseFunctionCodeResult {
  functionCode: string
  parameterNames: string[]
  parameterTypes: string[]
  functionParameters: Record<string, string>
  setParameterNames: (names: string[]) => void
  setFunctionParameters: (params: Record<string, string>) => void
}

export function useFunctionCode(
  selectedFunctionName: string,
  selectedExampleCategory: string,
): UseFunctionCodeResult
