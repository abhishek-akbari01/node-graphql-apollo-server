const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./graphql/Schema");
const resolvers = require("./graphql/Resolvers");
const { ApolloServer, gql } = require('apollo-server');

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/graphql-demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

// app.use(
//   "/",
//   graphqlHTTP({
//     schema,
//     rootValue: resolvers,
//     graphiql: true,
//   })
// );

// app.listen(3005, () => {
//   console.log("Server running on http://localhost:3005/");
// });


// Create the Apollo Server instance
const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers,
    introspection: true, // Enable introspection for suggestions
    playground: true,    // Enable Playground
});
  
  // Start the server
server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});