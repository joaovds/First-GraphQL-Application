const typeDefs = `
  type User {
    id: ID!
    name: String
    email: String
    password: String
  }
  input UserInput {
    name: String!
    email: String!
    password: String!
  }
  input UserUpdate {
    name: String
    email: String
    password: String
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }
  type Mutation {
    createUser(input: UserInput): User
    updateUser(id: ID!, input: UserUpdate): User
    deleteUser(id: ID!): User
  }
`
export default typeDefs
