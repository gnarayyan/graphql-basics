// import express from 'express';

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.json());

// app.get('/', (_req, res) => {
//   res.send('Hello, TypeScript + Express!');
// });


// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });

// src/index.ts
import express from 'express';
import http from 'http';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';

// Import our schema and resolvers
import { typeDefs } from './schemas/book.schema';
import { resolvers } from './resolvers/book';


async function startServer() {
  const app = express();
  const httpServer = http.createServer(app);

  // Set up Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server)
  );

  const PORT = 3000;
  await new Promise<void>((resolve) => httpServer.listen({ port: PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
}

startServer();