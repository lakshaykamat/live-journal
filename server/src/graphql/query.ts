//Get all users with all his post 
const QUERY = `query GetAllUsers {
    Users:getAllUsers {
      _id
      username
      email
      password
      createdAt
      updatedAt
      posts {
        _id
        title
        content
        date
        createdAt
        updatedAt
      }
    }
  }
`