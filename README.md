# Nestjs + Prisma.io Sample

## Installation

```bash
npm install
npx prisma db push
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


## graphql
add Graphql Support
```graphql
# query {
#   posts {
#     id
  
#   }
# }

# mutation {
#   addUser(userCreateInput: {name: "Daniel", email: "qiuzhanghua@icloud.com"}) {
#     id
#   }
# }

query {
  users {
    id
    name
  }
}
```