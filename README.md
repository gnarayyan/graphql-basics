# GraphQL Basics
Learning guide to learn graphql api using expressjs


## Goals
- Why GraphQL
- How GraphQL works
- Learn how create GraphQL
- Connect db with GraphQL


## Setup Project
```shell
# Core dependencies
npm install express graphql @apollo/server @as-integrations/express5 cors ruru

# Dev dependencies for TypeScript and live-reloading
npm install -D typescript @types/express @types/cors @types/node ts-node-dev
```


> Here ruru is a GraphiQL IDE tool to issue GraphQL queries directly in the browser.

```graphql
query GetUser {
  user(id: "123"){
    name
    age
  }
}
```
