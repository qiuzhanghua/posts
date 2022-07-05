# Nestjs + Prisma.io Sample

## Installation

```bash
npm install
npx prisma generate
```

## Running the app

```bash
# development
pnpm start

# watch mode
pnpm start:dev

# production mode
pnpm start:prod
```

## Test

```bash
# unit tests
pnpm test

# e2e tests
pnpm test:e2e

# test coverage
pnpm test:cov
```

My .env

```dotenv
DATABASE_URL="postgresql://app:app@localhost:5432/app?schema=public"
DATABASE_PROVIDER="postgresql"
#DATABASE_URL="file:./dev.db"
#DATABASE_PROVIDER="sqlite"
```
