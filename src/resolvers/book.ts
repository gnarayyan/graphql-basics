// src/resolvers.ts
import { authors, books } from '../db/book';
import { v4 as uuid } from 'uuid';

export const resolvers = {
  // Resolvers for the Query type
  Query: {
    books: () => books,
    book: (parent: any, args: { id: string }) => {
      return books.find((book) => book.id === args.id);
    },
    authors: () => authors,
    author: (parent: any, args: { id: string }) => {
      return authors.find((author) => author.id === args.id);
    },
  },

  // Resolvers for nested fields. When a client queries for a Book,
  // these resolvers will be called to populate the nested fields.
  Book: {
    author: (parent: { authorId: string }) => {
      // The 'parent' argument is the book object from the previous resolver level.
      return authors.find((author) => author.id === parent.authorId);
    },
  },

  Author: {
    books: (parent: { id: string }) => {
      return books.filter((book) => book.authorId === parent.id);
    },
  },

  // Resolvers for the Mutation type
  Mutation: {
    addBook: (parent: any, args: { title: string; authorId: string }) => {
      const newBook = {
        id: uuid(), // Generate a unique ID
        title: args.title,
        authorId: args.authorId,
      };
      books.push(newBook);
      return newBook;
    },
  },
};