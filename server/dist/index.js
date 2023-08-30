"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const start = async () => {
    const app = express();
    app.use(body_parser_1.default.json());
    app.use((0, cors_1.default)());
    const server = new server_1.ApolloServer({
        typeDefs: `
            type Post{
                id:ID!
                title:String!
                createdAt:String!
            }

            type Query{
                getPosts:[Post]
            }
        `,
        resolvers: {
            Query: {
                getPosts: () => [{ id: 2, title: "Hi", createdAt: "eee" }]
            }
        }
    });
    await server.start();
    app.use('/', (0, express4_1.expressMiddleware)(server));
    app.listen(8000, () => console.log("http://localhost:8000"));
};
start();
//# sourceMappingURL=index.js.map