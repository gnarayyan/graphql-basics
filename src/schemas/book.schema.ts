
// The #graphql tag is used by editors for syntax highlighting
export const typeDefs = `#graphql
  # This is a "Book" type. It defines the queryable fields for every book.
  type Book {
    id: ID!
    title: String!
    author: Author!
  }

  # This is an "Author" type.
  type Author {
    id: ID!
    name: String!
    books: [Book!]!
  }

  # The "Query" type is special. It lists all of the available queries that
  # clients can execute, along with the return type for each.
  type Query {
    books: [Book!]!
    book(id: ID!): Book
    authors: [Author!]!
    author(id: ID!): Author
  }

  # The "Mutation" type is for operations that change data.
  type Mutation {
    addBook(title: String!, authorId: ID!): Book
  }
`;