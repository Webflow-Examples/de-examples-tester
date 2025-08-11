import { useQueries } from '@tanstack/react-query'
import type { EnumQueryResult } from '../types/api-explorer.types'
import enumProviders, {
  hasEnumProvider,
  getProviderKey,
  hasObjectSelector,
  getObjectSelectorKey,
  objectSelectors,
} from '../examples/enums'
import { getVariableModeObjectSelector } from '../examples/variables'
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
  functionParameters?: Record<string, any>,
): EnumQueryResult[] => {
  return useQueries({
    queries: parameterTypes.map((paramType, index) => {
      const paramName = parameterNames[index]
      const dependency = PARAMETER_DEPENDENCIES[paramName]
      const isEnum = hasEnumProvider(paramType)
      const isObjectSelector = hasObjectSelector(paramType)

      // Special handling for VariableMode since it depends on VariableCollection
      if (paramType === 'VariableMode') {
        if (dependency) {
          const dependsOnValue = functionParameters?.[dependency.dependsOn]
          if (dependsOnValue?.id) {
            return {
              queryKey: ['enumValues', paramType, dependsOnValue.id],
              queryFn: async () => {
                const variableModes = await getVariableModeObjectSelector(
                  dependsOnValue.id,
                )
                const items = await variableModes.getAll()
                return items.map((item: any) => ({
                  id: item.id,
                  name: item.name,
                  data: { object: item.object },
                }))
              },
              enabled: true,
              staleTime: STALE_TIME,
              cacheTime: CACHE_TIME,
              refetchOnWindowFocus: false,
              refetchOnMount: false,
              refetchOnReconnect: false,
              retry: false,
            }
          }
        }
        return {
          queryKey: ['enumValues', paramType, 'no-collection'],
          queryFn: async () => [],
          enabled: false,
          data: [],
          isLoading: false,
          error: null,
        }
      }

      // Skip non-enums and VariableInfo
      if ((!isEnum && !isObjectSelector) || paramType === 'VariableInfo') {
        return {
          queryKey: ['enumValues', paramType, 'disabled'],
          queryFn: async () => null,
          enabled: false,
          data: null,
          isLoading: false,
          error: null,
        }
      }

      // Handle dependent parameters
      if (dependency) {
        const dependsOnValue = functionParameters?.[dependency.dependsOn]
        if (!dependsOnValue) {
          return {
            queryKey: ['enumValues', paramType, 'dependent', 'no-value'],
            queryFn: async () => [],
            enabled: false,
            data: [],
            isLoading: false,
            error: null,
          }
        }
      }

      return {
        queryKey: ['enumValues', paramType],
        queryFn: async () => {
          if (isObjectSelector) {
            // Use ObjectSelector for types that should return actual objects
            const selectorKey = getObjectSelectorKey(paramType)
            const selector = objectSelectors[selectorKey]

            let actualSelector
            if (typeof selector === 'function') {
              // For function selectors, call them to get the actual selector
              // Note: Most selectors don't require parameters, but VariableMode is handled separately above
              try {
                actualSelector = await selector()
              } catch (error) {
                // If the selector requires parameters, skip it
                console.warn(
                  `Selector for ${paramType} requires parameters, skipping`,
                )
                return []
              }
            } else {
              // For direct selectors, use them as-is
              actualSelector = selector
            }

            const items = await actualSelector.getAll()

            // Convert to the format expected by the UI (with id, name, data.object)
            return items.map((item) => ({
              id: item.id,
              name: item.name,
              data: { object: item.object },
            }))
          } else {
            // Use old DynamicEnumProvider for backward compatibility
            const provider = enumProviders[getProviderKey(paramType)]
            return (provider as DynamicEnumProvider<DynamicEnumValue>).getAll()
          }
        },
        enabled: true,
        staleTime: STALE_TIME,
        cacheTime: CACHE_TIME,
        // Add refetchOnWindowFocus: false to prevent unnecessary refetches
        refetchOnWindowFocus: false,
        // Add refetchOnMount: false to prevent refetching on component mount
        refetchOnMount: false,
        // Add refetchOnReconnect: false to prevent refetching on reconnect
        refetchOnReconnect: false,
        // Add retry: false to prevent retries that might cause loops
        retry: false,
      }
    }),
  })
}
