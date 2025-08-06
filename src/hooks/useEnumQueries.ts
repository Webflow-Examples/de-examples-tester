import { useQueries } from '@tanstack/react-query'
import type { EnumQueryResult } from '../types/api-explorer.types'
import enumProviders, {
  hasEnumProvider,
  getProviderKey,
} from '../examples/enums'
import type {
  DynamicEnumValue,
  DynamicEnumProvider,
} from '../types/dynamic-enums'
import {
  STALE_TIME,
  CACHE_TIME,
  PARAMETER_DEPENDENCIES,
} from '../constants/api-explorer.constants'

export const useEnumQueries = (
  parameterTypes: string[],
  parameterNames: string[],
): EnumQueryResult[] => {
  return useQueries({
    queries: parameterTypes.map((paramType, index) => {
      const paramName = parameterNames[index]
      const dependency = PARAMETER_DEPENDENCIES[paramName]
      const isEnum = hasEnumProvider(paramType)

      // Skip non-enums, dependent parameters, and VariableInfo
      if (!isEnum || dependency || paramType === 'VariableInfo') {
        return {
          queryKey: ['enumValues', paramType, 'disabled'],
          queryFn: async () => null,
          enabled: false,
          data: null,
          isLoading: false,
          error: null,
        }
      }

      return {
        queryKey: ['enumValues', paramType],
        queryFn: async () => {
          const provider = enumProviders[getProviderKey(paramType)]
          return (provider as DynamicEnumProvider<DynamicEnumValue>).getAll()
        },
        enabled: true,
        staleTime: STALE_TIME,
        cacheTime: CACHE_TIME,
      }
    }),
  })
}
