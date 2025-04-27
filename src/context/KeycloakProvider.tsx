import React, { createContext, useContext, useEffect, useState } from 'react';
import keycloak from '../keycloak';

interface KeycloakContextType {
  keycloak: typeof keycloak;
  authenticated: boolean;
}

const KeycloakContext = createContext<KeycloakContextType>({
  keycloak,
  authenticated: false,
});

export const useKeycloak = () => useContext(KeycloakContext);

export const KeycloakProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    keycloak.onAuthSuccess = () => {
      setAuthenticated(true);
    };

    keycloak.onAuthLogout = () => {
      setAuthenticated(false);
    };

    return () => {
      keycloak.onAuthSuccess = undefined;
      keycloak.onAuthLogout = undefined;
    };
  }, []);

  return (
    <KeycloakContext.Provider value={{ keycloak, authenticated }}>
      {children}
    </KeycloakContext.Provider>
  );
}; 