const Mutation = `
type Mutation {
    createPost(user_id: ID!, title: String!, content: String!): Post
    createUser(username: String!, email: String!, password: String!): User
}
`

const Types = `
type Post {
    _id: ID!
    user_id: ID!
    title: String!
    content: String!
    date:String!
    createdAt: String
    updatedAt: String
    user:User
}

type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    createdAt: String
    updatedAt: String
    posts:[Post]
}

type Query {
    getPosts: [Post]
    getAllUsers: [User]
    getUser(_id:ID!): User
    getPost(_id: ID!): Post
}
`

const typeDefs = `
    ${Types}
    ${Mutation}
`


export default typeDefs