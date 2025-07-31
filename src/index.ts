import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import { createHandler } from 'graphql-http/lib/use/express';
import express from 'express';
 
// Construct a schema
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: { 
        type: GraphQLString,
        resolve: () => 'Hello world!'
      },
    },
  }),
});
 
const app = express();
 
// Create and use the GraphQL handler.
app.all(
  '/graphql',
  createHandler({
    schema: schema,
  }),
);
 
// Start the server at port
const PORT = 3000
app.listen(PORT);
console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);