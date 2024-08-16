# NextJS Challenge - Seven Sigma Group

This repository contains a typical NextJS project at Seven Sigma Group.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and configured with:

1. ESLint and Prettier
2. Git hooks set up with [Husky](https://typicode.github.io/husky/)
3. NextJS and React specific folders (`pages`, `styles`, and `layouts`)
4. TypeScript
5. Tailwind CSS
Prisma and Docker-Compose with PostgreSQL (only for backend tasks, details below)

## Project structure

The app has the following structure:

- `components`: React components used across the app.
- `pages`: NextJS specific pages. The pages should not contain any styles, and be limited to the page-specific logic.
  All the presentation and business logic should be implemented as a view.
- `layouts`: Contains the presentation elements for the pages. Can also include data and business logic.
- `utils`: Helper functions. There can be 3 sub-folders:
  - `client`: for client-side utils.
  - `server`: for server-side only.
  - `common`: for both. Typically only types.

### API

You have a NextJS API route available that you can call to fetch all the details.

You can see the code at `src/pages/api/person`

TL;DR:
- GET endpoint: `api/user?person={Person.PersonA}`
- Can request values for person A, person B, or person C.
- Person A returns in one second, person B returns in 3 seconds, person C always fails.

### Prisma, Docker, and PostgreSQL

The repository has Prisma set up, as well as a Docker Compose file that will spin up a
local PostgreSQL.

**If you're only doing the frontend tasks, you don't need to worry about this at all** (not even
running Docker Compose or adding a `.env` file) -- all the backend functionality you need is
hard-coded and ready in the API route.

If you are doing the backend tasks, you have more instructions below.


## Prerequisites

To set up the codebase and the required dependencies, simply run `npm install`;

If you're only doing the frontend tasks, that's all you need.

### Additional setup for the backend tasks
For the backend tasks, you'll need these additional steps:

1. Copy `.env.example` into `.env`. _Note: while NextJS supports both `.env` and `.env.local`, Prisma requires a `.env`_.
2. Install Docker with Docker Compose in your machine. The easiest way is to install [Docker Desktop](https://www.docker.com/products/docker-desktop/).
3. Run the services in Docker Compose: `docker compose up`.
4. Apply the existing migrations to your DB: `prisma migrate dev` ([docs](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#migrate-dev))
