import createPermissionsProxy from './PermissionsProxy'
import { Permissions } from './PermissionsMap' // Import the correct Permissions type

/**
 * Wraps a class constructor with a proxy to ensure that all methods on instances
 * of the class are checked for permissions before being executed.
 *
 * @param ClassConstructor - The class constructor to wrap with the proxy.
 * @param permissions - The permissions object that maps permissions to boolean values.
 * @returns A proxied class constructor.
 */
function createClassProxy<T extends new (...args: any[]) => any>(
  ClassConstructor: T,
  permissions: Permissions,
): T {
  return new Proxy(ClassConstructor, {
    /**
     * Intercepts the construction of a new instance of the class.
     *
     * @param target - The original class constructor.
     * @param args - The arguments passed to the constructor.
     * @returns A proxied instance of the class with permission checks applied.
     */
    construct(target, args) {
      // Create the original instance by calling the class constructor with the provided arguments.
      const instance = new target(...args)

      // Wrap the created instance with the permissions proxy to intercept method calls.
      return createPermissionsProxy(instance, permissions)
    },
  })
}

export default createClassProxy
