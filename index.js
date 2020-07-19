import { GraphQLServer } from 'graphql-yoga';
import resolvers from "./resolvers";

const server = new GraphQLServer({ 
    typeDefs : "./schema.graphql",
    resolvers })

server.start(() => console.log('Server is running on localhost:4000'));