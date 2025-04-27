# Keycloak Authentication Service

This repository contains the configuration and setup for a Keycloak authentication service that can be deployed on Vercel.

## Features

- OAuth2/OpenID Connect authentication
- User management
- Role-based access control
- Customizable themes
- PostgreSQL database for persistence

## Configuration

The `keycloak-config.json` file contains the initial realm configuration:
- Realm: collab-whiteboard
- Client: whiteboard-frontend
- Default user: sakshikore

## Prerequisites

- Docker and Docker Compose
- Vercel account
- Domain name (optional)

## Local Development

1. Clone this repository
2. Start the services:
   ```bash
   docker-compose up -d
   ```
3. Access Keycloak admin console at `http://localhost:8080`
   - Username: admin
   - Password: admin

## Deployment to Vercel

1. Push this repository to GitHub
2. Import the repository in Vercel
3. Configure the following environment variables in Vercel:
   - `KEYCLOAK_USER`: Admin username
   - `KEYCLOAK_PASSWORD`: Admin password
   - `DB_PASSWORD`: PostgreSQL password
4. Deploy the application

## Security Notes

- Change all default passwords in production
- Use HTTPS in production
- Configure proper CORS settings
- Set up proper backup strategy for the database

## License

MIT
