import 'dotenv/config'
import express from 'express';
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import cors from "cors";
import database from './db'
import  resolvers from './graphql/resolvers';
import typeDefs from './graphql/schema';
const PORT = 8000 || process.env.PORT


const start = async () => {
    database()
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    await server.start();
    app.use("/", expressMiddleware(server));
    app.listen(PORT, () => console.log(`\nServer is running on Port ${PORT}`));
};
start();
