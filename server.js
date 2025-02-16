const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { typeDefs } = require('./graphql/schema');
const { resolvers } = require('./graphql/resolvers');

async function startServer() {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());

  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/employeeDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(' Connected to MongoDB');
  } catch (error) {
    console.error(' MongoDB connection error:', error);
    process.exit(1);
  }

  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
  });
}

startServer().catch((err) => console.error(err));
