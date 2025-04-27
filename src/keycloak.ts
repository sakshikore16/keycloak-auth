import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080/auth', // Keycloak server URL
  realm: 'collab-whiteboard',        // Keycloak realm
  clientId: 'whiteboard-frontend',   // Keycloak client ID
});

export default keycloak; 