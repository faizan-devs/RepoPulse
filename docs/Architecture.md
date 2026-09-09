# RepoPulse Architecture

## Overview

RepoPulse is a GitHub repository intelligence platform.

The system collects repository data from GitHub, processes that data through backend services, stores the required information, and exposes analysis through an API and web application.

The initial architecture uses a modular monolith rather than microservices.

## High-Level Architecture

```text
                    ┌─────────────────┐
                    │     GitHub      │
                    │      API       │
                    └────────┬────────┘
                             │
                             │ Repository Data
                             ▼
┌──────────────┐      ┌─────────────────┐
│              │      │                 │
│   Web App    │─────▶│    RepoPulse    │
│              │ HTTP │      API        │
└──────────────┘      │                 │
                      └────────┬────────┘
                               │
                 ┌─────────────┼─────────────┐
                 │             │             │
                 ▼             ▼             ▼
             PostgreSQL      Redis       GitHub Client
                 │             │             │
                 └─────────────┼─────────────┘
                               │
                               ▼
                       Analysis Engine
                               │
                               ▼
                         Repository
                           Insights
```

## Architecture Style

RepoPulse currently follows a **modular monolith** architecture.

The application runs as a single backend application, but its business logic is separated into independent modules.

Example:

```text
apps/api/
└── src/
    ├── modules/
    │   ├── repositories/
    │   ├── contributors/
    │   ├── analytics/
    │   ├── health/
    │   └── github/
    │
    ├── middleware/
    ├── config/
    └── server.ts
```

This keeps the system simple while allowing individual modules to evolve independently.

## Core Components

### Web Application

Responsible for:

- User interface
- Repository dashboards
- Repository insights
- Analytics visualization

The web application communicates with the backend through HTTP APIs.

### API

The API is the main application layer.

Responsibilities include:

- Authentication
- Request validation
- Business logic
- GitHub integration
- Repository analysis
- Database interaction

### GitHub Integration

The GitHub integration communicates with the GitHub API to retrieve repository information.

Examples:

- Repository metadata
- Contributors
- Commits
- Pull requests
- Issues

External GitHub data is validated before being used by the application.

### Analysis Engine

The analysis layer converts raw GitHub data into useful engineering signals.

Examples:

```text
Raw GitHub Data
       ↓
Data Processing
       ↓
Analysis
       ↓
Engineering Signals
       ↓
Repository Insights
```

Initial signals may include:

- Bus factor
- Contributor concentration
- Commit activity
- Repository activity
- Pull request activity
- Issue activity

### PostgreSQL

PostgreSQL is the primary persistent database.

It stores application data that needs to survive between requests and application restarts.

### Redis

Redis is used for temporary and performance-sensitive data.

Potential uses include:

- Caching GitHub API responses
- Rate-limit management
- Background job coordination
- Temporary analysis state

## Data Flow

A typical repository analysis follows this flow:

```text
1. User selects a GitHub repository
              ↓
2. Web application sends request
              ↓
3. API validates request
              ↓
4. GitHub client retrieves repository data
              ↓
5. Data is processed
              ↓
6. Analysis engine calculates signals
              ↓
7. Results are stored/cached
              ↓
8. API returns repository insights
              ↓
9. Web application displays results
```

## Design Principles

RepoPulse follows several principles:

### Separation of Concerns

Each module should have a clear responsibility.

### Validate External Data

Data received from GitHub or users should not be trusted automatically.

### Keep Business Logic Independent

Business rules should not be tightly coupled to HTTP controllers.

### Prefer Simple Architecture

The project uses a modular monolith initially instead of introducing microservices before they are necessary.

### Security by Default

Secrets, access tokens, and sensitive configuration should never be committed to the repository.

## Future Architecture

As RepoPulse grows, some components may be extracted into separate services if there is a real operational reason to do so.

Possible future components:

```text
API
 │
 ├── Repository Service
 ├── Analysis Worker
 ├── GitHub Integration
 ├── Notification Service
 └── Background Job System
```

The architecture will evolve based on actual scaling and product requirements rather than introducing complexity prematurely.
