import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react'

// Define the structure of the capabilities object
type Capabilities = {
  [key in AppMode]: boolean
}

// Define the initial capabilities (all set to false)
const initialCapabilities: Capabilities = {
  canAccessCanvas: false,
  canManageAssets: false,
  canAccessAssets: false,
  canDesign: false,
  canEdit: false,
  canCreateComponents: false,
  canModifyComponents: false,
  canCreateStyles: false,
  canModifyStyles: false,
  canCreatePage: false,
  canReadPageSettings: false,
  canManagePageSettings: false,
  canReadVariables: false,
  canModifyVariables: false,
  canModifyImageElement: false,
}

// Create the context with the initial value
const CapabilitiesContext = createContext<Capabilities>(initialCapabilities)

// Hook to use the context
export const useCapabilities = () => useContext(CapabilitiesContext)

// Define the CapabilitiesProvider props
interface CapabilitiesProviderProps {
  children: ReactNode
}

// Create CapabilitiesProvider to subscribe to the `currentappmode` event and update the capabilities object
const CapabilitiesProvider: React.FC<CapabilitiesProviderProps> = ({
  children,
}) => {
  // State Initialization
  const [capabilities, setCapabilities] =
    useState<Capabilities>(initialCapabilities)

  // Function to update capabilities
  const updateCapabilities = async () => {
    try {
      const updatedCapabilities = await webflow.canForAppMode(
        Object.values(webflow.appModes) as AppMode[],
      )
      setCapabilities(updatedCapabilities)
    } catch (error) {
      console.error('Error fetching capabilities', error)
    }
  }

  // Subscribe to 'currentappmode' in useEffect
  useEffect(() => {
    const unsubscribeAppMode = webflow.subscribe(
      'currentappmode',
      updateCapabilities,
    )

    // Cleanup subscription when component unmounts
    return () => {
      unsubscribeAppMode()
    }
  }, [])

  return (
    <CapabilitiesContext.Provider value={capabilities}>
      {children}
    </CapabilitiesContext.Provider>
  )
}

export default CapabilitiesProvider
