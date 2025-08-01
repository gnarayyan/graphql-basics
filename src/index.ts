
import { createHandler } from 'graphql-http/lib/use/express';
import express from 'express';
import { ruruHTML } from 'ruru/server';
 import {UserSchema} from './schemas/user.schema'

 
const app = express();

// // Serve the GraphiQL IDE.
app.get('/', (_req, res) => {
  res.type('html');
  res.end(ruruHTML({ endpoint: '/graphql' }));
});
 

app.all(
  '/graphql',
  createHandler({
    schema:UserSchema
    

  }),
);

// Start the server at port
const PORT = 3000
app.listen(PORT);
console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);