import { useEffect, useState } from 'react'
import { useCapabilities } from '../context/CapabilitiesContext'
import { permissionsMap } from '../components/PermissionsMap'

// This hook checks if the user has the necessary permissions for the function.
export const usePermissionCheck = (methodCalls) => {
  const [hasPermission, setHasPermission] = useState(true)
  const capabilities = useCapabilities()

  useEffect(() => {
    if (methodCalls.length > 0) {
      const hasAllPermissions = methodCalls.every(
        ({ methodName, objectType }) => {
          const methodPermissions =
            permissionsMap[objectType]?.[methodName]?.permissions || []
          return methodPermissions.every(
            (permission) => capabilities[permission],
          )
        },
      )
      setHasPermission(hasAllPermissions)
    } else {
      setHasPermission(true)
    }
  }, [methodCalls, capabilities])

  return hasPermission
}
