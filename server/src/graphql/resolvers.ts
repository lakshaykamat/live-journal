import Post from "../Model/Post";
import User from "../Model/User";

 const resolvers = {
    Post: {
        user: async(post) => await User.findById(post.user_id)
    },
    User:{
       posts:async(user)=> await Post.find({user_id:user._id})
    },
    Query: {
        getPosts: async () => await Post.find(),
        getPost: async(_, { _id }) => await Post.findById(_id),
        getAllUsers: async () => await User.find(),
        getUser: async(_, { _id }) => await User.findById(_id)
    },
    Mutation: {
        createPost: (_, { user_id, title, content }) => {
            const newPost = new Post({
                user_id,
                title,
                content,
            });
            return newPost.save();
        },
        createUser: (_, { username, email, password }) => {
            const newUser = new User({
                username,
                email,
                password,
            });
            return newUser.save();
        }
    },
}
export default resolvers