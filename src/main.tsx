import React from 'react';
import ReactDOM from 'react-dom/client';
import { KeycloakProvider } from './context/KeycloakProvider';
import keycloak from './keycloak';

// Initialize Keycloak
keycloak.init({
  onLoad: 'check-sso',
  silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
  pkceMethod: 'S256'
}).then((authenticated) => {
  if (!authenticated) {
    console.log('User is not authenticated. Redirecting to login...');
    keycloak.login();
  }
}).catch((error) => {
  console.error('Failed to initialize Keycloak:', error);
});

// Create a simple app component to demonstrate Keycloak integration
const App = () => {
  return (
    <div>
      <h1>Keycloak Authentication Service</h1>
      <p>This is a Keycloak authentication service running on Vercel.</p>
      <button onClick={() => keycloak.logout()}>Logout</button>
    </div>
  );
};

// Render the app
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <KeycloakProvider>
      <App />
    </KeycloakProvider>
  </React.StrictMode>
); 