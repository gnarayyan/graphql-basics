import { GraphQLInt, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import { getUser, getUsers } from '../services/users';



export const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
      id: {
        type: GraphQLString,
      },
      name: {
        type: GraphQLString
      },
      age: {
        type: GraphQLInt
      },
    },
  });


// This query is used when user wants to query a user by id
export const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      user: {
        type: UserType,
        args: { id: { type: GraphQLString } }, resolve: (parentValue, args) => getUser(args.id),

      },
       users: {
        type: UserType, resolve: getUsers,

      },


    },
  })

export const UserSchema =  new GraphQLSchema({
  query:RootQuery
})