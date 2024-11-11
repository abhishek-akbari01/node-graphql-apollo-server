const { buildSchema } = require("graphql");
const { ApolloServer, gql } = require('apollo-server');


// const schema = buildSchema(`
//   type User {
//     id: ID!
//     name: String!
//     email: String!
//     password: String!
//   }

//   type Query {
//     getUser(id: ID!): User
//     getUsers: [User]
//   }

//   type Mutation {
//     createUser(name: String!, email: String!, password: String!): User
//     updateUser(id: ID!, name: String, email: String, password: String): User
//     deleteUser(id: ID!): User
//   }
// `);


const schema = gql`
    type User {
      id: ID!
      name: String!
      email: String!
      password: String!
    }
  
    type Query {
      getUser(id: ID!): User
      getUsers: [User]
    }
  
    type Mutation {
      createUser(name: String!, email: String!, password: String!): User
      updateUser(id: ID!, name: String, email: String, password: String): User
      deleteUser(id: ID!): User
    }
`;

module.exports = schema;