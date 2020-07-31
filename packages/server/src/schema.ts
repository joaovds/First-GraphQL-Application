const typeDefs = `
  type User {
    id: ID
    name: String
    email: String
    password: String
  }
  input UserInput {
    id: ID
    name: String!
    email: String!
    password: String!
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }
  type Mutation {
    createUser(input: UserInput): User
  }
`
export default typeDefs
