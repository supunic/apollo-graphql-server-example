const { ApolloServer, gql } = require('apollo-server-lambda')

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crishton"
  },
  {
    title: "Test",
    author: "test"
  },
]

const resolvers = {
  Query: {
    books: () => books,
    hello: () => 'hello!'
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: "/dev/graphql"
  }
})

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: true,
    credentials: true,
  },
})
