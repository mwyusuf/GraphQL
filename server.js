const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
    schema {
        query: Query
    }

    type Query {
        greeting: String
    }
`;

const resolvers = {
    Query: {
        greeting: () => "Hello yusuf graphQL"
    }
}

const server = new ApolloServer({ typeDefs, resolvers });
server.listen({ port: 9000 })
    .then(serverInfo => console.log(`server running on ${serverInfo.url}`));
