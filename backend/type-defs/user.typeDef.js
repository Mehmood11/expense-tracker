const userTypeDefs = `#graphql
 type User {
    _id: ID!
    username: String!
    name: String!
    password: String!
    profilePicture: String
    gender: String!
    transactions: [Transaction!]
 }

 type Query {
    authUser: User
    user(userId: ID!): User
 }

 type Mutation {
    signUp(input: signUpInput!): User
    login(input: loginInput!): User
    logout: LogoutResponse
 }

 input signUpInput {
    username: String!
    name: String!
    password: String!
    gender: String!
 }

 input loginInput {
    username: String!
    password: String!
 }

 type LogoutResponse {
    message: String!
 }
`;

export default userTypeDefs;
