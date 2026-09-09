# RepoPulse Database

## Overview

RepoPulse uses PostgreSQL as its primary relational database.

The database stores application data and analyzed repository information that needs to persist between requests.

Redis is used separately for caching and other temporary, performance-sensitive workloads.

## Database Responsibilities

PostgreSQL is responsible for persistent data such as:

- Users
- GitHub accounts
- Repositories
- Contributors
- Repository metrics
- Analysis results
- Analysis history

Redis is not used as the primary source of persistent application data.

## Data Model

The initial data model is organized around users, GitHub repositories, contributors, and repository analysis.

```text
User
 │
 └── GitHub Account
        │
        └── Repositories
               │
               ├── Contributors
               │
               ├── Repository Metrics
               │
               └── Analysis Results
```

## Core Tables

### users

Stores RepoPulse users.

| Column     | Type      | Description           |
| ---------- | --------- | --------------------- |
| id         | UUID      | Primary key           |
| email      | VARCHAR   | User email            |
| created_at | TIMESTAMP | Account creation time |
| updated_at | TIMESTAMP | Last update           |

### github_accounts

Stores the relationship between a RepoPulse user and their GitHub account.

| Column         | Type      | Description     |
| -------------- | --------- | --------------- |
| id             | UUID      | Primary key     |
| user_id        | UUID      | Related user    |
| github_user_id | BIGINT    | GitHub user ID  |
| username       | VARCHAR   | GitHub username |
| created_at     | TIMESTAMP | Connection time |

Sensitive credentials or access tokens must not be stored in plaintext.

### repositories

Stores repositories connected to RepoPulse.

| Column            | Type      | Description           |
| ----------------- | --------- | --------------------- |
| id                | UUID      | Primary key           |
| github_account_id | UUID      | GitHub account        |
| github_repo_id    | BIGINT    | GitHub repository ID  |
| name              | VARCHAR   | Repository name       |
| full_name         | VARCHAR   | Owner/repository      |
| default_branch    | VARCHAR   | Default branch        |
| is_private        | BOOLEAN   | Repository visibility |
| created_at        | TIMESTAMP | Record creation time  |
| updated_at        | TIMESTAMP | Last update           |

### contributors

Stores contributor information associated with repositories.

| Column         | Type    | Description     |
| -------------- | ------- | --------------- |
| id             | UUID    | Primary key     |
| github_user_id | BIGINT  | GitHub user ID  |
| username       | VARCHAR | GitHub username |
| avatar_url     | TEXT    | Avatar URL      |

### repository_contributors

Connects repositories and contributors.

```text
repositories
      │
      │
      ▼
repository_contributors
      │
      │
      ▼
contributors
```

This allows a contributor to appear in multiple repositories.

### repository_metrics

Stores calculated repository metrics.

Examples include:

- Commit activity
- Pull request activity
- Issue activity
- Contributor distribution
- Bus factor
- Repository health indicators

Metrics should be stored in a way that allows historical analysis rather than continuously overwriting previous results.

## Relationships

The primary relationships are:

```text
users
  │
  └── github_accounts
          │
          └── repositories
                  │
                  ├── repository_contributors
                  │          │
                  │          └── contributors
                  │
                  └── repository_metrics
```

## Indexing

Indexes should be added based on actual query patterns.

Potential indexes include:

- `github_accounts.user_id`
- `repositories.github_account_id`
- `repositories.github_repo_id`
- `contributors.github_user_id`
- `repository_contributors.repository_id`
- `repository_contributors.contributor_id`

Indexes should not be added blindly because they increase storage requirements and can add overhead to writes.

## Migrations

Database schema changes should be managed through versioned migrations.

A migration should be created whenever the database schema changes.

Example:

```text
migrations/
├── 001_create_users
├── 002_create_github_accounts
├── 003_create_repositories
└── 004_create_contributors
```

Never modify production database schemas manually without recording the change through the migration system.

## Data Integrity

RepoPulse should enforce important relationships using database constraints.

Examples:

- Primary keys
- Foreign keys
- Unique constraints
- Not-null constraints
- Appropriate check constraints

Application-level validation should complement database constraints rather than replace them.

## Security

Database credentials must be provided through environment variables or a secure secret-management system.

Never commit:

- Database passwords
- Connection strings containing credentials
- GitHub access tokens
- API keys

to the repository.

## Future Considerations

As RepoPulse grows, the database may need:

- Partitioning for large metric datasets
- Read replicas
- Better time-series storage
- Data retention policies
- Query optimization
- Database observability

These should be introduced based on measured requirements rather than prematurely.
