import { permissionsMap, Permission } from './PermissionsMap'

interface Permissions {
  [key: string]: boolean
}

function createPermissionsProxy<T extends object>(
  target: T,
  permissions: Permissions,
): T {
  return new Proxy(target, {
    get(obj, prop: string | symbol, receiver: any) {
      const originalMethod = obj[prop as keyof T]

      if (typeof originalMethod === 'function') {
        return function (...args: any[]) {
          const objectType = target.constructor.name
          const methodName = prop.toString()

          const methodPermissions = permissionsMap[objectType]?.[methodName]

          //   Check Permissisons
          if (methodPermissions) {
            const hasPermission = methodPermissions.permissions.every(
              (permission) => permissions[permission],
            )

            if (!hasPermission) {
              console.error(
                `You do not have permission to execute ${objectType}.${methodName}`,
              )
              return // Prevent execution if permissions are insufficient
            }
          } else {
            console.warn(
              `No permissions defined for method: ${objectType}.${methodName}`,
            )
          }

          // Call the original method
          return (originalMethod as Function).apply(receiver, args)
        }
      }

      return originalMethod
    },
  })
}

export default createPermissionsProxy
