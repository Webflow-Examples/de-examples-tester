import { useState, useEffect } from 'react'
import type {
  VariableCollectionInfo,
  VariableInfo,
  DynamicEnumProvider,
  DynamicEnumValue,
} from '../types/dynamic-enums'
import { collectionsProvider, variablesProvider } from '../examples/variables'

// Generic hook for any dynamic enum provider
export function useDynamicEnum<T extends DynamicEnumValue>(
  provider: DynamicEnumProvider<T>,
) {
  const [items, setItems] = useState<T[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true)
      setError(null)
      try {
        const items = await provider.getAll()
        setItems(items)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch items')
        console.error('Error fetching items:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchItems()
  }, [provider])

  return { items, loading, error }
}

// Specific hook for variable collections
export const useVariableCollections = () => {
  const {
    items: collections,
    loading,
    error,
  } = useDynamicEnum(collectionsProvider)
  return { collections, loading, error }
}

// Specific hook for variables in a collection
export const useVariables = (
  collection: VariableCollectionInfo | undefined,
) => {
  const [variables, setVariables] = useState<VariableInfo[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchVariables = async () => {
      if (!collection) {
        setVariables([])
        return
      }

      setLoading(true)
      setError(null)
      try {
        const provider = variablesProvider(collection)
        const items = await provider.getAll()
        setVariables(items)
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to fetch variables',
        )
        console.error('Error fetching variables:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchVariables()
  }, [collection?.id])

  return { variables, loading, error }
}
