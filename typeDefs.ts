import { gql } from 'apollo-server';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    age: Int
    posts: [Post]!
  }

  type Post {
    id: ID!
    title: String!
    content: String
  }

  type LoginSuccessResponse {
    token: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    login(username: String, password: String): LoginSuccessResponse
  }
`