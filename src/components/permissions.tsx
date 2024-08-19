import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

// Define the type for the Permissions object
type Permissions = {
    [key in AppMode ]: boolean;
  };

  interface PermissionsProviderProps {
    children: ReactNode;
  }
  
  const PermissionsContext = createContext< Permissions | undefined>(undefined);
  
  export const PermissionsProvider: React.FC<PermissionsProviderProps> = ({ children }) => {
    const initialPermissions = Object.values(webflow.appModes).reduce((acc, mode) => {
        acc[mode] = false;
        return acc;
    }, {} as Permissions)

    const [permissions, setPermissions] = useState<Permissions>(initialPermissions)
  
    useEffect(() => {
      // Initial fetch when the component mounts
      fetchPermissions();
  
      // Subscribe to Webflow events
      const unsubscribeSelectedElement = webflow.subscribe('selectedelement', handleElementChange);
      const unsubscribeCurrentPage = webflow.subscribe('currentpage', handlePageChange);
  
      // Cleanup subscriptions on unmount
      return () => {
        unsubscribeSelectedElement();
        unsubscribeCurrentPage();
      };
    }, []);
  
    const fetchPermissions = async () => {
      try {
        const appModesArray = Object.values(webflow.appModes) // Get all App Modes
        const result = await webflow.canForAppMode(appModesArray);
  
        setPermissions(result); // Update the state with the result from the API
      } catch (error) {
        console.error("Error fetching permissions:", error);
      }
    };
  
    const handleElementChange = (element: null | AnyElement) => {
      // Trigger permission check when an element is selected
      fetchPermissions();
    };

    const handlePageChange = (page: null | Page ) => {
        // Trigger permission check when the page changes
        fetchPermissions();
      };
  
    return (
      <PermissionsContext.Provider value={permissions}>
        {children}
      </PermissionsContext.Provider>
    );
  };
  
  export default PermissionsContext;